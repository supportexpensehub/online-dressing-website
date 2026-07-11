import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';
import { ChevronDown } from 'lucide-react';

const ProductListing = () => {
  const { categoryId } = useParams();
  
  // Filter by category if categoryId exists
  const products = categoryId 
    ? MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === categoryId.toLowerCase())
    : MOCK_PRODUCTS;

  return (
    <div className="plp-page container">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <span>Home</span> / <span>Clothing</span> / <span className="current">{categoryId || 'All'}</span>
      </div>

      <div className="plp-header">
        <h1>{categoryId || 'All Products'} - <span>{products.length} items</span></h1>
        
        <div className="sort-by">
          <span>Sort by: <strong>Recommended</strong></span>
          <ChevronDown size={16} />
        </div>
      </div>

      <div className="plp-layout">
        {/* Sidebar Filters */}
        <aside className="plp-sidebar">
          <div className="filter-section">
            <h3>FILTERS</h3>
            
            <div className="filter-group">
              <h4>CATEGORIES</h4>
              <label><input type="checkbox" /> Sarees</label>
              <label><input type="checkbox" /> Kurtas</label>
              <label><input type="checkbox" /> Dresses</label>
            </div>

            <div className="filter-group">
              <h4>PRICE</h4>
              <label><input type="checkbox" /> Rs. 500 to Rs. 1000</label>
              <label><input type="checkbox" /> Rs. 1000 to Rs. 2000</label>
              <label><input type="checkbox" /> Rs. 2000 to Rs. 5000</label>
            </div>

            <div className="filter-group">
              <h4>COLOR</h4>
              <label><span className="color-swatch" style={{backgroundColor: '#e11d48'}}></span> Red</label>
              <label><span className="color-swatch" style={{backgroundColor: '#3b82f6'}}></span> Blue</label>
              <label><span className="color-swatch" style={{backgroundColor: '#10b981'}}></span> Green</label>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <main className="plp-main">
          {products.length > 0 ? (
            <div className="products-grid">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products">
              <h2>No products found for this category.</h2>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default ProductListing;
