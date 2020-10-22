import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductBox extends Component {
  render() {
    const divStyle = {
      backgroundImage: `url(${this.props.thumb})`,
    };
    return (
      <div className="product-box">
        <div className="product-box--thumb">
          <img src={`${this.props.thumb}`} className="product-box--thumb--image" />
        </div>
        <div className="product-box--title">
          <h2>{this.props.name}</h2>
        </div>
        <div className="product-box--button">
          <Link to={`detail/` + this.props.url}>Detalhes do Produto</Link>
        </div>
      </div>
    );
  }
};

export default ProductBox;
