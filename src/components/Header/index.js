import React from 'react';
import { Container } from 'react-bootstrap';
import './style.scss';

const Header = (props) => {
  return (    
    <header className="header">
      <Container fluid className="header--element-container">
        <h2>{props.title}</h2>
      </Container>
    </header>
  )
}

export default Header;