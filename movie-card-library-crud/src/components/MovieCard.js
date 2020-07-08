import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class MovieCard extends React.Component {
  render() {
    const { title, id, storyline, imagePath: image } = this.props.movie;
    return (
      <div data-testid="movie-card" className="movie-card">
        <img className="movie-card-image" src={image} alt={title} />
        <h1 className="movie-card-h1">{title}</h1>
        <p>{storyline}</p>
        <Link to={`/movies/${id}`}>VER DETALHES</Link>
      </div>
    );
  }
}

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  }).isRequired,
};
