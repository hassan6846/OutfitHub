import React, { useEffect } from 'react'
import { Link } from "react-router-dom"
import "./ProfileOverView.css"
import { FiEdit2 } from "react-icons/fi"
import { MDBBadge } from "mdb-react-ui-kit"
import { useSelector } from 'react-redux'

const ProfileOverView = () => {
  const cart = useSelector((state) => state.cart);
  const avatar = useSelector((state) => state.user.avatar);
  const name = useSelector((state) => state.user.name);
  const email=useSelector((state)=>state.user.email)
  const gender=useSelector((state)=>state.user.gender)
  const joinedin=useSelector((state)=>state.user.joinedin)
  const phone=useSelector((state)=>state.user.phone)

  useEffect(()=>{
    console.log(avatar)
  })
  return (
    <>

      <p className='wishlist_page_head'>Manage Your Account,</p>
      <div className='user_profile_container'>
        <div className='img_flex'> <img style={{ height: "80px", marginBottom: "1rem", borderRadius: "60%" }} src={avatar} alt="user_img" />    </div>
        {/* MAIN */}
        <div className='user_detail_wrapper'>
          <div>
            <h3 className='user_name'>Full Name |<span><Link to="/user/edit">Edit</Link></span> </h3>
            <p style={{ display: "flex", alignItems: "center", columnGap: "0.5rem" }} className='user_name_ans'>{name}<MDBBadge color='info' light>User</MDBBadge></p>
          </div>
          {/* Email */}
          <div>
            <h3 className='user_name'>Email</h3>
            <p style={{ display: "flex", alignItems: "center", columnGap: "1rem" }} className='user_name_ans'>{email}</p>
          </div>
          {/* GENDER */}
          <div>
            <h3 className='user_name'>Gender</h3>
            <p className='user_name_ans'>{gender} </p>
          </div>
          {/* DATE OF Joined */}
          <div>
            <h3 className='user_name'>Joined In</h3>
            <p className='user_name_ans'>{joinedin}</p>
          </div>
          {/* Orders */}
          <div>
            <h3 className='user_name'>Orders</h3>
            <p className='user_name_ans'>3 </p>
          </div>
          {/* SUS */}
          <div className='details_wrapper'>
            <h3 className='user_name'>Cart | <span><Link to="/cart">Checkout</Link></span></h3>
            <p className='user_name_ans'>      {cart.products.length}</p>
          </div>
          {/* Mobile Number */}
          <div className='details_wrapper'>
            <h3 className='user_name'>Mobile Number</h3>
            <p style={{ display: "flex", alignItems: 'center', columnGap: "1rem" }} className='user_name_ans'> {phone}   </p>
          </div>

        </div>
        <div className='user_action_container'>   <Link to="/user/edit" className='wishlistLink' style={{ display: "flex", alignItems: "center", width: "fit-content", columnGap: '0.3rem' }}>Edit Profile <FiEdit2 /></Link>
          <Link to="/password/forgot" className='wishlistLink' style={{ display: "flex", alignItems: "center", width: "fit-content", columnGap: '0.3rem' }}>Update Password </Link></div>
      </div></>
  )
}

export default ProfileOverView