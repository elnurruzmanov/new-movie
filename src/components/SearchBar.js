import React, { Component } from "react";

class SearchBar extends Component {
  state = {
    search: "",
    type:"all"
  };

  handleText = (e) => {
    if (e.key === "Enter") this.props.searchMovies(this.state.search);
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <div className="search-bar">
          <input
            type="search"
            name="search"
            required
            value={search}
            onChange={(e) => this.setState({ search: e.target.value })}
            autoComplete="off"
            onKeyUp={this.handleText}
          />
          <button className="search-btn" type="submit">
            <span>Search</span>
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBar;

// {/* <div className="radio-toggle">
//   <input type="radio" id="option-1" name="radio-options" data-type="movie" />
//   <label for="option-1">Movie</label>
//   <input type="radio" id="option-2" name="radio-options" data-type="all" />
//   <label for="option-2">All</label>
//   <input type="radio" id="option-3" name="radio-options" data-type="series" />
//   <label for="option-3">Series</label>
//   <div className="slide-item"></div>
// </div>; */}
