import React from 'react';

const SearchBar = ({
  searchText, onSearchTextChange, bookmarkedOnly, onBookmarkedChange, selectedGenre,
  onSelectedGenreChange,
}) => (
  <form>
    <label htmlFor="searchText">
      Inclui o texto:
      <input name="searchText" value={searchText} type="text" onChange={onSearchTextChange} />
    </label>
    <label htmlFor="bookmarkedOnly">
      Mostrar somente favoritos
      <input
        name="bookmarkedOnly"
        type="checkbox"
        checked={bookmarkedOnly}
        onChange={onBookmarkedChange}
      />
    </label>
    <label htmlFor="selectedGenre">
      Filtrar por gênero
      <select name="selectedGenre" value={selectedGenre} onChange={onSelectedGenreChange}>
        <option value="">Todos</option>
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
      </select>
    </label>
  </form>
);

export default SearchBar;
