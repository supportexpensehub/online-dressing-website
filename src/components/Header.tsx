import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cartCount } = useCart();

  return (
    <header className="site-header">
      <div className="header-top">
        <p>Free shipping on orders over ₹999 | Easy Returns</p>
      </div>
      <div className="header-main">
        <div className="header-logo">
          <Link to="/">
            <h1>AuraFit</h1>
          </Link>
        </div>

        <nav className="header-nav">
          <Link to="/category/Sarees" className="nav-link">Sarees</Link>
          <Link to="/category/Kurtas" className="nav-link">Ethnic Wear</Link>
          <Link to="/category/Dresses" className="nav-link">Western Wear</Link>
          <Link to="/category/Accessories" className="nav-link">Accessories</Link>
        </nav>

        <div className="header-search">
          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input type="text" placeholder="Search for products, brands and more" />
          </div>
        </div>

        <div className="header-actions">
          <button className="action-btn">
            <User size={22} />
            <span>Profile</span>
          </button>
          <button className="action-btn">
            <Heart size={22} />
            <span>Wishlist</span>
          </button>
          <Link to="/cart" className="action-btn cart-btn">
            <div className="cart-icon-wrapper">
              <ShoppingBag size={22} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </div>
            <span>Bag</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
