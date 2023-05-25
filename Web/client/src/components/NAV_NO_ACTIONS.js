import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import "./Nav_No_Actions.css"

// css 


const Nav_No_Actions = () => {
  return (
    <nav className='nav_wrapper_NoAction'>
      <Link className='Nav__LOGO'> <img src='/logo.svg' alt='Close button' className='svg' /></Link>
      
    </nav>
  )
}

export default Nav_No_Actions;