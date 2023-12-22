import React from 'react'
// components
import Footer from "../../../Layouts/footer/Footer"
// css
import "./UserProfile.css"
import UserOutler from './Sidebar/UserOutler'
import { Outlet } from 'react-router-dom'

const UserProfile = () => {
  return (
    <>
  
      {/* Here is the main */}
      <div className='sidebar_div_parent'>
        <UserOutler />
        <div className='scrollable_container'>
          <Outlet />
        </div>
      </div>
      {/* HERE IS JABBA THE HUTT */}
      <Footer />
    </>
  )
}

export default UserProfile