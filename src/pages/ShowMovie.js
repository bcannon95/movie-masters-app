import React from 'react';
import { Link } from 'react-router-dom';

export default function ShowMovie(props) {
    const { selectedMovie } = props.location.state;
    return (
        <div className="p-2">
            <div className="card" style={{'width': '38rem'}}>
                <div className="card-body">
                    <h2 className="card-title text-center mb-3">{selectedMovie.name.toUpperCase()}</h2>
                    <div className="d-flex justify-content-around">
                        <div className="card-text"><strong>Rating: </strong>{selectedMovie.rating}</div>
                        <div className="card-text"><strong>Year: </strong>{selectedMovie.year}</div>
                    </div>
                </div>
                <img className="card-img-top border-top border-bottom" src={selectedMovie.poster} alt={selectedMovie.name} />
                <div className="card-body">
                    <div className='d-flex justify-content-center'>
                        <Link className='btn btn-xs btn-warning' to={{ pathname: `/movies/edit/${selectedMovie.id}`, state: {selectedMovie: selectedMovie}  }}>EDIT</Link>
                        <button
                            className='btn btn-xs btn-danger margin-left-10'
                            onClick={() => props.remove(selectedMovie.id)}
                        >
                            DELETE
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
