import React from 'react';
// components
import Nav from '../../../Layouts/NavbarMain/ResponsiveNav';
import CategoryBar from '../../../components/CategoryBar/CategoryBar';
import  Alert from "../../../components/Alert/Alert"
// css
import './products.css';
import ProductContainer from '../../../components/Infinite-Container_products/ProductContainer';
import ShopFilteration from '../../../components/ProductPageFilter/ShopFilteration';
import Footer from "../../../Layouts/footer/Footer"
import Pagination from "../../../components/Pagination/Pagination"
const Products = () => {


  return (
    <div className='product-page-wrapper'>
      <Alert/>
      <Nav />
      <CategoryBar />
      <ShopFilteration />
      <ProductContainer />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Products;
