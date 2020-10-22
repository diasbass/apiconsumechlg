import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

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
      <Link to="/" className="btn-back">Voltar para lista de produtos</Link>
      <ProductItem />
      <Link to="/" className="btn-back">Voltar para lista de produtos</Link>
    </div>
  );
};

export default ProductDetail;
