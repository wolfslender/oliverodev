// Header.js
import React from 'react';
import './Header.css';
import logo from '../../images/logo-oliverodev.png'; // Reemplaza 'logo.png' con el nombre de tu archivo de logo

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
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
