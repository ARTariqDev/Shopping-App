import React from 'react';
import Card from './Card'; // Assuming you have a Card component defined to display product details
import p1 from './assets/p1.jpg'; // Update these imports with your actual image paths
import p2 from './assets/p2.jpg';
import p3 from './assets/p3.png';
import p4 from './assets/p4.jpg';
import p5 from './assets/p5.jpg';
import p6 from './assets/p6.jpg';
import p7 from './assets/p7.jpg';
import p8 from './assets/p8.jpg';

const products = [
    {
        imgPath: p1,
        heading: 'Ageratum houstonianum – Flossflower',
        description: "Ageratum houstonianum, also known as flossflower, is an easy-to-grow annual with fluffy, light blue, lavender, or white flowers. It attracts butterflies and thrives in full sun to partial shade.",
        price: 5.99 // Use a number here
    },
    {
        imgPath: p2,
        heading: 'Antirrhinum majus – Snapdragon',
        description: "Snapdragons are popular garden flowers with tall spikes of colorful blooms. They attract butterflies and hummingbirds and are ideal for beds, borders, and containers. They come in a variety of colors.",
        price: 3.99 // Use a number here
    },
    {
        imgPath: p3,
        heading: 'Begonia semperflorens – Wax Begonia',
        description: "Wax begonias are shade-loving annuals with glossy leaves and bright, colorful flowers. They are perfect for borders, hanging baskets, and containers. Available in various colors.",
        price: 4.99 // Use a number here
    },
    {
        imgPath: p4,
        heading: 'Caladium bicolor – Fancy-leafed Caladium',
        description: "Fancy-leafed caladiums are tropical plants with large, colorful, heart-shaped leaves. They thrive in shade and are perfect for containers, borders, and as focal points in gardens.",
        price: 7.99 // Use a number here
    },
    {
        imgPath: p5,
        heading: 'Centaurea cyanus – Cornflower',
        description: "Cornflowers are attractive, easy-to-grow annuals with dainty, blue or white flowers. They are great for borders, cut flowers, and attracting pollinators.",
        price: 6.99 // Use a number here
    },
    {
        imgPath: p6,
        heading: 'Nicotiana alata – Flowering Tobacco',
        description: "Flowering tobacco is a fragrant annual with tubular flowers that open in the evening. It attracts moths and other pollinators and thrives in full sun to partial shade.",
        price: 5.49 // Use a number here
    },
    {
        imgPath: p7,
        heading: 'Tecoma stans – Yellow Bells / Yellow Trumpet Vine',
        description: "Yellow bells are the type of Tecoma stans with yellow, trumpet-shaped flowers that are large and showy. They are perennial shrubs or vines that attract butterflies, bees, and hummingbirds.",
        price: 8.99 // Use a number here
    },
    {
        imgPath: p8,
        heading: 'Tecoma stans – Yellow Bells / Yellow Trumpet Vine',
        description: "Yellow bells are the type of Tecoma stans with yellow, trumpet-shaped flowers that are large and showy. They are perennial shrubs or vines that attract butterflies, bees, and hummingbirds.",
        price: 8.99 // Use a number here
    }
];

const Products = ({ addToCart }) => {
    return (
        <div id="products">
            <header>
                <h1 style={{textAlign: 'center',fontSize: '4em'}}>Our Products</h1>
            </header>
            <main>
                <div className="card-grid">
                    {products.map((product, index) => (
                        <Card
                            key={index}
                            imgPath={product.imgPath}
                            heading={product.heading}
                            description={product.description}
                            price={product.price.toFixed(2)} // Ensure price is a number and formatted correctly
                            onAddToCart={() => addToCart(product)} // Pass the product to the addToCart function
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Products;
