import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../services/api';

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { canRenderList: false };
  }

  componentDidMount() {
    const callGetCategories = async () => {
      const data = await api.getCategories();
      this.setState({
        categories: data,
        canRenderList: true,
      });
    };
    callGetCategories();
  }

  async setResults(id) {
    const { setfilteredProducts, textToSearch, setCategoryId } = this.props;
    const products = textToSearch !== ''
      ? await api.getProductsFromCategoryAndQuery(id, textToSearch)
      : await api.getProductsFromCategoryAndQuery(id);
    setfilteredProducts(products.results);
    setCategoryId(id);
  }

  render() {
    const { categories, canRenderList } = this.state;
    return (
      <nav className="nav">
        {canRenderList ? (
          categories.map((item) => (
            <Link
              data-testid="category"
              to="/"
              key={item.id}
              id={item.id}
              onClick={(e) => {
                e.preventDefault();
                this.setResults(e.target.id);
              }}
            >
              {item.name}
            </Link>
          ))
        ) : (
          <div>loading...</div>
        )}
      </nav>
    );
  }
}
