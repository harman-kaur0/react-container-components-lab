import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
const api = `&api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: "",
  };

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  handleSubmit = (e, search) => {
    e.preventDefault();
    fetch(URL + search + api)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          reviews: data.results,
        });
      });
    e.target.reset();
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={(e) => this.handleSubmit(e, this.state.searchTerm)}>
          <label>Search movie reviews: </label>
          <input type="text" onChange={(e) => this.handleChange(e)} />
          <input type="submit" />
        </form>
        <div>
          {this.state.reviews === null ? (
            <h1>No results found</h1>
          ) : (
            <MovieReviews reviews={this.state.reviews} />
          )}
        </div>
      </div>
    );
  }
}
