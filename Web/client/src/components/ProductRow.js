import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./ProductRow.css";
import ProductCard from './Card';

const ProductRow = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const productsData = response.data.products;
        setProducts(productsData);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <div className='ProductRow'>
      <div className='Product_Filter'></div>
      <div className='ProductCards_Container'>
        <div className='card_menu'></div>
        <div className='ShopCard-Wrapper'>
          {products.map(product => (
            <ProductCard title={product.title} price={product.price} src={product.images[0]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
