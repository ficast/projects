import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { MovieList, EditMovie, MovieDetails, NewMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <header>
        <div>
          <h1>Movie Card Library CRUD</h1>
        </div>
        <ul className="header-nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies/new">ADICIONAR CARTÃO</Link>
          </li>
        </ul>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={MovieList} />
          <Route exact path="/movies/new" component={NewMovie} />
          <Route exact path="/movies/:id" component={MovieDetails} />
          <Route exact path="/movies/:id/edit" component={EditMovie} />
          <Route path="/" component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
