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
        <Link className='links_btns' to="/shop/men">Men</Link>
        <Link className='links_btns' to="/shop/women">Women</Link>
        <Link className='links_btns' to="/shop/kids">Kids</Link>
        <Link className='links_btns' to="/shop/girls">Girls</Link>
        <Link className='links_btns' to="/shop/jewelery">Jewelery</Link>
        <Link className='links_btns' to="/shop/sale" >10%Off</Link>
      </div>
      <div className='public_actions'>
       <form className='product-form'> <input  className='search_inp' placeholder='Search Anything'/>
        <button className='searchbtn'>Search</button>
        <div className='search_result'>Search</div>
        </form>
        <Link className='links_btns' to="/login">Login</Link>
        <Link className='links_btns' to="/signup">SignUp</Link>
 
      </div>
    </nav>
  )
}

export default ResponsiveNav