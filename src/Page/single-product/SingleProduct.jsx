import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Rating from "../../Components/rating/Rating";
import Spinner from "../../Components/spinner/Spinner";
import { addToCart } from "../../redux/apiCalls/cartApiCall";
import { getProductById } from "../../redux/apiCalls/productApiCall";
import ProductDescription from "../special-offer-page/ProductDescription";
import "./single-product.css";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const { id } = useParams();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  // Add To Cart
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: qty,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
  };

  if (loading) return <Spinner />;

  return (
    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-img-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">{product?.price}</div>
          <div className="product-add-t-cart">
            <div>الكمية</div>
            <input
              onChange={({ target }) => setQty(target.value)}
              value={qty}
              type="number"
              min="1"
              max="10"
            />
            <button onClick={addToCartHandler} className="add-to-cart-btn">
              إضافة الي سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>
  );
};

export default SingleProduct;
