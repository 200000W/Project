import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Delicious Food Delivered To Your Door</h1>
        <p className="hero-description">Order from your favorite local restaurants with just a few clicks</p>
        <Link to="/menu">
          <button className="order-now-btn">Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;