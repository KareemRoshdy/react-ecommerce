import "./products.css";
import React, { useEffect, useState } from "react";
import ProductSidebar from "./ProductSidebar";
import ProductList from "./ProductList";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import Pagination from "./Pagination";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("select");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Filter Product
  const filterProduct = products.filter((product) =>
    filterItem === "laptop"
      ? product.isLaptop === true
      : filterItem === "mobile"
      ? product.isLaptop === false
      : product
  );

  // Sort Product
  const sortedProductList =
    sortItem === "low"
      ? filterProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
      ? filterProduct.sort((a, b) => b.price - a.price)
      : filterProduct.sort((a, b) => (a.title > b.title ? 1 : -1));

  // Pagination
  const PRODUCT_PER_PAGE = 6;
  const pages = Math.ceil(sortedProductList.length / PRODUCT_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCT_PER_PAGE;
  const finishIndex = currentPage * PRODUCT_PER_PAGE;
  const orderProducts = sortedProductList.slice(startIndex, finishIndex);

  return (
    <>
      <div className="products">
        <ProductSidebar
          sortItem={sortItem}
          setSortItem={setSortItem}
          filterItem={filterItem}
          setFilterItem={setFilterItem}
        />
        <ProductList products={orderProducts} />
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default Products;
