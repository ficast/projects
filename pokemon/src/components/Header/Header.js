import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
 
export default class extends Component {

  render() {
    return(
      <header className="Header">
        <h1 className="Header-bar">Pokemon Battle</h1>
        <FontAwesomeIcon className="Header-bar" icon={faBars} size="2x" style={{ color: '#eceff1' }} />
      </header>
    )
  }

}