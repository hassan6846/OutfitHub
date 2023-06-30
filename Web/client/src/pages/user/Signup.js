// modules and Liabrary
import React from 'react'
//for changing page
import {Link,useNavigate} from "react-router-dom"
//for validation messages or error toasts
import toast,{Toaster} from "react-hot-toast"
//input get and validation
import { useFormik } from 'formik'
//
// css
import "./Signup.css"
// layouts or components
import Footer from '../../Layouts/footer/Footer'


const Signup = () => {
  const navigate=useNavigate()
  const formik=useFormik({
    initialValues:{
      email: 'xyz@gmail.com',
      username: 'Imaginary Name',
      password : ''
    },

    validateOnBlur: false,
    validateOnChange: false,
  })
  return (
    <div>
      <div className="main_wrapper">
      <Toaster position='top-center' reverseOrder={false}></Toaster>
        <form onSubmit={formik.handleSubmit}  method='post' className='form_wrapper'>
          <p className='signup_txt'>Create Account</p>
         
          <input {...formik.getFieldProps('username')} className='signup_email' type="text" placeholder='Enter Name'/>
          <input {...formik.getFieldProps('email')} className='signup_email' type="email" placeholder='Enter Email'/>
          <input {...formik.getFieldProps('password')} className='signup_email'type="password" placeholder='Enter Password'/>
          <input {...formik.getFieldProps('password')} className='signup_email'type="password" placeholder='Repeat Password'/>
          <button className='registerBtn'>Register</button>
          
          <Link to="/login">Login Instead....</Link>
        </form>
      </div>
      <Footer MarginTop="0vmax"/>
    </div>
  )
}

export default Signup