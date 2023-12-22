import React from 'react';
// components
import CategoryBar from '../../../components/CategoryBar/CategoryBar';
import ProductContainer from '../../../components/Infinite-Container_products/ProductContainer';
import Footer from "../../../Layouts/footer/Footer"
// css
import './products.css';


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
