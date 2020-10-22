import React from 'react';

const Header = (props) => {
  return (
    <header className="header">
      <h2>{props.title}</h2>
    </header>
  )
}

export default Header;