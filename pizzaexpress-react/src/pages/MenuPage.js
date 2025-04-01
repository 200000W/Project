import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import logo from '../images/logo.jpg';
function MenuPage() {
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    
    
    const pizzaData = [
        { 
            id: 1, 
            name: 'Tandoori Paneer Pizza', 
            price: 299, 
            ingredients: 'Paneer, Tandoori Sauce, Bell Peppers', 
            image: require('../images/tandoori-panner-pizza.jpg')
        },
        { 
            id: 2, 
            name: 'Mushroom Masala Pizza', 
            price: 349, 
            ingredients: 'Sautéed mushrooms, red onions, green bell peppers', 
            image:  require('../images/mushroom-masala-pizza.jpg')
        },
        { 
            id: 3, 
            name: 'Vegetable Makhani Pizza', 
            price: 349, 
            ingredients: 'Makhani Sauce, Mixed Vegetables', 
            image:  require('../images/vegetable-makhani-pizza.jpg')
        },
        { 
            id: 4, 
            name: 'Butter Chicken Pizza', 
            price: 499, 
            ingredients: 'Butter Chicken Chunks, Cream, Spices', 
            image:  require('../images/butter-chicken-pizza.jpg')
        },
        { 
            id: 5, 
            name: 'Keema Pizza', 
            price: 599, 
            ingredients: 'Spiced minced lamb or chicken (keema), onions, peas, chillies', 
            image:  require('../images/keema-pizza.jpg')
        },
        
        { 
            id: 6, 
            name: 'Masala Chicken Pizza', 
            price: 399, 
            ingredients: 'Spicy Chicken Tikka, Onions, Capsicum', 
            image:  require('../images/masala-chicken-pizza.jpg')
        }
    ];

    const addToCart = (pizza) => {
        const existingItem = cart.find(item => item.id === pizza.id);
        if (existingItem) {
            setCart(cart.map(item => 
                item.id === pizza.id 
                ? {...item, quantity: item.quantity + 1} 
                : item
            ));
        } else {
            setCart([...cart, {...pizza, quantity: 1}]);
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const proceedToCheckout = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        navigate('/order');
    };

    return (
        <div className="menu-page">
            <header className="menu-header">
                <div className="logo-container">
                    <img 
                        src={logo}
                        alt="Pizzaverse Logo" 
                        className="logo"
                    />
                    <span>Pizzaverse</span>
                </div>
                <div className="cart-icon-container">
                    <span className="cart-icon">🛒</span>
                    <span className="cart-count">{cart.length}</span>
                </div>
            </header>

            <div className="menu-content">
                <div className="pizza-grid">
                    {pizzaData.map(pizza => (
                        <div 
                            key={pizza.id} 
                            className="pizza-card"
                        >
                            <img 
                                src={pizza.image} 
                                alt={pizza.name} 
                                className="pizza-image"
                                onError={(e) => {
                                    e.target.onerror = null; 
                                    e.target.src = 'https://via.placeholder.com/300x200?text=Pizza+Image';
                                }}
                            />
                            <div className="pizza-info">
                                <h2 className="pizza-name">{pizza.name}</h2>
                                <p className="pizza-ingredients">{pizza.ingredients}</p>
                                <div className="pizza-price-cart">
                                    <span className="pizza-price">₹{pizza.price}</span>
                                    <button 
                                        onClick={() => addToCart(pizza)}
                                        className="add-to-cart-btn"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-footer-container">
                            <div>
                                <span className="cart-total">Total: ₹{calculateTotal()}</span>
                                <span className="cart-items-count">
                                    {cart.reduce((total, item) => total + item.quantity, 0)} items
                                </span>
                            </div>
                            <button 
                                onClick={proceedToCheckout}
                                className="checkout-btn"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MenuPage;