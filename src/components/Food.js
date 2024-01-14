import "../css/Food.css";
import ProductDisplay from "../utils/ProductDisplay";
import products from "../products.json";
import { Link } from "react-router-dom";

const Food = () => {
  return (
    <section>
      <h2>Food</h2>
      <div className="product-grid">
        {products.food.map((product) => (
          <Link to={`/shop/food/${product.link}`} className="link">
            <ProductDisplay
              key={product.link + "-food-div"}
              name={product.name}
              price={product.price}
              img={product.img}
            ></ProductDisplay>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default Food;
