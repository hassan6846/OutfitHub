import React from 'react'
// components

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
  
   
    </>
  )
}

export default UserProfile