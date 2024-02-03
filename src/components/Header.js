import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../css/Header.css";
import banImg from "../img/IMG_0414.JPG";
import usflag from "../img/usflag.png";
import czflag from "../img/czflag.png";
import deflag from "../img/deflag.png";

const Header = () => {
  const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const isEng = !(currentPath.includes("/cz") || currentPath.includes("/de"));
  const isCz = currentPath.includes("/cz");
  const isDe = currentPath.includes("/de");
  const toEng = () => {
    if (!isEng) {
      var newPath = currentPath.replace("/cz", "");
      newPath = newPath.replace("/de", "");
      navigate(newPath);
    }
  };
  const toCz = () => {
    if (!isCz) {
      var newPath = currentPath.replace("/cz", "");
      newPath = newPath.replace("/de", "");
      newPath = "/cz" + newPath;
      navigate(newPath);
    }
  };
  const toDe = () => {
    if (!isDe) {
      var newPath = currentPath.replace("/cz", "");
      newPath = newPath.replace("/de", "");
      newPath = "/de" + newPath;
      navigate(newPath);
    }
  };

  var newsLink = "/";
  var newsHeader = "News";
  var aboutLink = "/about";
  var aboutHeader = "About";
  var shopLink = "/shop";
  var shopHeader = "Shop";
  var cartLink = "/cart";
  var cartHeader = "Cart";
  var contactLink = "/contact";
  var contactHeader = "Contact";
  var textileLink = "/shop/textile";
  var textileHeader = "Textile";
  var foodLink = "/shop/food";
  var foodHeader = "Food";

  if (isCz) {
    newsLink = "/cz";
    newsHeader = "Novinky";
    aboutLink = "/cz/about";
    aboutHeader = "O nás";
    shopLink = "/cz/shop";
    shopHeader = "Obchod";
    cartLink = "/cz/cart";
    cartHeader = "Košík";
    contactLink = "/cz/contact";
    contactHeader = "Kontakt";
    textileLink = "/cz/shop/textile";
    textileHeader = "Látky";
    foodLink = "/cz/shop/food";
    foodHeader = "Pamlsky";
  } else if (isDe) {
    newsLink = "/de";
    newsHeader = "Nachricht";
    aboutLink = "/de/about";
    aboutHeader = "Über uns";
    shopLink = "/de/shop";
    shopHeader = "Geschäft";
    cartLink = "/de/cart";
    cartHeader = "Wagen";
    contactLink = "/de/contact";
    contactHeader = "Kontakt";
    textileLink = "/de/shop/textile";
    textileHeader = "Textil";
    foodLink = "/de/shop/food";
    foodHeader = "Leckereien";
  }

  return (
    <header className="header">
      <div className="img-wrap-banner">
        <img className="ban-img" src={banImg} alt="banner logo"></img>
      </div>
      <h1>RegoDog</h1>
      <div className="navbar">
        <Link to={newsLink}>{newsHeader}</Link>
        <Link to={aboutLink}>{aboutHeader}</Link>
        <div className="dropdown">
          <Link to={shopLink} className="dropbtn">
            {shopHeader}
          </Link>
          <div className="dropdown-content">
            <div className="list-wrap">
              <Link to={textileLink}>{textileHeader}</Link>
            </div>
            <div className="list-wrap">
              <Link to={foodLink}>{foodHeader}</Link>
            </div>
          </div>
        </div>
        <Link to={cartLink}>{cartHeader}</Link>
        <Link to={contactLink}>{contactHeader}</Link>
      </div>
      <div className="flags">
        <button onClick={toEng} className="lang-button" disabled={isEng}>
          <img alt="United States" className="img-flag" src={usflag} />
        </button>
        <button onClick={toDe} className="lang-button" disabled={isDe}>
          <img alt="German" className="img-flag" src={deflag} />
        </button>
        <button onClick={toCz} className="lang-button" disabled={isCz}>
          <img alt="Czech" className="img-flag" src={czflag} />
        </button>
      </div>
    </header>
  );
};

export default Header;
