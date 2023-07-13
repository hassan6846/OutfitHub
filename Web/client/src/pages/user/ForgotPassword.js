import React from 'react'
import "./ForgotPassword.css"
import { Link } from "react-router-dom"
import Footer from "../../Layouts/footer/Footer"
const ForgotPassword = () => {
  return (
    <div>
    <section className='Forgot_wrapper'>
  <Link className='logo_link' to="/"> <img alt='mainlogo' src='https://svgshare.com/i/vGt.svg' title='loogo'/></Link>
 <div className='forgor-form'>
  <h3 className='forgor-head'>Forgot Password </h3>
  <p className='forgor-tag'>No Worries,We'll send you instruction in your email</p>
 </div>
    </section>
  <Footer/>
  </div>
  )
}

export default ForgotPassword