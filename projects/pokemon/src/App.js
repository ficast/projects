import React, { Component } from 'react';
import './App.css';
// import Pokedex from './components/Pokedex/Pokedex';
import Header from "./components/Header/Header";
import Pokegame from './components/Pokegame/Pokegame';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Pokedex /> */}
        <Pokegame />
      </div>
    )
  }
}
