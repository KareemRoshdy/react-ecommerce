import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home/Home";
import Cart from "./Page/Cart/Cart";
import Products from "./Page/products/Products";
import SingleProduct from "./Page/single-product/SingleProduct";
import SpecialOfferPage from "./Page/special-offer-page/SpecialOfferPage";
import Login from "./Page/login/Login";
import SignUp from "./Page/login/SignUp";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<SingleProduct />} />
        <Route path="/special-offer/:id" element={<SpecialOfferPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
//
