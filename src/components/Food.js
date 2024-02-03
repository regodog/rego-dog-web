import "../css/Food.css";
import ProductDisplay from "../utils/ProductDisplay";
import products from "../products.json";
import { Link, useLocation } from "react-router-dom";

const Food = () => {
  const currentPath = useLocation().pathname;
  const isEng = !(currentPath.includes("/cz") || currentPath.includes("/de"));
  const isCz = currentPath.includes("/cz");
  const isDe = currentPath.includes("/de");
  var foodHeader = "Food";
  if (isCz) {
    foodHeader = "Pamlsky";
  } else if (isDe) {
    foodHeader = "Leckereien";
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
                key={product.link + "-food-div-cz"}
                name={product.name_cz}
                price={product.price_cz}
                img={product.img}
              ></ProductDisplay>
            </Link>
          ))}
        {isDe &&
          products.food.map((product) => (
            <Link to={`/de/shop/food/${product.link}`} className="link">
              <ProductDisplay
                key={product.link + "-food-div-de"}
                name={product.name_de}
                price={product.price_de}
                img={product.img}
              ></ProductDisplay>
            </Link>
          ))}
      </div>
    </section>
  );
};
export default Food;
