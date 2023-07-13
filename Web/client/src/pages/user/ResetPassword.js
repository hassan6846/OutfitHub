import React from 'react'
import "./ResetPassword.css"
import {Link} from "react-router-dom"
import Footer from "../../Layouts/footer/Footer";
const ResetPassword = () => {
  return (
    <div>
      <section className='reset-wrapper'>
      <Link className='logo_link' to="/">
          <img alt='mainlogo' src='https://svgshare.com/i/vGt.svg' title='logo' />
        </Link>
        <form method='put' className='reset-Passform'>
       
         <h3 className='reset-head'>Enter New Password</h3>
          <input className='reset-inp'  type='password' placeholder='New Password'/>
          <input  className='reset-inp' type='password' placeholder='Repeat Password'/>
          <button type="submit" className='forgor-btn'>Update Password</button>
        </form>
      </section>
      <Footer/>
    </div>
  )
}

export default ResetPassword