import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AddToCart from '../AddToCart/AddToCart';

function addEvaluation() {
  const evaluationToSend = document.querySelector('#evaluation').value;
  const evaluationSended = document.querySelector('#evaluation-sended');
  const comment = document.createElement('li');
  comment.innerHTML = evaluationToSend;
  evaluationSended.appendChild(comment);
}

function renderCommentTextarea() {
  return (
    <form>
      <textarea
        className="ProductDetail-textarea" data-testid="product-detail-evaluation"
        placeholder="Deixar comentário" id="evaluation"
      />
      <button
        type="submit" onClick={(e) => {
          e.preventDefault();
          addEvaluation();
        }}
      >Enviar comentário
      </button>
    </form>
  );
}

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = { couldRender: false };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    fetch(`https://api.mercadolibre.com/items/${id}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ data, couldRender: true });
      })
      .catch((error) => console.log(`Erro: ${error}`));
  }

  render() {
    const { couldRender } = this.state;
    if (!couldRender) return <div>Loading...</div>;

    const { data } = this.state;
    const { pictures, title, price } = data;
    const { match, addToCart, cartItems } = this.props;
    const { id } = match.params;

    return (
      <div className="ProductDetail">
        <div className="ProductDetail-top-part">
          <div className="ProductDetail-left-part"><img alt="" src={pictures[0].url} /></div>
          <div className="ProductDetail-right-part">
            <h2 className="ProductDetail-name" data-testid="product-detail-name">{title}</h2>
            <span className="ProductDetail-price">R&#36; {price.toFixed(2)}</span>
            <div className="ProductDetail-shop-opt">
              <AddToCart
                testid="product-detail-add-to-cart" data={data} id={id} addToCart={addToCart}
              />
              <ShoppingCart fontSize="large" style={{ color: 'black' }} />
              {cartItems.reduce((acc, { quantity }) => acc + quantity, 0)}
            </div>{renderCommentTextarea()}
          </div>
        </div>
        <Link to="/"><p>Voltar</p></Link><ul id="evaluation-sended" />
      </div >
    );
  }
}
