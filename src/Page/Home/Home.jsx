import React, { useEffect } from "react";
import Banner from "../../Components/banner/Banner";
import Brands from "../../Components/brands/Brands";
import Category from "../../Components/category/Category";
import HeadingTitle from "../../Components/heading-title/HeadingTitle";
import Slider from "../../Components/slider/Slider";
import SpecialOffers from "../../Components/special-offers/SpecialOffers";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const laptops = products.filter((p) => p.isLaptop === true);
  const mobiles = products.filter((p) => p.isLaptop === false);
  return (
    <>
      <Banner />
      <Category />
      <SpecialOffers />
      <HeadingTitle title="الجديد من الاب توبات" />
      <Slider data={laptops} />
      <HeadingTitle title="الجديد من الهواتف" />
      <Slider data={mobiles} />
      <HeadingTitle title="تسوق حسب المارك" />
      <Brands />
    </>
  );
};

export default Home;
