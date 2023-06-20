// modules and Liabary
import React from 'react'
//css
import './Products.css'
// components and layouts
import Nav from "../../Layouts/NavbarMain/ResponsiveNav"
import FilterSidebar from '../../Layouts/Filter-Sidebar-Shop/FilterSidebar'
import Container from "../../Layouts/ProductContainer/ProductContainer"
import Footer from "../../Layouts/footer/Footer"
const Products = () => {
  return (
    <div className='product-page-wrapper'>
<Nav/>
<div className='shop-wrapper'>
<FilterSidebar/>
<Container/>
</div>
<Footer/>
    </div>
  )
}

export default Products