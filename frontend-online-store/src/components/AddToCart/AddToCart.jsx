import React, { Component } from 'react';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class extends Component {
  render() {
    const { addToCart, data, testid } = this.props;
    const item = { ...data };

    return (
      <button
        className="btn-add-to-cart"
        data-testid={testid}
        type="button"
        onClick={(e) => {
          e.preventDefault();
          addToCart(item);
        }}
      >
        <AddBoxIcon />
        Adicionar ao carrinho
      </button>
    );
  }
}
