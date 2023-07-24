import React from 'react'
import "./ResponsiveNav.css"

import { Link } from 'react-router-dom'
/**
 * 
 * @todo 
 * we have to make links 
 * then also btns action would show if user exists in login or already logged in 
 * 
 */
const ResponsiveNav = () => {
  return (
    <nav className='navbar'>
      <div className='navlogo'><Link to="/"><img src='./logo.svg' alt='logo'/></Link></div>
      <div className='nav_links'>
        <Link to="/shop/men">Men</Link>
        <Link to="/shop/women">Women</Link>
        <Link to="/shop/kids">Kids</Link>
        <Link to="/shop/girls">Girls</Link>
        <Link to="/shop/jewelery">Jewelery</Link>
        <Link to="/shop/sale" >10%Off</Link>
      </div>
      <div className='public_actions'>
       <form className='product-form'> <input  placeholder='Search Anything'/>
        <button className='searchbtn'>Search</button>
        </form>
        <Link to="/login">Login</Link>
        <Link to="/signup">SignUp</Link>
 
      </div>
    </nav>
  )
}

export default ResponsiveNav