import React, { Component } from 'react';
import ProductCard from '../ProductCard/ProductCard';

export default class extends Component {
  render() {
    const { filteredProducts, categoryId, couldSet, addToCart, cartItems } = this.props;

    if (!couldSet) {
      return (
        <div className="main" data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
      );
    }

    return (
      <div className="main">
        <span className="search-results">Exibindo resultados da pesquisa:</span>
        {filteredProducts.map((item) => (
          <ProductCard
            key={item.id}
            data={item}
            categoryId={categoryId}
            addToCart={addToCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    );
  }
}
