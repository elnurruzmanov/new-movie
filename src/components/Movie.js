import React, { Component } from "react";
import Movies from "../components/Movies";

class Movie extends Component {
  state = {};
  render() {
    const { movies } = this.props;
    return (
      <div className="movies">
        {movies.length ? (
          movies.map((movie) => <Movies key={movie.imdbID} {...movie} />)
        ) : (
          <div className="the-width">
            <div className="">
              <div className="four04">
                <h1>404</h1>
                <div className="target-cont">
                  <div className="cover"></div>
                  <div className="marks"></div>
                </div>
              </div>
              <h2>The page you requested was not found.</h2>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Movie;
