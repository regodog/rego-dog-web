import "../css/Product.css";

const Product = ({ name, price, img, description }) => {
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
      <button>Add to Cart</button>
    </section>
  );
};
export default Product;
