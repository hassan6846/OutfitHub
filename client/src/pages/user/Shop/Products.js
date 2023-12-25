import React from 'react';
// components
import CategoryBar from '../../../components/CategoryBar/CategoryBar';
import ProductContainer from '../../../components/Infinite-Container_products/ProductContainer';
// css
import './products.css';


const Products = () => {


  return (
    <>

      <div className='product-page-wrapper'>
        <CategoryBar />
        <ProductContainer />
      </div>
    </>
  );
};

export default Products;
