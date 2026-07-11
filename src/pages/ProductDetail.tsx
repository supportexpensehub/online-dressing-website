import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Heart, Star, Truck } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = MOCK_PRODUCTS.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');

  if (!product) {
    return <div className="container" style={{padding: '4rem', textAlign: 'center'}}><h2>Product Not Found</h2></div>;
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size first.');
      return;
    }
    addToCart(product, selectedSize, 1);
    navigate('/cart');
  };

  return (
    <div className="pdp-page container">
      <div className="breadcrumb">
        <span>Home</span> / <span>Clothing</span> / <span>{product.category}</span> / <span className="current">{product.brand}</span>
      </div>

      <div className="pdp-layout">
        {/* Left: Image Gallery */}
        <div className="pdp-gallery">
          <div className="main-image">
            <img src={product.imageUrl} alt={product.name} />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="pdp-info">
          <h1 className="pdp-brand">{product.brand}</h1>
          <h2 className="pdp-title">{product.name}</h2>
          
          <div className="pdp-rating-box">
            <span className="rating">{product.rating} <Star size={14} fill="currentColor" /></span>
            <span className="reviews">{product.reviews} Ratings</span>
          </div>
          
          <div className="pdp-price-box">
            <span className="price">₹{product.price}</span>
            {product.originalPrice && <span className="original-price">MRP ₹{product.originalPrice}</span>}
            {product.discount && <span className="discount">({product.discount}% OFF)</span>}
            <div className="taxes-note">inclusive of all taxes</div>
          </div>

          <div className="pdp-sizes">
            <div className="size-header">
              <h3>SELECT SIZE</h3>
              <span className="size-guide">SIZE CHART</span>
            </div>
            <div className="size-buttons">
              {product.sizes.map((size) => (
                <button 
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="pdp-actions">
            <button className="btn-add-cart" onClick={handleAddToCart}>
              <ShoppingBag size={20} /> ADD TO BAG
            </button>
            <button className="btn-wishlist">
              <Heart size={20} /> WISHLIST
            </button>
          </div>

          <div className="pdp-delivery">
            <h3>DELIVERY OPTIONS <Truck size={20} /></h3>
            <div className="pincode-check">
              <input type="text" placeholder="Enter pincode" />
              <button>Check</button>
            </div>
            <p className="delivery-note">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
            <ul className="delivery-features">
              <li>100% Original Products</li>
              <li>Pay on delivery might be available</li>
              <li>Easy 14 days returns and exchanges</li>
              <li>Try & Buy might be available</li>
            </ul>
          </div>
          
          <div className="pdp-details">
            <h3>PRODUCT DETAILS</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
