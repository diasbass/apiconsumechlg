import React, { Component } from "react";
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Card, Col } from 'react-bootstrap';
import './style.scss';

class ProductBox extends Component {
  render() {
    return (      
          <Col md={4} className="productbox">
            <Card style={{ width: '18rem' }}>
              <figure className="productbox--main-image">
                <Card.Img variant="top" src={`${this.props.thumb}`} />
              </figure>
              <Card.Body>
                <Card.Title>{this.props.name}</Card.Title>
                <p className="productbox--product-type">{this.props.type}</p>
                <LinkContainer activeClassName="" to={`detail/` + this.props.url}><Button variant="success" className="btnCentered">Detalhes do Produto</Button></LinkContainer>
              </Card.Body>
            </Card>
          </Col>
    );
  }
};

export default ProductBox;
