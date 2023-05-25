import React from 'react'
// css 
import "./Navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav_wrapper'>
      <Link className='Nav__LOGO'> <img src='/logo.svg' alt='Close button' className='svg' /></Link>
      <div className='nav__links'>
        <Link className='Nav_link' >Men</Link>
        <Link className='Nav_link'>Women</Link>
        <Link className='Nav_link'  >Kids</Link>
        <Link className='Nav_link'  >Girl</Link>
        <Link className='Nav_link'  >Beauty</Link>
        <Link className='Nav_link'  >Trending</Link>
        </div>  
        <div className='mobile_menu'>Menu</div>
       <div className='nav_actions'>
        <div className='user_profile'>  <img src='/person.svg' alt='Close button' className='svg' /></div>
        <div className='wishlist' > <img src='/heart.svg' alt='Close button' className='svg' /></div>
        <div className='cart' ><i>🧺</i></div>
        <div className='search_Bar' ><input className='inp' placeholder='Search Products' ></input> 🔎</div>
        {/* hidden menu */}
     
       </div>
    </nav>
  )
}

export default Navbar