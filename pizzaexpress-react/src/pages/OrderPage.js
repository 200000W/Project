import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import logo from '../images/logo.jpg';

const CartItem = ({ item, onRemove, onUpdateQuantity }) => (
    <div className="cart-item">
        <div className="cart-item-left">
            <img 
                src={item.image || 'https://via.placeholder.com/100x100?text=Pizza'} 
                alt={item.name} 
                className="cart-item-image"
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://via.placeholder.com/100x100?text=Pizza';
                }}
            />
            <div>
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">₹{item.price}</p>
            </div>
        </div>
        <div className="cart-item-right">
            <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                className="quantity-btn"
                disabled={item.quantity <= 1}
            >
                -
            </button>
            <span>{item.quantity}</span>
            <button 
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="quantity-btn"
            >
                +
            </button>
            <button 
                onClick={() => onRemove(item.id)}
                className="remove-btn"
            >
                🗑️
            </button>
        </div>
    </div>
);


const CheckoutForm = ({ total, onPlaceOrder }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        address: '',
        paymentMethod: 'cod'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onPlaceOrder(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h2 className="text-2xl font-bold mb-4 text-center">Checkout Details</h2>
            <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    className="form-input"
                    placeholder="Enter your full name"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    className="form-input"
                    placeholder="10 digit mobile number"
                />
            </div>
            <div className="form-group">
                <label className="form-label">Delivery Address</label>
                <textarea 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required 
                    className="form-textarea"
                    placeholder="Enter your full delivery address"
                    rows="3"
                ></textarea>
            </div>
            <div className="form-group">
                <label className="form-label">Payment Method</label>
                <select 
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="form-select"
                >
                    <option value="cod">Cash on Delivery</option>
                    <option value="upi">UPI Payment</option>
                    <option value="card">Credit/Debit Card</option>
                </select>
            </div>
            <div className="order-summary">
                <div className="summary-row">
                    <span>Subtotal</span>
                    <span>₹{total}</span>
                </div>
                <div className="summary-row">
                    <span>GST (18%)</span>
                    <span>₹{(total * 0.18).toFixed(2)}</span>
                </div>
                <div className="summary-row total">
                    <span>Total</span>
                    <span>₹{(total * 1.18).toFixed(2)}</span>
                </div>
            </div>
            <button 
                type="submit"
                className="place-order-btn"
            >
                Place Order
            </button>
        </form>
    );
};

function OrderPage() {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        } else {
            navigate('/menu');
        }
    }, [navigate]);

    const removeFromCart = (pizzaId) => {
        setCart(cart.filter(item => item.id !== pizzaId));
    };

    const updateQuantity = (pizzaId, newQuantity) => {
        if (newQuantity > 0) {
            setCart(cart.map(item => 
                item.id === pizzaId 
                ? {...item, quantity: newQuantity} 
                : item
            ));
        }
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const placeOrder = (orderDetails) => {
        console.log('Order Placed:', { 
            ...orderDetails, 
            cart, 
            totalAmount: calculateTotal() 
        });
        setOrderPlaced(true);
        localStorage.removeItem('cart');
    };

    if (orderPlaced) {
        return (
            <div className="order-page">
                <header className="order-header">
                    <div className="logo-container">
                        <img 
                            src={logo}
                            alt="Pizzaverse Logo" 
                            className="logo"
                        />
                        <span>Pizzaverse</span>
                    </div>
                </header>
                <div className="order-success">
                    <h2 className="success-title">Order Placed Successfully! 🎉</h2>
                    <p className="success-message">Your delicious pizzas are on the way!</p>
                    <button 
                        onClick={() => navigate('/menu')}
                        className="continue-btn"
                    >
                        Continue Shopping
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="order-page">
            <header className="order-header">
                <div className="logo-container">
                    <img 
                        src="https://imgs.search.brave.com/dHzkjoE1mj5hrXtJhGOfrlDARhzy9y7PqqeKq-Fr7QU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAyLzExLzU1LzE3/LzM2MF9GXzIxMTU1/MTcxOF9PbDdlT1FZ/TkRLNVM4cGJFSE1r/YWdrOWtiZFlUSjJp/WC5qcGc"
                        alt="PizzaExpress Logo" 
                        className="logo"
                    />
                    <span>PizzaExpress</span>
                </div>
            </header>

            <div className="checkout-grid">
                <div className="cart-section">
                    <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                    {cart.map(item => (
                        <CartItem 
                            key={item.id} 
                            item={item} 
                            onRemove={removeFromCart}
                            onUpdateQuantity={updateQuantity}
                        />
                    ))}
                </div>
                <CheckoutForm 
                    total={calculateTotal()} 
                    onPlaceOrder={placeOrder} 
                />
            </div>
        </div>
    );
}

export default OrderPage;
