import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "../../Components/rating/Rating";
import { specialOffers } from "../../data/special-offers";
import ProductDescription from "./ProductDescription";
import "./special-offer-page.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/apiCalls/cartApiCall";

const SpecialOfferPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const product = specialOffers.find((p) => p.id === +id);
  const [imageIndex, setImageIndex] = useState(0);
  const [qty, setQty] = useState(1);

  const calcDiscount = product.price - (product.discount * product.price) / 100;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Add To Cart
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: qty,
        price: product?.price,
        title: product?.title,
        image: product?.images[0],
      })
    );
  };

  return (
    <>
      <div className="special-offer-page">
        <div className="special-offer-page-img-wrapper">
          <img
            src={product.images[imageIndex]}
            alt=""
            className="special-offer-page-img"
          />
          <div className="special-offer-page-select-img">
            {product.images.map((source, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={source}
                alt="product img"
                className="select-img"
              />
            ))}
          </div>
        </div>
        <div className="special-offer-page-info">
          <h3 className="special-offer-page-title">{product.title}</h3>
          <Rating reviews={product.reviews} rating={product.rating} />
          <div className="special-offer-page-price">
            <b className="special-offer-price-item">{product.price}</b>
            <b className="special-offer-final-price-item">{calcDiscount}</b>
          </div>
          <div className="special-offer-page-add-to-cart">
            <div>الكمية</div>
            <input
              value={qty}
              onChange={({ target }) => setQty(target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button className="add-to-cart-btn" onClick={addToCartHandler}>
              اضافة الي سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </>
  );
};

export default SpecialOfferPage;
