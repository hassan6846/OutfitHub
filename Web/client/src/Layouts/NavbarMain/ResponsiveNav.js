import React from 'react'
import "./ResponsiveNav.css"
import { BiCart } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { IoSearchOutline } from "react-icons/io5"
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

      <Link className='navlogo' to="/" ><img className='nav_logos_img' src='./logo.svg' alt='logo' /></Link>
      <div className='nav_links'>
        <div>
          <form className='search_form'>
            <input placeholder='Search Anything' className='Search_field' />
            <button className='navSearchField'><IoSearchOutline id='search_ico' /></button>
          </form>
        </div>
        <div className='Search_results'>Search</div>
      </div>
      {/* mobile search field */}


      <div className='public_actions'>

        <div className='logged_true_userAcc'><img className='user_account_image' alt='users_img' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' />
          {/* add user acctions while he is loged in */}
          <div className='dropdown'>
            <ul className='list_actions'>
              <li className='list_link'><Link>Profile</Link></li>
              <li className='list_link' > Orders</li>
              <li className='list_link' >Liked</li>
              <li className='list_link' >Faqs</li>
              <li className='list_link' >Logout</li>
            </ul>
          </div>
        </div>
        <Link className='links_btns login_btn_nav' to="/login">Login</Link>
        <Link className='links_btns signup_btn_nav' to="/signup">SignUp</Link>
        <Link to="/cart" className='cart_btn_toggle'> <span className='product_counter'>1</span> <BiCart /> </Link>
      </div>
    </nav>
  )
}

export default ResponsiveNav