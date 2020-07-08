import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Search from '@material-ui/icons/Search';
import * as api from '../../services/api';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  setInputValue(e) {
    e.preventDefault();
    this.setState({ inputValue: e.target.value });
  }

  async setResults(inputValue) {
    if (inputValue) {
      const { setfilteredProducts, categoryId, setTextToSearch } = this.props;
      const products = categoryId
        ? await api.getProductsFromCategoryAndQuery(categoryId, inputValue)
        : await api.getProductsFromCategoryAndQuery(undefined, inputValue);

      setfilteredProducts(products.results);
      this.setState({ inputValue: '' });
      setTextToSearch(inputValue);
    }
  }

  renderForm() {
    const { inputValue } = this.state;
    const { setTextToSearch } = this.props;
    return (
      <form className="search-form" onSubmit={(e) => this.setInputValue(e)}>
        <input
          className="search-input" placeholder="Buscar produtos, marcas e muito mais..."
          type="text" data-testid="query-input" value={inputValue}
          onChange={(e) => this.setInputValue(e)}
        />
        <button
          className="search-button" type="submit" data-testid="query-button" onClick={(e) => {
            e.preventDefault();
            setTextToSearch(inputValue);
            this.setResults(inputValue);
          }}
        ><Search fontSize="small" />
        </button>
      </form>
    );
  }
  render() {
    const { cartItems } = this.props;
    return (
      <header className="header"><h1>FancyPants<br />Store</h1>
        {this.renderForm()}
        <Link to="/cart" className="flex">
          <ShoppingCart data-testid="shopping-cart-button" fontSize="large" style={{ color: 'white' }} />
          <div data-testid="shopping-cart-size">
            {cartItems.reduce((acc, { quantity }) => acc + quantity, 0)}
          </div>
        </Link>
      </header>
    );
  }
}
