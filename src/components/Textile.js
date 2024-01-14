import "../css/Textile.css";
import ProductDisplay from "../utils/ProductDisplay";
import products from "../products.json";
import { Link } from "react-router-dom";

const Textile = () => {
  return (
    <section>
      <h2>Textile</h2>
      <div className="product-grid">
        {products.textile.map((product) => (
          <Link to={`/shop/textile/${product.link}`}>
            <ProductDisplay
              key={product.link + "-textile-div"}
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
export default Textile;
