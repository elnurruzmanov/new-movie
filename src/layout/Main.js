import React, { Component } from "react";
import Movie from "../components/Movie";
import SearchBar from "../components/SearchBar";

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=c814a9d1&s=Indian")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies=(movie)=>{
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=c814a9d1&s=${movie}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  render() {
    return (
      <div className="container">
        <SearchBar searchMovies={this.searchMovies} />
        <Movie movies={this.state.movies} />
      </div>
    );
  }
}

export default Main;
