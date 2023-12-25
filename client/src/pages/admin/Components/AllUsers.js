import React from 'react'
import "./AllUsers.css"
import {PiUsersThree} from "react-icons/pi"
import {FaHandsHelping} from "react-icons/fa"
import {SlGraph} from "react-icons/sl"
import {RiRadioButtonLine} from "react-icons/ri"

const AllUsers = () => {
  return (
 <div>
        <p  style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className='wishlist_page_head'>User Manegment,   </p>
<p style={{fontSize:"1.1rem",marginBottom:"0.4rem",color:"#131039",padding:"0.4rem",fontWeight:"500"}}>Users Overview,</p>
<div className='row_user_data_cards'>
  <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><PiUsersThree className='icon_user_maneg' /></span> 43m</p> <p>Total Registerd Users.</p>
  
  
  </div>
 
 
 
  <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><SlGraph className='icon_user_maneg' /></span> 43m</p> <p>Vistors On Website.</p></div>
   <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><FaHandsHelping className='icon_user_maneg' /></span> 43</p> <p>Total Vendor Requests.</p></div>
  <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><RiRadioButtonLine className='icon_user_maneg' /></span> 43k</p> <p>Online Users.</p></div>
</div>
<p style={{fontSize:"1.1rem",marginBottom:"0.4rem",color:"#131039",padding:"0.4rem",fontWeight:"500"}}>Trafic Overview,</p>
{/* Graphs Vistors World And New Users */}
<div className=''> </div>
<p style={{fontSize:"1.1rem",marginBottom:"0.4rem",color:"#131039",padding:"0.4rem",fontWeight:"500"}}>All Users.</p>
{/* div For all users... */}
<div className='all_users_datagrid'>
  
</div>
 </div>
  )
}

export default AllUsers