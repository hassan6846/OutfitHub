// modules and Liabrary
import React from 'react'
import {Link} from "react-router-dom"
// css
import "./Signup.css"
// layouts or components
import Footer from '../../Layouts/footer/Footer'
const Signup = () => {
  return (
    <div>
      <div className="main_wrapper">
        <div className='form_wrapper'>
          <p className='signup_txt'>Create Account</p>

          <input className='signup_email' type="email" placeholder='Enter Email'/>
          <input className='signup_email'type="password" placeholder='Enter Password'/>
          <input className='signup_email'type="password" placeholder='Repeat Password'/>
          <button className='registerBtn'>Register</button>
          <Link>Login Instead....</Link>
        </div>
      </div>
      <Footer MarginTop="0vmax"/>
    </div>
  )
}

export default Signup