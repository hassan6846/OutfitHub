import React from 'react'
import "./AllUsers.css"
import { IoAddSharp } from "react-icons/io5";

const AllUsers = () => {
  return (
    <div className='All_user_cont'>
<div className='user_head'>
  <h2 className='allusers_head'>Users Manegment</h2>
  <button className='invite_btn'><IoAddSharp/> Invite User</button>
  </div>
  <p className='user_message'>There are currently 12 Users and 3 admins</p>
  <div  className='all-users'>
    
    <div className='user-card'>
      
      
       </div>
    
     </div>

    </div>
  )
}

export default AllUsers