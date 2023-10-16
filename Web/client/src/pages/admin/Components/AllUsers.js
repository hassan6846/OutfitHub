import React from 'react'
import "./AllUsers.css"
import {PiUsersThree} from "react-icons/pi"

const AllUsers = () => {
  return (
 <div>
        <p  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className='wishlist_page_head'>User Manegment,  </p>
<p style={{fontSize:"1.1rem",marginBottom:"0.4rem",color:"#131039",padding:"0.4rem",fontWeight:"500"}}>Users Overview,</p>
<div className='row_user_data_cards'>
  <div className='user_manegment_card'><p>Total Users</p> <PiUsersThree/></div>
  <div className='user_manegment_card'>3123</div>
  <div className='user_manegment_card'>32</div>
</div>
 </div>
  )
}

export default AllUsers