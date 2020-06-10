import React, { Component } from 'react';
import './Pokecard.css';

export default class Pokecard extends Component {
  render(){
    const { name: {english:name}, type, base: {HP:exp}, id } = this.props.pokemon;
    const idToThree = `00${id}`.slice(-3);
    let imgSrc = require(`../data/images/${idToThree}.png`);
    return (
      <div className="Pokecard">
        <h2 className="Pokecard-title">{name}</h2>
        <img
          className="Pokecard-img"
          src={imgSrc}
          alt={name} 
        />
        <div className="Pokecard-data">Type: {type.join(' / ')}</div>
        <div className="Pokecard-data">EXP: {exp}</div>
      </div>
    )
  }
}