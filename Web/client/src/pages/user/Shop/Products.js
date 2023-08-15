import React, { useState, useEffect } from 'react';
import './products.css';
import Nav from '../../../Layouts/NavbarMain/ResponsiveNav';
import Footer from '../../../Layouts/footer/Footer';
import CategoryBar from '../../../components/CategoryBar/CategoryBar';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log('Response:', response.data);
        setData(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className='product-page-wrapper'>
      <Nav />
      <CategoryBar />
      <InfiniteScroll
        dataLength={data.length}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </InfiniteScroll>
      <Footer />
    </div>
  );
};

export default Products;
