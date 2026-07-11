import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckCircle } from 'lucide-react';

const Checkout = () => {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState<'address' | 'payment' | 'success'>('address');

  if (step === 'success') {
    return (
      <div className="checkout-success container">
        <CheckCircle size={80} color="#10b981" />
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for shopping with AuraFit. Your order will be delivered soon.</p>
        <button className="btn-primary-large" onClick={() => navigate('/')}>CONTINUE SHOPPING</button>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    clearCart();
  };

  return (
    <div className="checkout-page container">
      <div className="checkout-layout">
        
        {/* Left: Forms */}
        <div className="checkout-forms">
          {step === 'address' && (
            <div className="form-section">
              <h3>Delivery Address</h3>
              <form onSubmit={(e) => { e.preventDefault(); setStep('payment'); }} className="address-form">
                <div className="form-row">
                  <input type="text" placeholder="First Name *" required />
                  <input type="text" placeholder="Last Name *" required />
                </div>
                <input type="text" placeholder="Address (House No, Building, Street, Area) *" required />
                <input type="text" placeholder="Locality / Town *" required />
                <div className="form-row">
                  <input type="text" placeholder="City / District *" required />
                  <input type="text" placeholder="State *" required />
                </div>
                <div className="form-row">
                  <input type="text" placeholder="PIN Code *" required />
                  <input type="tel" placeholder="Mobile Number *" required />
                </div>
                <button type="submit" className="btn-primary-large" style={{ marginTop: '1rem' }}>
                  SAVE AND CONTINUE
                </button>
              </form>
            </div>
          )}

          {step === 'payment' && (
            <div className="form-section">
              <h3>Choose Payment Mode</h3>
              <div className="payment-options">
                <label className="payment-option">
                  <input type="radio" name="payment" defaultChecked />
                  <div className="option-content">
                    <h4>Cash On Delivery (Cash/UPI)</h4>
                    <p>Pay digitally with SMS link or Cash</p>
                  </div>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <div className="option-content">
                    <h4>Credit / Debit Card</h4>
                    <p>Visa, MasterCard, Amex, RuPay</p>
                  </div>
                </label>
                <label className="payment-option">
                  <input type="radio" name="payment" />
                  <div className="option-content">
                    <h4>UPI (Google Pay, PhonePe, Paytm)</h4>
                    <p>Pay instantly via your UPI App</p>
                  </div>
                </label>
              </div>
              <button className="btn-primary-large" onClick={handlePlaceOrder} style={{ marginTop: '2rem' }}>
                PAY ₹{cartTotal + 20}
              </button>
            </div>
          )}
        </div>

        {/* Right: Summary */}
        <div className="checkout-summary">
          <h3>ORDER SUMMARY</h3>
          <div className="summary-total">
            <span>Total Payable</span>
            <span>₹{cartTotal + 20}</span>
          </div>
          <p className="secure-badge">🔒 Safe and Secure Payments</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
