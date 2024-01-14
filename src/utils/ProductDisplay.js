import React from "react";
import "../css/ProductDisplay.css";

const ProductDisplay = ({ name, price, img }) => {
  const imageSrc = require(`../img/${img}`);

  return (
    <div className="product">
      <img src={imageSrc} alt={name}></img>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};
export default ProductDisplay;
