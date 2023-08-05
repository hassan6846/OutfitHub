import React from 'react';
import './products.css';

import Nav from '../../Layouts/NavbarMain/ResponsiveNav';
import Footer from '../../Layouts/footer/Footer';
import CategoryBar from '../../components/CategoryBar';

const Products = () => {
  
  return (
    <div className='product-page-wrapper'>
      <Nav />
      <CategoryBar />
    
    
      <Footer />
    </div>
  );
};

export default Products;
