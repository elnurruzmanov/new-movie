import React, { Component } from "react";
import Movies from "../components/Movies";

class Movie extends Component {
  state = {};
  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        {movies.map((movie) => (
          <Movies key={movie.imdbID} {...movie} />
        ))}
      </div>
    );
  }
}

export default Movie;
