import React from 'react'
import "./ResponsiveNav.css"
import {BiCart} from "react-icons/bi"
import { Link } from 'react-router-dom'
import {IoSearchOutline} from "react-icons/io5"
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
    
      <div className='navlogo'><Link to="/"><img className='nav_logos' src='./logo.svg' alt='logo'/></Link></div>
      <div className='nav_links'>
       <form>
       <input placeholder='Search Anything' className='Search_field'/>
       <button className='navSearchField'><IoSearchOutline id='search_ico'/></button>
       </form>
      </div>
      {/* mobile search field */}
   
     
      <div className='public_actions'>
        
      
        <Link className='links_btns login_btn_nav' to="/login">Login</Link>
        <Link className='links_btns signup_btn_nav' to="/signup">SignUp</Link>
        <Link className='cart_btn_toggle'> <span className='product_counter'>1</span> <BiCart/> </Link>
      </div>
    </nav>
  )
}

export default ResponsiveNav