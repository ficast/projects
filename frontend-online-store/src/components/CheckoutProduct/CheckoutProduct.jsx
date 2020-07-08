import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { item } = this.props;
    const { price, title, quantity } = item;
    return (
      <div>
        <p>{title}</p>
        <p>{price}</p>
        <p>{quantity}</p>
        <p>
          Total: R$
          {price * quantity}
        </p>
      </div>
    );
  }
}
