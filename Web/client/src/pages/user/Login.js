// modules And Liabarary
import React from 'react'
import { Link } from "react-router-dom"
import { useFormik } from 'formik'
// css 
import "./Login.css"
// Layouts
import Footer from '../../Layouts/footer/Footer'


const Login = () => {
  // formik 
  const formik=useFormik({
    initialValues:{
     
      email: '@gmail.com',
      password : ''
    },
    validateOnBlur: false,
    validateOnChange: false,
  })
  return (
    <div>
      <section className='login_wrapper-100'>
      <Link to="/" className='login-logo'> <img alt='company' src="./logo.svg" /> </Link>
        <div className='login-container'>
          <p className='login-heading'>Login  Account</p>
          <form  onSubmit={formik.handleSubmit} className='login-form' method="post">
          
          <input {...formik.getFieldProps("email")} className='otp-input' type="email" placeholder='Enter Email' />
          
          <input  {...formik.getFieldProps("password")} className='otp-input' type="password" placeholder='Enter Password' />
        
         <button type="submit" className='otp-submit'>Login </button>
         
         </form>
         <p className='or'>or</p>
            <Link to="/signup" className='register'>Create Account Instead</Link>
        </div>
      </section>
      <Footer />

    </div>
  )
}

export default Login