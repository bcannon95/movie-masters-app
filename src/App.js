import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { collection, getDocs, doc, setDoc, deleteDoc, addDoc  } from 'firebase/firestore/lite';

import db from './config/firebase-setup';
import Home from './pages/Home';
import CreateMovie from './pages/CreateMovie';
import EditMovie from './pages/EditMovie';
import MovieList from './pages/MovieList';
import MovieRandomiser from './pages/MovieRandomiser'
import ShowMovie from './pages/ShowMovie'
import './App.css';

export default class App extends React.Component {
	state = {
		movieList: [],
	}

  createMovie = async newMovie => {
    await addDoc(moviesCol, newMovie);

    this.props.history.push('/movies');
    this.readMovies();
  }

  removeMovie = async id => {
  const movieDoc = doc(moviesCol, id);

  await deleteDoc(moviesDoc);

  this.props.history.push('/movies');
  this.readMovies();
}

  updateMovie = async editedMovie => {
    const movieDoc = doc(moviesCol, editedMovie.id);

    await setDoc(movieDoc, editedMovie);

    this.props.history.push('/movie');
    this.readMovies();
}

  readMovies = async () => {
    const moviesSnapshot = await getDocs(moviesCol)

    const moviesData = [];
    moviesSnapshot.forEach(doc => {
      moviesData.push({
        id: doc.id,
        name: doc.data().name,
        poster: doc.data().poster,
        rating: doc.data().rating,
        year: doc.data().year,
    });
  });

    this.setState({
      movies: moviesData
  });
}

componentDidMount() {
  this.readMovies();
}

render() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLink exact to='/'>Movie Masters</NavLink>
        <nav>
          {/* Use this.state.user to conditionally render the menu */}
          <NavLink exact to='/puppies'>MOVIE LIST</NavLink>
          <NavLink exact to='/puppies/add'>ADD MOVIE</NavLink>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          {/* Create routes to the Login and Register components here */}
          {/* Create a /logout route that calls the logout method */}
          <Route exact path='/movies'>
            {/* Refactor using the Redirect component */}
            <MovieList movieList={this.state.movies} removeMovie={this.removeMovie} />
          </Route>
          <Route exact path='/movies/add'>
            {/* Refactor using the Redirect component */}
            <CreateMovie createMovie={this.createMovie} />
          </Route>
          <Route path='/movies/edit' render={({ location }) =>
            // Refactor by pushing users to the /login route
            <EditMovie updateMovie={this.updateMovie} location={location} />
          } />
          <Route path='/movies/details' render={({ location }) =>
            // Refactor by pushing users to the /login route
            <MovieCard removeMovie={this.removeMovie} location={location} />
          } />
          <Route path='*'>
            <div className='panel panel-default homepage'>404</div>
          </Route>
        </Switch>
      </main>
    </div>
  );
}
}
