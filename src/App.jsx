import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/logo.jpg';
import Home from './Home'; // Make sure to adjust the import path
import Cart from './Cart';
import Products from './Products'; // Import the Products component

function App() {
    const [cartItems, setCartItems] = useState([]); // State to track cart items

    // Function to handle adding products to the cart
    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const existingProduct = prevItems.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevItems, { ...product, id: prevItems.length + 1, quantity: 1 }];
        });
    };

    return (
        <Router>
            <div className="App">
                {/* Navigation Bar */}
                <nav>
                    <ul>
                        <li>
                            <img src={logo} id="logo" alt="Logo" />
                        </li>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                        <li>
                            <Link to="/cart">
                                Cart ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Define Routes */}
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} />} />
                    <Route path="/products" element={<Products addToCart={addToCart} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
