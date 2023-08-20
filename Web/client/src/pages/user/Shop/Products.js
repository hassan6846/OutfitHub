import React from 'react';
// components
import Nav from '../../../Layouts/NavbarMain/ResponsiveNav';
import CategoryBar from '../../../components/CategoryBar/CategoryBar';
// css
import './products.css';


const Products = () => {


  return (
    <div className='product-page-wrapper'>
      <Nav />
      <CategoryBar />
 
    </div>
  );
};

export default Products;
