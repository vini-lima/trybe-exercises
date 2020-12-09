import React, { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends Component {
  render() {
    return (
      <div className="pokecontainer">
        <h1>Pokedéx</h1>
        <div className="pokedex">
        {pokemons.map(pokemon => {
          return <Pokemon 
            key={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            averageWeight={pokemon.averageWeight}
            image={pokemon.image}
          />
        })}
        </div>
      </div>
    )
  }
}

export default Pokedex;
