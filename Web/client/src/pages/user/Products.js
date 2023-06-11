import React from 'react'
import Nav from '../../components/Navbar'
import "./Products.css";
import FilterBar from '../../components/FilterBar';
import ProductRow from '../../components/ProductRow'


const Products = () => {
  return (
  
  <div>    
    <div className='top_gap'></div>
    <Nav />
   {/* product carsoul */}
       <FilterBar/>
    <ProductRow/>
</div>  
  )
}

export default Products