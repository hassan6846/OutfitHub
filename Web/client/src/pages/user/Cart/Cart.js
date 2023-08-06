import React from 'react'
import "./Cart.css"
import ResponsiveNav from "../../../Layouts/NavbarMain/ResponsiveNav"
import Footer from '../../../Layouts/footer/Footer'
import { Link } from 'react-router-dom'
import {MdArrowLeft}  from "react-icons/md"

export const Cart = () => {
  return (
    <div>
      <ResponsiveNav/>
    <div className='go_backShopping'><Link className='goBack' to="/shop"><MdArrowLeft/>Continue Shopping</Link></div>
    {/* cart shit */}


    {/* cart */}
      <Footer/>
    </div>
  )
}
