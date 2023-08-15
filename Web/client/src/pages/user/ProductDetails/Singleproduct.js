// liabrary and Modules or MAYBE STATES OR CONTEXT 
import React from 'react'
// css
import "./Singleproduct.css"
// components or Layouts

import ResponsiveNav from '../../../Layouts/NavbarMain/ResponsiveNav'
import SingleproductView from "../../../Layouts/SingleProductView/ProductView"
import Footer from '../../../Layouts/footer/Footer'
import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb'



const Singleproduct = () => {
  return (
    <div className='SingleProduct_wrapper'>
      <ResponsiveNav/>
<div className='SingleViewContainer'>
   <BreadCrumb/>
   <SingleproductView/>
</div>
<Footer/>
    </div>
  )
}

export default Singleproduct