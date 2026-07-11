
import { MOCK_PRODUCTS } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h2>Festive Collection 2026</h2>
          <h1>Unveiling the True Aura</h1>
          <p>Discover the latest ethnic and western wear styles.</p>
          <button className="btn-primary-large">Shop Now</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="category-section container">
        <h2 className="section-title">Shop By Category</h2>
        <div className="category-grid">
          <div className="category-card" style={{ backgroundImage: "url('./images/saree.png')" }}>
            <div className="category-card-content">
              <h3>Sarees</h3>
            </div>
          </div>
          <div className="category-card" style={{ backgroundImage: "url('./images/dress.png')" }}>
            <div className="category-card-content">
              <h3>Dresses</h3>
            </div>
          </div>
          <div className="category-card" style={{ backgroundImage: "url('./images/kurta.png')" }}>
            <div className="category-card-content">
              <h3>Kurtas</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="trending-section container">
        <h2 className="section-title">Trending Now</h2>
        <div className="products-grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
