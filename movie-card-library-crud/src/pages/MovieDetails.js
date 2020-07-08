import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;

    this.state = {
      movie: {
        title: '',
        storyline: '',
        imagePath: '',
        genre: '',
        rating: 0,
        subtitle: '',
        id: '',
      },
      id,
      loading: true,
      shouldRiderict: false,
    };
  }

  async componentDidMount() {
    const movie = await movieAPI.getMovie(this.state.id);
    const thenDetails = () => this.setState({ movie, loading: false });
    thenDetails();
  }

  render() {
    const { movie, loading, shouldRiderict } = this.state;

    if (loading) return <Loading />;

    if (shouldRiderict) return <Redirect to="/" />;
    const { title, storyline, imagePath, genre, rating, subtitle, id } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={`../${imagePath}`} />
        <h1>{`${title}`}</h1>
        <p>{`Subtitle: ${subtitle}`}</p>
        <p>{`Storyline: ${storyline}`}</p>
        <p>{`Genre: ${genre}`}</p>
        <p>{`Rating: ${rating}`}</p>
        <div className="flex-line">
          <Link to={`/movies/${id}/edit`}>EDITAR</Link>
          <Link to="/">VOLTAR</Link>
          <Link
            to="/"
            onClick={() => {
              movieAPI.deleteMovie(id);
              this.setState({ shouldRiderict: true });
            }}
          >
            DELETAR
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieDetails;

MovieDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
