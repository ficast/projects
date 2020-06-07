import React, { Component } from 'react';
import POKEMON_DATA from '../data/pokedex.json'
import './Pokedex.css';
import Pokecard from '../Pokecard/Pokecard';

export default class Pokedex extends Component {
  static defaultProps = {
    pokemon: POKEMON_DATA,
  }

  render() {
    return (
      <div className="Pokedex">
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => {
            return (
              <Pokecard
                key={p.id}
                pokemon={p}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
