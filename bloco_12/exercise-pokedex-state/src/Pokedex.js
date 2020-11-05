import React from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = { 
      pokemonIndex: 0,
      type: 'All' 
    };
  }
  
  nextPokemon = () => {
    this.setState(state => ({
      pokemonIndex: (state.pokemonIndex + 1) % this.fetchPokemons().length,
    }));
  }

  filteredPokemons = (event) => {
    const typePokemon = event.target.innerText;
    this.setState(_state => ({ type: typePokemon }));
  }

  fetchPokemons = () => {
    const { pokemons } = this.props;

    if (this.state.type === 'All') {
      return pokemons;
    } else {
      return pokemons.filter(pokemon => pokemon.type === this.state.type);
    }  
  }
  
  render() {
    const pokemons = this.fetchPokemons();

    return (
      <div className="pokedex">
        <Pokemon pokemon={pokemons[this.state.pokemonIndex]} />
        <div className="buttons">
          <button onClick={this.filteredPokemons}>Fire</button>
          <button onClick={this.filteredPokemons}>Psychic</button>
        </div>
        <div className="next-pokemon">
          <button onClick={this.nextPokemon}>Próximo Pokemon</button>
        </div>
      </div>
    );
  }
}

export default Pokedex;
