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
      return productState.product.map((item) => {
        return (
          <div className="product-detail" key={item.sku}>
            <div className="product-detail--image">
              <img src={item.images.medium} alt={item.name} />
            </div>
            <div className="product-detail--info">
              <h2>{item.name} </h2>
              <p className="product-detail--country flex items-center">
                País: <img src={item.countries[0].icon} width="20" alt={item.name} />
                <span>{item.countries[0].name}</span>
              </p>
              <h3>Sommelier: {item.sommelier.reviewer}</h3>
              <p>{item.sommelier.commentary}</p>
              <p>
                <strong className="font-bold">Harmonização: </strong>
                {item.pairing}
              </p>
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
    </div>
  );
};

export default ProductDetail;
