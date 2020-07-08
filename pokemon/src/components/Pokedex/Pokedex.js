import React, { Component } from 'react';
import POKEMON_DATA from '../data/pokedex.json'
import './Pokedex.css';
import Pokecard from '../Pokecard/Pokecard';

export default class Pokedex extends Component {
  static defaultProps = {
    pokemon: POKEMON_DATA,
  }

  render() {
    const { isWinner, exp } = this.props;
    let classResult;
    isWinner ?
    classResult = "Winner"
    : classResult = "Looser"

    return (
      <div className="Pokedex">
        <h2 className={`text${classResult}`}>{classResult}</h2>
        <h4>Total de pontos: {exp}</h4>
        <div className={`Pokedex-cards ${classResult}`}>
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
