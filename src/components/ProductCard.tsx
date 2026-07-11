import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../data/mockProducts';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="product-card">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.name} className="product-image" />
        <div className="product-rating">
          <span>{product.rating}</span>
          <Star size={12} fill="currentColor" />
          <span className="rating-separator">|</span>
          <span>{product.reviews}</span>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-brand">{product.brand}</h3>
        <h4 className="product-name">{product.name}</h4>
        <div className="product-price-row">
          <span className="price">₹{product.price}</span>
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice}</span>
          )}
          {product.discount && (
            <span className="discount">({product.discount}% OFF)</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
