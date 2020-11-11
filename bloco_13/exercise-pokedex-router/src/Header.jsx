import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <h1> Pokedex </h1>
        <nav>
          <span><Link to='/'>Home</Link></span>
          <span><Link to='/about'>About</Link></span>
          <span><Link to='/favorite'>Favorite Pokemons</Link></span>
        </nav>
      </header>
    );
  }
}

export default Header;
