//css
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer_main' style={{ backgroundColor: "#131039" }}>
      <div className='footer_child'>
        <p className='footer_heading'>HELP & INFORMATION</p>
        <p href="tel:92316049019" className='footer_link_style' >Request a Call Back!</p>
        <p href="/user/contact" className='footer_link_style' >Contact Us</p>
        <p href="/faqs" className='footer_link_style' >FAQ & Help Center</p>
      </div>
      {/* 2 */}
      <div className='footer_child'>
        <p className='footer_heading'>ABOUT DESIGN</p>
        <p href="#" className='footer_link_style' >About Us</p>
        <p href="#" className='footer_link_style' >Privacy Statement</p>
        <p href="#" className='footer_link_style' >Terms & Conditions</p>
        <p href="/faqs" className='footer_link_style' >Returns & Refunds</p>
      </div>
      {/* app Link */}
      <div className='footer_child'>

        <p className='footer_heading'>DOWNLOAD OUR APP</p>
        <div className='image_flex_footer'>
          <p className='footer_link_style'> <img className='appStore_img' alt='googlePlay' src='https://www.clicky.pk/_nuxt/img/googleplay.3eb27f7.png' /></p>
          <p  className='footer_link_style'> <img className='appStore_img' alt='appleStore' src='https://www.clicky.pk/_nuxt/img/appstore.91f0e59.png' /></p>
        </div>
        <p className='footer_heading'>KEEP IN TOUCH!</p>

      </div>
      {/* 3 */}
      <div className='footer_child'>
        <p className='footer_heading'>MORE FROM DESIGN</p>
        <p href="/user/vendor" className='footer_link_style'>Sell on Design</p>
        <p className='footer_link_style'>Buissness Pathners</p>
      </div>
      {/* 4 */}
      <div className='footer_child'>
        <p className='footer_heading'>SHOPPING FROM</p>
        <p>You're in <span className='footer_link_style' >Pakistan</span>  </p>

      </div>
    </footer>
  )
}

export default Footer