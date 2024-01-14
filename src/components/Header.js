import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";
import banImg from "../img/IMG_0414.JPG";

const Header = () => {
  return (
    <header className="header">
      <img className="ban-img" src={banImg} alt="banner logo"></img>
      <div></div>
      <h1>RegoDog</h1>
      <div className="navbar">
        <Link to="/">About</Link>
        <div className="dropdown">
          <Link to="/shop" className="dropbtn">
            Shop
          </Link>
          <div className="dropdown-content">
            <div className="list-wrap">
              <Link to="shop/textile">Textile</Link>
            </div>
            <div className="list-wrap">
              <Link to="shop/food">Food</Link>
            </div>
          </div>
        </div>
        <Link to="/cart">Cart</Link>
      </div>
    </header>
  );
};

export default Header;
