import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    const then = () => this.setState({ movies, loading: false });
    then();
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />;

    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
        {/* <Link to="/movies/new">ADICIONAR CARTÃO</Link> */}
      </div>
    );
  }
}

export default MovieList;
