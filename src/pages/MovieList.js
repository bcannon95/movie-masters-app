import React from 'react';
import MovieCard from '../components/MovieCard';

export default function MovieList(props) {
    return (
        <>
            <div className='d-flex flex-wrap'>
                {props.movieList.map(movie =>
                    <MovieCard
                        key={movie.id}
                        movie={movie}
                        removeMovie={props.removeMovie}
                    />
                )}
            </div>
        </>
    )
}
