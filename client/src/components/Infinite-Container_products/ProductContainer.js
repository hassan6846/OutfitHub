import React, { useState, useEffect } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import "./ProductContainer.css";

import ProductCard from '../Card/ProductCard';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import { ENDPOINT } from '../../api/Endpoint';
import Slug from '../../helpers/Slugify';
const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line 
  },[page,products]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}/products?page=${page}&limit=10`);
      const newProducts = response.data.data;

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
    
      style={{width:"100%"}}
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<div style={{width:"100%",height:"90vh",display:'flex',justifyContent:'center',alignItems:"center",padding:"1rem"}}><CircularProgress/></div>}
        className='Product_container_results'
      >

        {products.map(product => (
          <ProductCard
          saved={Math.floor(((Number(product.RegularPrice) - Number(product.SalePrice)) / Number(product.RegularPrice)) * 100)}
          // pathname:`/shop/${Slug(item.name)}`,
          state={product}
          tagone={product.tags[Math.floor(Math.random() * product.tags.length)]}
          tagtwo={product.tags[Math.floor(Math.random() * product.tags.length)]}
          tagsthree={product.tags[Math.floor(Math.random() * product.tags.length)]}
          to={`/shop/${Slug(product.name)}`}
          name={product.name}
          image={product.image[0]}
          // Replace with the actual property name for name
          />
        ))}

      </InfiniteScroll>
    </section>
  );
}

export default ProductContainer;
