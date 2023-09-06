import React from 'react'
import "./Footer.css"
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <footer className='footer_main' style={{ backgroundColor: "#131039" }}>
      <div className='footer_child'>
        <p className='footer_heading'>HELP & INFORMATION</p>
        <Link  to="tel:92316049019" className='footer_link_style' >Request a Call Back!</Link>
        <Link className='footer_link_style' >Contact Us</Link>
        <Link className='footer_link_style' >FAQ & Help Center</Link>
      </div>
      {/* 2 */}
      <div className='footer_child'>
        <p className='footer_heading'>ABOUT DESIGN</p>
        <Link className='footer_link_style' >About Us</Link>
        <Link className='footer_link_style' >Privacy Statement</Link>
        <Link className='footer_link_style' >Terms & Conditions</Link>
        <Link className='footer_link_style' >Returns & Refunds</Link>
      </div>
      {/* app Link */}
      <div className='footer_child'>
        <p className='footer_heading'>DOWNLOAD OUR APP</p>
        <div className='image_flex_footer'>
       <Link className='footer_link_style'> <img className='appStore_img' alt='googlePlay' src='https://www.clicky.pk/_nuxt/img/googleplay.3eb27f7.png' /></Link>  
        <Link className='footer_link_style'> <img className='appStore_img' alt='appleStore' src='https://www.clicky.pk/_nuxt/img/appstore.91f0e59.png' /></Link> 
        </div>
        <p className='footer_heading'>KEEP IN TOUCH!</p>

      </div>
      {/* 3 */}
      <div className='footer_child'>
        <p className='footer_heading'>MORE FROM DESIGN</p>
        <Link className='footer_link_style'>Sell on Design</Link>
        <Link className='footer_link_style'>Buissness Pathners</Link>
      </div>
      {/* 4 */}
      <div className='footer_child'>
        <p className='footer_heading'>SHOPPING FROM</p>
        <p>You're in Pakistan  </p>

      </div>
    </footer>
  )
}

export default Footer