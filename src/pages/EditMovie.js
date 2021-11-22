import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditMoviePage extends Component {
    state = {
        formData: this.props.location.state.selectedMovie
    }

    handleChange = e => {
        this.setState({
            formData: {
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.updateMovie(this.state.formData);
    };

    render() {
        return (
            <>
                <h1>Edit Movie</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            name="name"
                            value={this.state.formData.name}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Poster URL</label>
                        <input
                            className="form-control"
                            name="poster"
                            value={this.state.formData.poster}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Rating</label>
                        <input
                            className="form-control"
                            name="rating"
                            value={this.state.formData.rating}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Year</label>
                        <input
                            className="form-control"
                            name="year"
                            value={this.state.formData.year}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="btn btn-info mr-2"
                        >
                            UPDATE MOVIE
                        </button>
                        <Link className="btn btn-dark" to='/'>CANCEL</Link>
                    </div>
                </form>
            </>
        );
    }
}
