import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Home = () => {
    return (
        <div id="home">
            <header>
                <h1>Welcome to Paradise Nursery</h1>
            </header>
            <main id="intro">
                <p>
                    Welcome to Paradise Nursery, your premier destination for a diverse selection of fruit trees, evergreens, and Mediterranean plants in Southern California.
                </p>
                <p>
                    With years of experience, we are a trusted source for both popular and rare fruit trees, privacy hedges, and fragrant flowering plants.
                </p>
                <p>
                    Our nursery offers everything you need to cultivate a colorful, healthy, and attractive garden, including annuals, perennials, vegetables, garden soil, mulch, and nursery stock.
                </p>
                <p>
                    Whether you’re looking to enhance your home garden or seeking expert advice on plant selection and care, Paradise Nursery is here to assist you every step of the way.
                </p>
                <p>
                    Explore our extensive collection and let us help you bring your garden dreams to life.
                </p>
                <Link to="/products" id="get-started-btn">
                    Get Started
                </Link>
            </main>
        </div>
    );
};

export default Home;
