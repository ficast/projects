import React, { Component } from 'react';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.handle = this.handle.bind(this);
    this.includeMovie = this.includeMovie.bind(this);
  }

  resetState() {
    this.setState(initialState);
  }

  handle(e, name) {
    return name === 'rating'
      ? this.setState({ [name]: Number(e.target.value) })
      : this.setState({ [name]: e.target.value });
  }

  includeMovie() {
    const { onClick } = this.props;
    onClick(this.state);
    this.resetState();
  }

  render() {
    const { subtitle, title, imagePath, storyline, rating, genre } = this.state;
    return (
      <form>
        <label htmlFor="title">
          Título
          <input name="title" value={title} type="text" onChange={(e) => this.handle(e, 'title')} />
        </label>
        <label htmlFor="subtitle">
          Subtítulo
          <input
            name="subtitle"
            value={subtitle}
            type="text"
            onChange={(e) => this.handle(e, 'subtitle')}
          />
        </label>
        <label htmlFor="imagePath">
          Imagem
          <input
            name="imagePath"
            value={imagePath}
            type="text"
            onChange={(e) => this.handle(e, 'imagePath')}
          />
        </label>
        <label htmlFor="storyline">
          Sinopse
          <textarea
            name="storyline"
            value={storyline}
            type="text"
            onChange={(e) => this.handle(e, 'storyline')}
          />
        </label>
        <label htmlFor="rating">
          Avaliação
          <input
            name="rating"
            value={rating}
            type="number"
            max={5}
            onChange={(e) => this.handle(e, 'rating')}
          />
        </label>
        <label htmlFor="genre">
          Gênero
          <select name="genre" value={genre} onChange={(e) => this.handle(e, 'genre')}>
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
          </select>
        </label>
        <button type="button" onClick={this.includeMovie}>
          Adicionar filme
        </button>
      </form>
    );
  }
}

export default AddMovie;
