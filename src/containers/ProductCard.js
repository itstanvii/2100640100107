// src/ProductCard.js
import React, { useState, useEffect } from 'react';

const ProductCard = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('https://api.example.com/product');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching the product:', error);
      }
    };

    fetchProduct();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductCard;