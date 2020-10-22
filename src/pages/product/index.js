import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { LinkContainer } from 'react-router-bootstrap';
//import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const ProductDetail = () => {
  const [productState, setProductState] = useState({
    product: [],
  });
  let { id } = useParams();

  useEffect(() => {
    const apiUrl = axios.get(`https://api.evino.com.br/catalog/v2/product/${id}`);
    apiUrl.then((response) => {
      if (!productState.product.length) {
        const item = response.data.data;
        setProductState({
          product: [item],
        });
      }
    });
  });

  function ProductItem() {
    if (productState.product.length) {
      return productState.product.map((product) => {
        return (
          <div className="product-spec" key={product.sku}>
            <div className="product-spec--image">
              <img src={product.images.medium} alt={product.name} />
            </div>
            <div className="product-spec--description">
              <h2>{product.name} </h2>              
              <p>{product.sommelier.commentary}</p>
              <p>
                <strong className="font-bold">Harmonização: </strong>
                {product.pairing}
              </p>
              <p className="product-spec--country">
                País: <img src={product.countries[0].icon} width="20" alt={product.name} />
                <span>{product.countries[0].name}</span>
              </p>
              <h3>Sommelier: {product.sommelier.reviewer}</h3>
            </div>
          </div>
        );
      });
    } else {
      return null;
    }
  }

  return (
    <div className="productDetail container">      
      <LinkContainer to="/" activeClassName="">
        <Button variant="outline-success" size="sm">Voltar para lista de produtos</Button>
      </LinkContainer>

      <ProductItem />

      <LinkContainer to="/" activeClassName="">
        <Button variant="outline-success" size="sm">Voltar para lista de produtos</Button>
      </LinkContainer>
    </div>
  );
};

export default ProductDetail;
