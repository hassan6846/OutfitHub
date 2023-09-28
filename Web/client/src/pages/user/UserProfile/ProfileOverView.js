import React from 'react'
import { Link } from "react-router-dom"
import "./ProfileOverView.css"
import {FiEdit2} from "react-icons/fi"
import {defaultUserImg} from "../../../helpers/GlobalVariables"

const ProfileOverView = () => {
  return (
    <> 
   
    <p className='wishlist_page_head'>Manage Your Account,</p>
    <div className='user_profile_container'>
   <div className='img_flex'> <img style={{height:"80px",marginBottom:"1rem",borderRadius:"60%"}} src={defaultUserImg} alt="user_img" /> <input placeholder='upload' type="file" id="file" title='Select Image maxiumum 2mb' className='image_upload_ui'/>  </div>
      <div className='user_detail_wrapper'>
        <div>
          <h3 className='user_name'>Full Name |<span><Link>Edit</Link></span> </h3>
          <p className='user_name_ans'>HassanAli</p>
        </div>
        {/* Email */}
        <div>
          <h3 className='user_name'>Email</h3>
          <p className='user_name_ans'>ha6817334@gmail.com</p>
        </div>
        {/* GENDER */}
        <div>
          <h3 className='user_name'>Gender</h3>
          <p className='user_name_ans'>Male 👨</p>
        </div>
        {/* DATE OF Joined */}
        <div>
          <h3 className='user_name'>Joined In</h3>
          <p className='user_name_ans'>25/2/2023</p>
        </div>
        {/* Orders */}
        <div>
          <h3 className='user_name'>Orders</h3>
          <p className='user_name_ans'>3 </p>
        </div>
        {/* SUS */}
        <div className='details_wrapper'>
          <h3 className='user_name'>Cart | <span><Link to="/cart">Checkout</Link></span></h3>
          <p className='user_name_ans'> 0</p>
        </div>
        {/* Mobile Number */}
        <div className='details_wrapper'>
          <h3 className='user_name'>Mobile Number</h3>
          <p className='user_name_ans'>03160490149 </p>
        </div>
     
      </div>
   <div className='user_action_container'>   <Link className='wishlistLink' style={{display:"flex",alignItems:"center",width:"fit-content",columnGap:'0.3rem'}}>Edit Profile <FiEdit2/></Link> 
      <Link to="/password/forgot" className='wishlistLink' style={{display:"flex",alignItems:"center",width:"fit-content",columnGap:'0.3rem'}}>Update Password </Link></div>
    </div></>
  )
}

export default ProfileOverView