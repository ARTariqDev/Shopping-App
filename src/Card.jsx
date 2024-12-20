// Card.jsx
import React from 'react';

const Card = ({ imgPath, heading, description, price, onAddToCart }) => {
    return (
        <div className="card">
            <img src={imgPath} alt={heading} className="card-image" />
            <div className="card-content">
                <h2 className="card-heading">{heading}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p> {/* Display the price */}
                <button className="add-to-cart-btn" onClick={onAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
