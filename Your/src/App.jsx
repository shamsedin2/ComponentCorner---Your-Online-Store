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
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header storeName="ComponentCorner" />

      <Hero
        title="Welcome to ComponentCorner"
        subtitle="Your one-stop shop for electronics"
        cta="Shop Now"
      />

      <main className="products">
        <ProductCard
          name="Wireless Headphones"
          description="Noise-canceling wireless headphones"
          price="99.99"
          image="https://placehold.co/600x400"
        />
        <ProductCard
          name="Smart Watch"
          description="Track health and fitness"
          price="199.99"
          image="https://placehold.co/600x400"
        />
        <ProductCard
          name="Mechanical Keyboard"
          description="RGB keyboard for gamers"
          price="129.99"
          image="https://placehold.co/600x400"
        />
      </main>

      <Footer email="hello@componentcorner.com" phone="555-123-4567" />
    </>
  );
};

export default App;

