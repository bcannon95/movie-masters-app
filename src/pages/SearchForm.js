import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
class SearchForm extends React.Component {
  state = {
    movie: '',
  }

  handleChange = e => {
    if(e.target.value !== ""){
      const movieList = this.props.movieList;
      let movie = movieList.find(m => m.name.toLowerCase().includes(e.target.value.toLowerCase()))
      this.setState({
        movie: movie
      })
    }
    else {
      this.setState({
        movie: null
      })
    }

  }

  handleSubmit = e => {
      e.preventDefault();
      this.props.getMovieData(this.state.searchTerm);
  }

  render() {
    return  (
      <div class="wrap">
         <div class="search">
            <input type="text" class="searchTerm" placeholder="What are you looking for?" onChange={this.handleChange}></input>
            <button type="submit" class="searchButton">
              <i class="fa fa-search"></i>
           </button>
         </div>
         {this.state.movie?
            <MovieCard movie={this.state.movie}/>
         : null}
      </div>
    );
  }
}

export default SearchForm;


// import React, { useState, useEffect } from 'react';
//
// class SearchForm extends React.Component {
//   state = {
//     searchTerm: '',
//   }
//
//   handleChange = e => {
//     this.setState({
//       searchTerm: e.target.value
//     });
//   }
//
//   handleSubmit = e => {
//       e.preventDefault();
//       this.props.getMovieData(this.state.searchTerm);
//   }
//
//   render() {
//     return  (
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.handleChange} value={this.state.searchTerm}/>
//             <button>Search</button>
//         </form>
//     );
//   }
// }
//
// export default SearchForm;
