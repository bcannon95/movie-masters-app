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
import SearchForm from './pages/SearchForm'
import AboutUs from './pages/AboutUs'
import brockbuster from './components/BrockBuster2.png'
import './App.css';

const moviesCol = collection(db, 'movies')

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

  await deleteDoc(movieDoc);

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
        <NavLink exact to='/'>BROCKBUSTER</NavLink>
        <nav>
          <NavLink exact to='/movies'>MOVIE LIST</NavLink>
          <NavLink exact to='/movies/search'>SEARCH</NavLink>
          <NavLink exact to='/movies/add'>ADD MOVIE</NavLink>
          <NavLink exact to='/movies/randomiser'>RANDOMISER</NavLink>
          <NavLink exact to='/movies/about-us'>ABOUT US</NavLink>
        </nav>
        </header>
      <main>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/movies'>
            <MovieList movieList={this.state.movies} removeMovie={this.removeMovie} />
          </Route>
          <Route exact path='/movies/search'>
            <SearchForm  movieList={this.state.movies} getMovieData={this.getMovieData} />
          </Route>
          <Route exact path='/movies/add'>
            <CreateMovie createMovie={this.createMovie} />
          </Route>
          <Route exact path='/movies/randomiser'>
            <MovieRandomiser movieList={this.state.movies}/>
          </Route>
          <Route exact path='/movies/about-us'>
            <AboutUs movieList={this.state.movies}/>
          </Route>
          <Route path='/movies/edit' render={({ location }) =>
            <EditMovie updateMovie={this.updateMovie} location={location} />
          } />
          <Route path='/movies/details' render={({ location }) =>
            <ShowMovie removeMovie={this.removeMovie} location={location} />
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
