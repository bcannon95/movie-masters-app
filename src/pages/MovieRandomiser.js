import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
class MovieRandomiser extends React.Component {
  state = {
    movie: null,
  }

  displayRandomMovie = () => {
    const movieList = this.props.movieList;
    let randomPos = this.getRandomInt(0, movieList.length-1);
    console.log(randomPos)
    this.setState({
      movie: movieList[randomPos]
    })
  }

  getRandomInt = (min, max) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
 }

   render() {
     return  (
       <div class="wrap">
          <div class="search">
            <body>
              <span><a href="#" onClick={this.displayRandomMovie}></a></span>
            </body>
            {this.state.movie?
               <MovieCard movie={this.state.movie}/>
            : null}
          </div>
       </div>
     );
   }
 }

 export default MovieRandomiser;

//   render() {
//     return  (
//       <div class="wrap">
//          <div class="search">
//             <button type="button" class="searchButton" onClick={this.displayRandomMovie}>
//               <i class="fa fa-search"></i>
//            </button>
//            {this.state.movie?
//               <MovieCard movie={this.state.movie}/>
//            : null}
//          </div>
//       </div>
//     );
//   }
// }
//
// export default MovieRandomiser;
