// Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>OliveroDev</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">Sobre Mí</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
