import React, {useEffect} from 'react'
import Nav from '../../components/Navbar'
import "./Products.css";
import FilterBar from '../../components/FilterBar';
import ProductRow from '../../components/ProductRow'


const Products = () => {
  useEffect(()=>{
    document.title="Shop"
  
  })
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