import React from 'react';
import { Link } from 'react-router-dom';

export default function MovieCard(props) {
    return (
        <div className="p-2">
            <div className="card" style={{'width': '18rem'}}>
                <img className="card-img-top" src={props.movie.poster} alt={props.movie.name} />
                <div className="card-body">
                    <h5 className="card-title">{props.movie.name}</h5>
                    <p className="card-text"><strong>Rating: </strong>{props.movie.rating}</p>
                    <p className="card-text"><strong>Year: </strong>{props.movie.year}</p>
                    <div>
                        <div>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <Link className='btn btn-xs btn-primary' to={{ pathname: `/movies/details/${props.movie.id}`, state: {selectedMovie: props.movie} }}>DETAILS</Link>
                            <Link className='btn btn-xs btn-warning' to={{ pathname: `/movies/edit/${props.movie.id}`, state: {selectedMovie: props.movie} }}>EDIT</Link>
                            <button
                                className='btn btn-xs btn-danger'
                                onClick={() => props.removeMovie(props.movie.id)}
                            >
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
