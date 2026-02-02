import "./ProductCard.css";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="description">{description}</p>
      <p className="price">${price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
