import React from 'react';
// components
import CategoryBar from '../../../components/CategoryBar/CategoryBar';
import  Alert from "../../../components/Alert/Alert"
// css
import './products.css';
import ProductContainer from '../../../components/Infinite-Container_products/ProductContainer';
import Footer from "../../../Layouts/footer/Footer"

const Products = () => {


  return (
    <>
  
    <div className='product-page-wrapper'>
      <CategoryBar />
      <ProductContainer />

      <Footer />
    </div>
    </>
  );
};

export default Products;
