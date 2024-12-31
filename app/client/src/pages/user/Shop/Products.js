import React, { useEffect } from 'react';
// components

// css
import './products.css';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const [category, setCategory] = React.useState('men');
  const [subcategory, setSubcategory] = React.useState('all');

  const location = useLocation();
  const  state = location.state;
 useEffect(() => {

  if (state) {
    setCategory(state.category);
    setSubcategory(state.subcategory);
  }

 }, [state])
  return (
    <>

      <div className='product-page-wrapper'>
 
      
        <p>{category}</p>
        <p>{subcategory}</p>
      </div>
    </>
  );
};

export default Products;
