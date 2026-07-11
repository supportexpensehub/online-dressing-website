

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-col">
          <h3>ONLINE SHOPPING</h3>
          <ul>
            <li><a href="#">Sarees</a></li>
            <li><a href="#">Kurtas & Suits</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Exclusive Offers</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>CUSTOMER POLICIES</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">T&C</a></li>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Track Orders</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">Cancellation</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>EXPERIENCE AURAFIT APP ON MOBILE</h3>
          <div className="app-links">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-badge" />
          </div>
          
          <div className="social-links">
            <h3>KEEP IN TOUCH</h3>
            <div className="social-icons">
              <div className="social-icon">FB</div>
              <div className="social-icon">TW</div>
              <div className="social-icon">YT</div>
              <div className="social-icon">IG</div>
            </div>
          </div>
        </div>
        
        <div className="footer-col">
          <div className="guarantee">
            <h3>100% ORIGINAL</h3>
            <p>guarantee for all products at AuraFit.com</p>
          </div>
          <div className="guarantee">
            <h3>Return within 14days</h3>
            <p>of receiving your order</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 www.aurafit.com. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
