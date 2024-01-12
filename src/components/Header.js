import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>RegoDog</h1>
      <div className="navbar">
        <Link to="/">About</Link>
        <div className="dropdown">
          <Link to="/shopk" className="dropbtn">
            Shop
          </Link>
          <div className="dropdown-content">
            <div className="list-wrap">
              <Link to="shop/men">Men</Link>
            </div>
            <div className="list-wrap">
              <Link to="shop/women">Women</Link>
            </div>
          </div>
        </div>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
