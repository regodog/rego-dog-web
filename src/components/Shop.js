import "../css/Shop.css";
import textile from "../img/20211031_133303.jpg";
import food from "../img/20180325_163727.jpg";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <section>
      <h2>Shop</h2>
      <div className="product-grid">
        <Link className="link" to="/shop/textile">
          <div className="product">
            <img src={textile} alt="textile"></img>
            <p>Textile</p>
          </div>
        </Link>
        <Link className="link" to="/shop/food">
          <div className="product">
            <img src={food} alt="food"></img>
            <p>Food</p>
          </div>
        </Link>
      </div>
    </section>
  );
};
export default Shop;
