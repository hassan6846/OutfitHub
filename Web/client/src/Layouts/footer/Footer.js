import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer className='footer_main' style={{ backgroundColor: "#131039" }}>
      <div className='footer_child'>
        <p className='footer_heading'>HELP & INFORMATION</p>
        <p>Request a Call Back!</p>
        <p>Contact Us</p>
        <p>FAQ & Help Center</p>
      </div>
      {/* 2 */}
      <div className='footer_child'>
        <p className='footer_heading'>ABOUT DESIGN</p>
        <p>About Us</p>
        <p>Privacy Statement</p>
        <p>Terms & Conditions</p>
        <p>Returns & Refunds</p>
      </div>
      {/* app Link */}
      <div className='footer_child'>
        <p className='footer_heading'>DOWNLOAD OUR APP</p>
        <div className='image_flex_footer'>
          <img className='appStore_img'  alt='googlePlay' src='https://www.clicky.pk/_nuxt/img/googleplay.3eb27f7.png'/>
          <img className='appStore_img' alt='appleStore' src='https://www.clicky.pk/_nuxt/img/appstore.91f0e59.png'/>
        </div>
        <p className='footer_heading'>KEEP IN TOUCH!</p>
      
      </div>
      {/* 3 */}
      <div className='footer_child'>
        <p className='footer_heading'>MORE FROM DESIGN</p>
        <p>Sell on Design</p>
        <p>Buissness Pathners</p>
      </div>
{/* 4 */}
      <div className='footer_child'>
        <p className='footer_heading'>SHOPPING FROM</p>
        <p>You're in Pakistan </p>

      </div>
    </footer>
  )
}

export default Footer