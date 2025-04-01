import React from 'react';
import '../styles/styles.css';

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-content">
        <div className="footer-section">
          <h3>PizzaExpress</h3>
          <p>Order delicious food online from your favourite restaurant.</p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about-us">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> 123 Food Street, City</p>
          <p><i className="fas fa-phone"></i> (123) 456-7890</p>
          <p><i className="fas fa-envelope"></i> info@Pizzaexpress.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PizzaExpress. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
