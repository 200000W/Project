import React from 'react';
import '../styles/styles.css';

function AboutUs() {
  return (
    <section id="about-us" className="about-us">
      <div className="about-container">
        <h2>About Pizzaverse</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Our Mission</h3>
            <p>At Pizzaverse, we're passionate about connecting people with their favorite pizza. Our mission is to make pizza delivery seamless and enjoyable.</p>
            <h3>Why Choose Us?</h3>
            <div className="features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <h4>Fast Delivery</h4>
                <p>Your food arrives hot and fresh within 30-45 minutes</p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <h4>Secure Ordering</h4>
                <p>Your payments and personal information are always protected</p>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <h4>24/7 Support</h4>
                <p>Our customer service team is always here to help you</p>
              </div>
            </div>
            <h3>Our Story</h3>
            <p>Founded in 2024, Pizzaverse started with a simple idea: making local food accessible to everyone.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
