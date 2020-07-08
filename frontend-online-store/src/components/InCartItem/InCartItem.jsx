import React, { Component } from 'react';

export default class extends Component {
  render() {
    const { changeQuantity, item } = this.props;
    const { price, title, quantity } = item;
    return (
      <div>
        <p data-testid="shopping-cart-product-name">{title}</p>
        <p>{price}</p>
        <p data-testid="shopping-cart-product-quantity">{quantity}</p>
        <button
          data-testid="product-increase-quantity" value="+" type="button" onClick={(e) => {
            e.preventDefault();
            changeQuantity(e.target.value, item);
          }}
        >+</button>
        <button
          data-testid="product-decrease-quantity" value="-" type="button" onClick={(e) => {
            e.preventDefault();
            changeQuantity(e.target.value, item);
          }}
        >-</button>
      </div>
    );
  }
}
