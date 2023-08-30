import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import "./ProductContainer.css";
import ProductCard from "../ProductCard_Shop/ProductCard";
import axios from 'axios';

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://lifestyle-mock-server-api.onrender.com/women?_limit=12&_page=${page}`);
      const newProducts = response.data;

      if (newProducts.length === 0) {
        setHasMore(false);
        return;
      }

      setProducts(prevProducts => [...prevProducts, ...newProducts]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  console.log(products)

  return (
    <section className='product_container_flex'>
      <InfiniteScroll 
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4 style={{overflow:"hidden"}}>Loading..</h4> }
        className='Product_container_results'
      >

        {products.map(product => (
          <ProductCard
            key={product.id}
            image={product.image} // Replace with the actual property name for image
            name={product.title}
            price={product.price}
            actualPrice={product.actualPrice}
            catgory={product.category}
            saved={Math.floor(((product.actualPrice - product.price) / product.price) * 100)}
          // Replace with the actual property name for name
          />
        ))}

      </InfiniteScroll>
    </section>
  );
}

export default ProductContainer;
