import React from 'react'
import Nav from '../../components/Navbar'
import "./Products.css";
import FilterBar from '../../components/FilterBar';


const Products = () => {
  return (
  
  <div>    
    <div className='top_gap'></div>
    <Nav />
   {/* product carsoul */}
       <FilterBar/>
</div>  
  )
}

export default Products