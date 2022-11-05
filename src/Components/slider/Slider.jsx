import React, { useState } from "react";
import Rating from "../rating/Rating";
import "./slider.css";
import { Link } from "react-router-dom";

const Slider = ({ data }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  //   Handel Click
  const handelClick = (dir) => {
    if (dir === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="slider-container">
      <button
        disabled={slideIndex === -data.length + 1}
        onClick={() => handelClick("left")}
        className="bi bi-chevron-left arrow-left"
      ></button>
      <div
        style={{ transform: `translate(${slideIndex * -281}px)` }}
        className="slider-wrapper"
      >
        {data.map((item) => (
          <Link to={`/products/${item.id}`} className="slide" key={item.id}>
            <img src={item.image} alt={item.title} className="slide-img" />
            <h3 className="slide-title">{item.title}</h3>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="slide-price">${item.price}</div>
          </Link>
        ))}
      </div>
      <button
        disabled={slideIndex === 0}
        onClick={() => handelClick("right")}
        className="bi bi-chevron-right arrow-right"
      ></button>
    </div>
  );
};

export default Slider;
