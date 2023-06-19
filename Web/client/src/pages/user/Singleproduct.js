// liabrary and Modules or MAYBE STATES OR CONTEXT 
import React from 'react'
// css
import "./Singleproduct.css"
// components or Layouts

import ResponsiveNav from '../../Layouts/NavbarMain/ResponsiveNav'
import ProductView from '../../Layouts/SingleProductView/ProductView'
import Footer from '../../Layouts/footer/Footer'



const Singleproduct = () => {
  return (
    <div className='SingleProduct_wrapper'>
   <ResponsiveNav/>
   <ProductView/>
<Footer/>
    </div>
  )
}

export default Singleproduct