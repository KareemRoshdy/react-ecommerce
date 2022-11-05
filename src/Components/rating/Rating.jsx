import React from "react";
import "./rating.css";

const Rating = ({ rating, reviews }) => {
  return (
    <div className="rating-wrapper">
      <strong className="rating">
        {rating} <i className="bi bi-star-fill"></i>
      </strong>
      <span>{reviews} تقييمات</span>
    </div>
  );
};

export default Rating;
