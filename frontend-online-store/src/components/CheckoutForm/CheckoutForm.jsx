import React, { Component } from 'react';

export default class extends Component {
  render() {
    return (
      <form>
        <label htmlFor="name">Nome completo
          <input type="text" id="name" data-testid="checkout-fullname" />
        </label>
        <label htmlFor="email">Email
          <input type="email" id="email" data-testid="checkout-email" />
        </label>
        <label htmlFor="cpf">CPF
          <input type="text" id="cpf" data-testid="checkout-cpf" />
        </label>
        <label htmlFor="phone">Telefone
          <input type="text" id="phone" data-testid="checkout-phone" />
        </label>
        <label htmlFor="cep">CEP
          <input type="text" id="cep" data-testid="checkout-cep" />
        </label>
        <label htmlFor="adress">Endereço
          <input type="text" id="adress" data-testid="checkout-address" />
        </label>
        <button type="button">Finalizar Compra</button>
      </form>
    );
  }
}
