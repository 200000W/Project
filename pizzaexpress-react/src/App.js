import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import OrderPage from './pages/OrderPage';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Header /> {/* Header appears on all pages */}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <AboutUs />
          </>
        } />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer /> {/* Footer appears on all pages */}
    </Router>
  );
}

export default App;