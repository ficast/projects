import React, { Component } from 'react';
import AddMovie from './AddMovie';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };

    this.updtSt = this.updtSt.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }

  updtSt(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  addMovie({ subtitle, title, imagePath, storyline, rating, genre }) {
    return this.setState((state) => ({
      movies: [
        ...state.movies,
        {
          title,
          subtitle,
          storyline,
          rating,
          imagePath,
          genre,
        },
      ],
    }));
  }

  renderMovieList() {
    const { selectedGenre, bookmarkedOnly, movies, searchText } = this.state;

    let filteredMovies = movies.filter(({ title, subtitle, storyline }) => Object.values({
      title: title.toLowerCase(),
      subtitle: subtitle.toLowerCase(),
      storyline: storyline.toLowerCase(),
    }).some((line) => line.includes(searchText.toLowerCase())));

    if (selectedGenre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === selectedGenre);
    }
    return bookmarkedOnly ? filteredMovies.filter((movie) => movie.bookmarked) : filteredMovies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre } = this.state;
    return (
      <div>
        <SearchBar
          searchText={searchText}
          onSearchTextChange={(e) => this.setState({ searchText: e.target.value })}
          bookmarkedOnly={bookmarkedOnly}
          onBookmarkedChange={() => this.setState({ bookmarkedOnly: !bookmarkedOnly })}
          selectedGenre={selectedGenre}
          onSelectedGenreChange={(e) => this.setState({ selectedGenre: e.target.value })}
        />
        <MovieList movies={this.renderMovieList()} />
        <AddMovie onClick={this.addMovie} />
      </div>
    );
  }
}

export default MovieLibrary;
