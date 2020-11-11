import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import pokemons from './data';
import Favorite from './Favorite';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

class Content extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/favorite' component={Favorite} />
          <Route path='/pokemons/:id' component={PokemonDetails} />
          <Route path='/' render={(props) => <Pokedex {...props} pokemons={pokemons} />} />
        </Switch>  
      </main>
    );
  }
}

export default Content;
