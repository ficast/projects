import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddToCart from '../AddToCart/AddToCart';
// import * as api from '../../services/api';

export default class extends Component {
  render() {
    const { data, addToCart, cartItems } = this.props;
    const { title, price, thumbnail, id, shipping: { free_shipping: freeShipping } } = data;
    return (
      <div className="ProductCard" data-testid="product">
        <img src={thumbnail} alt={title} />
        <div className="ProductCard-text-content">
          <h2 className="ProductCard-product-name">{title}</h2>
          <p>R$ {price.toFixed(2)}</p>
          <div>{freeShipping ?
            <div className="free-shipping" data-testid="free-shipping">Frete Grátis</div>
            : <div />}
          </div>
          <div className="ProductCard-content-bottom-part">
            <Link to={`/products/${id}`} data-testid="product-detail-link">
              Detalhes
            </Link>
            <AddToCart
              testid="product-add-to-cart" data={data}
              id={id} addToCart={addToCart} cartItems={cartItems}
            />
          </div>
        </div>
      </div>
    );
  }
}
