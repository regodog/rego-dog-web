import "../css/Food.css";
import ProductDisplay from "../utils/ProductDisplay";
import products from "../products.json";
import { Link, useLocation } from "react-router-dom";

const Food = () => {
  const currentPath = useLocation().pathname;
  const isCz = currentPath.includes("/cz");
  const isEng = !currentPath.includes("/cz");
  var foodHeader = "Food";
  if (isCz) {
    foodHeader = "Pamlsky";
  }
  return (
    <section>
      <h2>{foodHeader}</h2>
      <div className="product-grid">
        {isEng &&
          products.food.map((product) => (
            <Link to={`/shop/food/${product.link}`} className="link">
              <ProductDisplay
                key={product.link + "-food-div"}
                name={product.name}
                price={product.price}
                img={product.img}
              ></ProductDisplay>
            </Link>
          ))}
        {isCz &&
          products.food.map((product) => (
            <Link to={`/cz/shop/food/${product.link}`} className="link">
              <ProductDisplay
                key={product.link + "-food-div"}
                name={product.name_cz}
                price={product.price_cz}
                img={product.img}
              ></ProductDisplay>
            </Link>
          ))}
      </div>
    </section>
  );
};
export default Food;
