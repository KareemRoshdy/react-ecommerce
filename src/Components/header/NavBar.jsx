import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggle, setToggle }) => {
  return (
    <nav style={{ right: toggle && "0" }} className="navBar">
      <div className="navBar-close-icon" onClick={() => setToggle(false)}>
        <i className="bi bi-x-lg"></i>
      </div>
      <ul className="navBar-links">
        <Link to="/" className="navBar-link" onClick={() => setToggle(false)}>
          الصفحة الرئيسية
        </Link>
        <Link
          to="/products"
          className="navBar-link"
          onClick={() => setToggle(false)}
        >
          الإلكترونيات و الموبايلات
        </Link>
        <li className="navBar-link" onClick={() => setToggle(false)}>
          المنزل و المطبخ
        </li>
        <li className="navBar-link" onClick={() => setToggle(false)}>
          رجالية
        </li>
        <li className="navBar-link" onClick={() => setToggle(false)}>
          نسائية
        </li>
        <Link to="/login">
          <li className="navBar-link" onClick={() => setToggle(false)}>
            تسجيل الدخول
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
