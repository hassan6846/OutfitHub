// modules And Liabarary
import React from 'react'
import { Link } from "react-router-dom"
// css 
import "./Login.css"
// Layouts
import Footer from '../../Layouts/footer/Footer'

const Login = () => {
  return (
    <div>
      <section className='login_wrapper-100'>
      <Link to="/" className='login-logo'> <img alt='company' src="./logo.svg" /> </Link>
        <div className='login-container'>
          <p className='login-heading'>Login  Account</p>
          <form className='login-form' method="post">
          
          <input className='otp-input' type="email" placeholder='Enter Email' />
          
          <input className='otp-input' type="password" placeholder='Enter Password' />
        
         <button type="submit" className='otp-submit'>Login </button>
         <p className='or'>or</p>
            <Link to="/signup" className='register'>Create Account Instead</Link>
         </form>
        </div>
      </section>
      <Footer />

    </div>
  )
}

export default Login