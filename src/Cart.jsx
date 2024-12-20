import React from 'react';
import './App.css';

function Cart({ cartItems, setCartItems }) {
    // Function to remove an item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    // Function to increase quantity
    const increaseQuantity = (id) => {
        setCartItems(cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Function to decrease quantity
    const decreaseQuantity = (id) => {
        setCartItems(cartItems.map((item) =>
            item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        ));
    };

    return (
        <div>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.imgPath} alt={item.name} className="cart-item-image" />
                            <h3>{item.heading}</h3>
                            <p>Price: ${Number(item.price).toFixed(2)}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => decreaseQuantity(item.id)}>-</button>
                            <button onClick={() => increaseQuantity(item.id)}>+</button>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;
