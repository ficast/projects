import React, { Component } from 'react';
import './Pokegame.css';
import POKEMON_DATA from '../data/pokedex.json';
import Pokedex from '../Pokedex/Pokedex';

export default class extends Component {
  static defaultProps = {
    pokemon: POKEMON_DATA,
  };

  render() {
    const { pokemon: pokeData } = this.props;
    const hand1 = [];
    const hand2 = [];

    while (hand1.length < 4 && hand2.length <= 4) {
      hand1.push(pokeData[Math.floor(Math.random() * pokeData.length)]);
      hand2.push(pokeData[Math.floor(Math.random() * pokeData.length)]);
    };

    const exp1 = hand1.reduce((acc, {base: {HP: exp}}) => (acc + exp), 0)
    const exp2 = hand2.reduce((acc, {base: {HP: exp}}) => (acc + exp), 0)
  
    return (
      <div className="Pokegame">
        <Pokedex pokemon={hand1} isWinner={exp1 > exp2} exp={exp1}/>
        <div className="versus"></div>
        <Pokedex pokemon={hand2} isWinner={exp2 > exp1} exp={exp2}/>
        
        {/* <div className="Pokegame-cards">
          {hand1.map(p => <Pokecard key={p.id} pokemon={p} />)}
        </div>
        <div>
          <h1>X</h1>
        </div>
        <div className="Pokegame-cards">
          {hand2.map(p => <Pokecard key={p.id} pokemon={p} />)}
        </div> */}
      </div>
    )
  }
}
