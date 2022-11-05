import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <img
        className="banner-img"
        src="./images/banners/shoes.png"
        alt="banner-img"
      />
      <img
        className="banner-img"
        src="./images/banners/house.png"
        alt="banner-img"
      />
    </div>
  );
};

export default Banner;
