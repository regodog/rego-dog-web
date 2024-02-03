import "../css/Product.css";
import { useLocation } from "react-router-dom";

const Product = ({ name, price, img, description }) => {
  const currentPath = useLocation().pathname;
  const isEng = !(currentPath.includes("/cz") || currentPath.includes("/de"));
  const isCz = currentPath.includes("/cz");
  const isDe = currentPath.includes("/de");
  return (
    <section>
      <h2>{name}</h2>
      <img
        className="product-img"
        src={require(`../img/${img}`)}
        alt={name}
      ></img>
      <p>{description}</p>
      <p>{price}</p>
      {isEng && <button>Add to Cart</button>}
      {isCz && <button>Přidat do košíku</button>}
      {isDe && <button>In den Warenkorb legen</button>}
    </section>
  );
};
export default Product;
