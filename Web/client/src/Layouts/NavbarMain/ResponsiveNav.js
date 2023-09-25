import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { FiSearch } from "react-icons/fi"
import { BsFillCartFill, BsChevronDown } from "react-icons/bs"
import UseAnimation from "react-useanimations"
import menu3 from "react-useanimations/lib/menu3"
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMessage, AiOutlineUserAdd } from "react-icons/ai"
import { FaUserCircle } from "react-icons/fa"
import { TbLogout2 } from "react-icons/tb"
import { FaQuestion } from "react-icons/fa6"
import { RiMenu3Line } from "react-icons/ri"

// CSS imported
import './ResponsiveNav.css';
import { CompanyLogo, defaultUserImg } from '../../helpers/GlobalVariables';
const ResponsiveNav = () => {
  const ALT = "DESIGN"
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // navbar state toggle
  const [isActive, setIsActive] = useState(true)
  const toggleClass = isActive ? "Toggle_menu_sidebar_navbar" : "Toggle_menu_sidebar_navbar_clicked"
  const handleClick = () => {
    setIsActive(!isActive)
  }
  return (
    <div>
      <div className={toggleClass}></div>
      <div className='mobile_nav_link'>

        <div> <Link to='/' style={{ backgroundColor: '#eee', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', padding: '6px', borderRadius: '5px' }}>
          <img src={CompanyLogo} alt={ALT} />
        </Link></div>
        <div className='mobile_links_divs'>
          <div onClick={handleClick} style={{ cursor: "pointer" }} className='hamburger_menu'><UseAnimation size={35} animation={menu3} /></div>
          <Link to="/cart" ><span style={{ position: "relative" }}><BsFillCartFill className='cart-icon' /><span className='cart_length' style={{ position: "absolute" }}>1</span></span></Link>
        </div>
      </div>
      <nav className='navbar_container'>
        <Link className='nav_link_company' to='/' style={{ backgroundColor: '#eee', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)', padding: '6px', borderRadius: '5px' }}>
          <img src={CompanyLogo} alt={ALT} />
        </Link>
        <form style={{ position: "relative" }} onSubmit={handleSubmit} className='Searchfield_form_nav'>
          <MDBInput className='desktop_nav_input' size='lg' label="Search" placeholder='Search Anything' />
          <MDBBtn style={{ backgroundColor: "#4BB497", display: "flex", justifyContent: "center", alignItems: "center", border: "0px", marginLeft: "0.2rem" }} type='submit'><FiSearch style={{ scale: "1.6" }} /></MDBBtn>
          <div style={{ position: "absolute" }} className='search-results_dropdown'>Hello</div>
        </form>
        {/* Actions Nav If user is logged in or not 
      also not made by chatgpt it is me ok
      */}
        <div className='buttons_Nav_profile'>

          <Link to="/cart" ><span style={{ position: "relative" }}><BsFillCartFill className='cart-icon' /><span className='cart_length' style={{ position: "absolute" }}>1</span></span></Link>

          {/* use terinary operators instead */}
          <div className='profile_Dropdown_nav'>
            <Link to="/user" className='User_profile_dropdown'>   <img className='nav_img' height="40px" alt='alt' src={defaultUserImg} /> <BsChevronDown className='profile_icon_dropdown' />
              <div className='dropdown_results_nav'>
                <Link to="/signup" className='dropdown_items_nav'><AiOutlineUserAdd />LOGIN/SIGNUP</Link>

                {/* if he is logged in then */}
                <Link to="/user" className='dropdown_items_nav'><FaUserCircle />Your Profile</Link>
                <Link to="/cart" className='dropdown_items_nav'><AiOutlineShoppingCart /> Cart</Link>
                <Link to="/user/liked" className='dropdown_items_nav'><AiOutlineHeart /> Liked Items </Link>
                <Link to="/messages" className='dropdown_items_nav'><AiOutlineMessage />Messages</Link>
                <Link to="/logout" className='dropdown_items_nav'><TbLogout2 />LOGOUT</Link>
                <Link to="/faqs" className='dropdown_items_nav'><FaQuestion />FAQ'S</Link>
              </div>
            </Link>
          </div>
          {/* resposive toggle nav */}
          <div className='hamburger_menu'><RiMenu3Line /></div>
        </div>
      </nav>

    </div>
  );
};

export default ResponsiveNav;
