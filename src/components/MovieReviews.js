// Code MovieReviews Here
import React from "react";

const MovieReviews = (props) => {
  let list = props.reviews.map((review) => {
    return (
      <li className="review">
        <h2>{review.display_title}</h2>
        <p>{review.summary_short}</p>
      </li>
    );
  });

  return <ul className="review-list">{list}</ul>;
};

export default MovieReviews;
