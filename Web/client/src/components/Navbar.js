import React from 'react'
// css 
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className='nav_wrapper_100'>    <div className='nav_wrapper_90'>
    
    <Link className='Nav__LOGO'> <img src='/logo.svg' alt='Close button' className='svg' /></Link>
    <div className='nav__links'>
      <Link className='Nav_link' to="/shop"  >Men</Link>
      <Link className='Nav_link' to="/shop" >Women</Link>
      <Link className='Nav_link'  to="/shop"  >Kids</Link>
      <Link className='Nav_link'   to="/shop" >Girl</Link>
      <Link className='Nav_link'  to="/shop"  >Beauty</Link>
      <Link className='Nav_link'  to="/shop"  >Trending</Link>
      </div>  
     
      <div className='mobile_menu'>Menu</div>  
    
     <div className='nav_actions'>
      <div className='user_profile'>  <img src='/person.svg' alt='Close button' className='svg' /></div>
      <div className='wishlist' > <div className='point'>1</div> <img src='/heart.svg' alt='Close button' className='svg' /></div>
      <div className='cart' ><i>🧺</i></div>
      <div className='search_Bar' ><input className='inp' placeholder='Search Products' ></input> 🔎</div>
      {/* hidden menu */}
   
     </div>
  </div></nav>

  )
}

export default Navbar;