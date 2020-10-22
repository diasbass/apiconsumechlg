import React, { Component } from 'react';
import axios from 'axios';
import ProductBox from '../../components/ProductBox';

class Products extends Component {
  state = {
    listProducts: [],
    loading: false,
    errorApi: false,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        'https://api.evino.com.br/catalog/v2/product'
      );
      const products = response.data.data.products;
      if (response.status === 200) {
        this.setState({
          listProducts: products,
        });
      }
    } catch (error) {
      this.setState({
        errorApi: true,
      });
    } finally {
      this.setState({ loading: false });
    }
  }
  
  render() {
    let products = <p>Ops, ocorreu um erro! Tente novamente</p>;
    let loadingMessage = 'Carregando...';
    if (!this.state.errorApi) {
      products = this.state.listProducts.map((product) => {
        return (
          <ProductBox
            name={product.name}            
            thumb={product.images.medium}
            url={product.url}
            key={product.sku}
          />
        );
      });
    }
    return (
      <div className="container">
        {!this.state.loading ? products : loadingMessage}
      </div>
    )
  }
}

export default Products;