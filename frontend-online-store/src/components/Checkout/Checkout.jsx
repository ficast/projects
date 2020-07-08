import React, { Component } from 'react';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

export default class extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <h1>Checkout</h1>
        {cartItems.map((item) => (
          <CheckoutProduct key={item.id} value={item.id} item={item} />
        ))}
        <h2>
          Valor total: R$
          {cartItems.reduce((acc, { price, quantity }) => (price * quantity) + acc, 0)}
        </h2>
        <CheckoutForm />
      </div>
    );
  }
}
