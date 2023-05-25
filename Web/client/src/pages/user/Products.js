import React from 'react'
import Nav from '../../components/Navbar'
import "./Products.css";
import Filter from '../../components/ProductFilterCarousel'

const Products = () => {
  return (
  
  <div>    
    <div className='top_gap'></div>
    <Nav />
    <Filter/>
</div>  
  )
}

export default Products