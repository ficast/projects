import React, { Component } from 'react';
import './App.css';
import Pokedex from './components/Pokedex/Pokedex';
import Header from "./components/Header/Header";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Pokedex />
      </div>
    )
  }
}
