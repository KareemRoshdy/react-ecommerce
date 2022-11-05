import React, { useState } from "react";
import "./Header.css";
import MiddleHeader from "./MiddleHeader";
import NavBar from "./NavBar";
import TopHeader from "./TopHeader";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <TopHeader setToggle={setToggle} />
      <MiddleHeader />
      <NavBar toggle={toggle} setToggle={setToggle} />
    </header>
  );
};

export default Header;
