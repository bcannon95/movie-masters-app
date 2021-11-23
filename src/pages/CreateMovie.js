import React, { Component } from 'react';

export default class CreateMovie extends Component {
    state = {
        formData: {
            name: '',
            poster: '',
            rating: '',
            year: '',
        }
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
        this.props.createMovie(this.state.formData);
    }

    render() {
        return (
            <div>
                <h1>Add Movie</h1>
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
                            required
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
                    <button
                        type="submit"
                        className="btn btn-info"
                    >
                        ADD MOVIE
                    </button>
                </form>
            </div>
        );
    }
}
