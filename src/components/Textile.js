import "../css/Textile.css";
import ProductDisplay from "../utils/ProductDisplay";
import products from "../products.json";
import { Link, useLocation } from "react-router-dom";

const Textile = () => {
  const currentPath = useLocation().pathname;
  const isCz = currentPath.includes("/cz");
  const isEng = !currentPath.includes("/cz");

  var textileHeader = "Textile";
  if (isCz) {
    textileHeader = "Látky";
  }
  return (
    <section>
      <h2>{textileHeader}</h2>
      <div className="product-grid">
        {isEng &&
          products.textile.map((product) => (
            <Link to={`/shop/textile/${product.link}`} className="link">
              <ProductDisplay
                key={product.link + "-textile-div"}
                name={product.name}
                price={product.price}
                img={product.img}
              ></ProductDisplay>
            </Link>
          ))}
        {isCz &&
          products.textile.map((product) => (
            <Link to={`/cz/shop/textile/${product.link}`} className="link">
              <ProductDisplay
                key={product.link + "-textile-div"}
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
export default Textile;
