
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Minus, Plus } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  if (cartCount === 0) {
    return (
      <div className="cart-empty container">
        <img src="https://constant.myntassets.com/checkout/assets/img/empty-bag.webp" alt="Empty Bag" className="empty-cart-img" />
        <h2>Hey, it feels so light!</h2>
        <p>There is nothing in your bag. Let's add some items.</p>
        <Link to="/" className="btn-primary-large" style={{ marginTop: '2rem' }}>ADD ITEMS FROM WISHLIST</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container">
      <div className="cart-layout">
        {/* Left: Cart Items */}
        <div className="cart-items-container">
          <div className="cart-header">
            <h3>My Bag <span>({cartCount} items)</span></h3>
          </div>
          
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.cartId} className="cart-item">
                <div className="cart-item-img">
                  <img src={item.imageUrl} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <h4>{item.brand}</h4>
                  <p className="item-name">{item.name}</p>
                  <p className="item-size">Size: <strong>{item.selectedSize}</strong></p>
                  
                  <div className="item-qty-row">
                    <span>Qty:</span>
                    <button onClick={() => updateQuantity(item.cartId, item.quantity - 1)}><Minus size={14}/></button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.cartId, item.quantity + 1)}><Plus size={14}/></button>
                  </div>
                  
                  <div className="item-price-row">
                    <span className="price">₹{item.price}</span>
                    {item.originalPrice && <span className="original-price">₹{item.originalPrice}</span>}
                    {item.discount && <span className="discount">{item.discount}% OFF</span>}
                  </div>
                </div>
                <button className="btn-remove" onClick={() => removeFromCart(item.cartId)}>
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Price Summary */}
        <div className="cart-summary">
          <h3>PRICE DETAILS ({cartCount} Items)</h3>
          
          <div className="summary-row">
            <span>Total MRP</span>
            <span>₹{cart.reduce((total, item) => total + ((item.originalPrice || item.price) * item.quantity), 0)}</span>
          </div>
          <div className="summary-row discount-row">
            <span>Discount on MRP</span>
            <span>- ₹{cart.reduce((total, item) => total + (((item.originalPrice || item.price) - item.price) * item.quantity), 0)}</span>
          </div>
          <div className="summary-row">
            <span>Platform Fee</span>
            <span>₹20</span>
          </div>
          <div className="summary-row">
            <span>Shipping Fee</span>
            <span className="free-shipping">FREE</span>
          </div>
          
          <div className="summary-total">
            <span>Total Amount</span>
            <span>₹{cartTotal + 20}</span>
          </div>
          
          <button className="btn-place-order" onClick={() => navigate('/checkout')}>
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
