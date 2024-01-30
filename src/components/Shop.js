import "../css/Shop.css";
import textile from "../img/20211031_133303.jpg";
import food from "../img/20180325_163727.jpg";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
  const currentPath = useLocation().pathname;
  const isCz = currentPath.includes("/cz");

  var shopHeader = "Shop";
  var textileLink = "/shop/textile";
  var foodLink = "/shop/food";
  var textileHeader = "Textile";
  var foodHeader = "Food";
  if (isCz) {
    shopHeader = "Obchod";
    textileLink = "/cz/shop/textile";
    foodLink = "/cz/shop/food";
    textileHeader = "Látky";
    foodHeader = "Pamlsky";
  }
  return (
    <section>
      <h2>{shopHeader}</h2>
      <div className="product-grid">
        <Link className="link" to={textileLink}>
          <div className="product">
            <img src={textile} alt="textile"></img>
            <p>{textileHeader}</p>
          </div>
        </Link>
        <Link className="link" to={foodLink}>
          <div className="product">
            <img src={food} alt="food"></img>
            <p>{foodHeader}</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Shop;
