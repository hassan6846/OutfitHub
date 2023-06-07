import React from 'react'
// css
import "./AdminNav.css"
import { Link } from 'react-router-dom'
const AdminNav = (props) => {
  return (
    <nav className='admin_nav_wrapper'>
      <div className='admin__nav_msg'>
        <h3 className='msg_heading'>Welcome back, Hassan</h3>
      <p className='msg_main'>Here'what's happening with your store today</p>
      </div>
      <div className='admin_nav_actions'>
      <div  className='admin_logout'>  <Link className='logout_link'>Logout <span>🔀</span> </Link> </div>
      <div  className='admin_logout'>  <Link className='logout_link'> <span>🔔</span> </Link> </div>

    <div className='admin_profile'> <img alt="profile_img" className='avatar_img' src="./avatar.webp"/> <p className='userName'>Hassan</p> </div>
      </div>
    </nav>
  )
}

export default AdminNav