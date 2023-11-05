import React from 'react'
import "./AllUsers.css"
import {PiUsersThree} from "react-icons/pi"
import {BsFillPersonCheckFill} from "react-icons/bs"
import {SlGraph} from "react-icons/sl"
import {RiRadioButtonLine} from "react-icons/ri"
const AllUsers = () => {
  return (
 <div>
        <p  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className='wishlist_page_head'>User Manegment,  </p>
<p style={{fontSize:"1.1rem",marginBottom:"0.4rem",color:"#131039",padding:"0.4rem",fontWeight:"500"}}>Users Overview,</p>
<div className='row_user_data_cards'>
  <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><PiUsersThree className='icon_user_maneg' /></span> 43m</p> <p>Total Registerd Users.</p></div>
  <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><SlGraph className='icon_user_maneg' /></span> 43m</p> <p>Total Registerd Users.</p></div>
  <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><BsFillPersonCheckFill className='icon_user_maneg' /></span> 43m</p> <p>Total Registerd Users.</p></div>
  <div className='user_manegment_card'> <p className='usersCount'>  <span  className='icons_flex_user_maneg'><RiRadioButtonLine color='#4DC85A' className='icon_user_maneg' /></span> 43m </p> <p>Online Users </p></div>

</div>
 </div>
  )
}

export default AllUsers