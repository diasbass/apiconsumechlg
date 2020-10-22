import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

const Footer = (props) => {
  return (
    <footer className="footer">
      <Container fluid className="footer--element-container">
        <p>{props.text}</p>
      </Container>      
    </footer>
  )
}

export default Footer;