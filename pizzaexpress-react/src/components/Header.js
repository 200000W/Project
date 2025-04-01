import React from 'react';
import '../styles/styles.css';
import logo from '../images/logo.jpg';

function Header() {
  return (
    <header>
      <div className="container">
        <div className="item1">
          <h1>PizzaVerse</h1>
          <nav className="item2">
            <table>
              <tr>
                <td><a href="/">Home</a></td>
                <td><a href="#about-us">About&nbsp;Us</a></td>
                <td><a href="#contact">Contact</a></td>
              </tr>
            </table>
          </nav>
          <img src={logo} alt="PizzaExpress Logo" className="logo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
