import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/Header.css";
import banImg from "../img/IMG_0414.JPG";
import usflag from "../img/usflag.png";
import czflag from "../img/czflag.png";

const Header = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const isEng = !currentPath.includes("/cz");
  const isCz = currentPath.includes("/cz");
  const czToEng = () => {
    if (currentPath.includes("/cz")) {
      const newPath = currentPath.replace("/cz", "");
      navigate(newPath);
    }
  };

  const engToCz = () => {
    if (!currentPath.includes("/cz")) {
      const newPath = "/cz" + currentPath;
      navigate(newPath);
    }
  };

  return (
    <header className="header">
      <div className="img-wrap-banner">
        <img className="ban-img" src={banImg} alt="banner logo"></img>
      </div>
      <h1>RegoDog</h1>
      <div className="navbar">
        <Link to="/">News</Link>
        <Link to="/about">About</Link>
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
      <div className="flags">
        <button onClick={czToEng} className="lang-button" disabled={isEng}>
          <img alt="United States" className="img-flag" src={usflag} />
        </button>
        <button onClick={engToCz} className="lang-button" disabled={isCz}>
          <img alt="Czech" className="img-flag" src={czflag} />
        </button>
      </div>
    </header>
  );
};

export default Header;
