import React from 'react'
import "./UserAdressBook.css"
import { MDBTypography } from "mdb-react-ui-kit"
import { CiEdit } from "react-icons/ci";

import { Link } from 'react-router-dom'
const UserAdressBook = () => {
  return (
    <>
      <p className='wishlist_page_head'>Address Book</p>
      {/* <div className='wislisht_empty_container'>
        <p>There is not any Shipping Address in Address Book.</p>
        <Link to="/user/address/new" style={{display:"flex",alignItems:"center",columnGap:"5px"}} className="wishlistLink">
          Add New <GrAdd style={{color:"white"}}/>
        </Link>
      </div> */}
      <div style={{ padding: "20px", border: '2px solid #f4f4f7', borderRadius: "5px",position:"relative" }}>
        <MDBTypography tag='h5' >My GrandFather House</MDBTypography>
        <p>Address:135-c Ucp Lahore</p>
        <p>City:Lahore</p>
        <p>Phone:+9233323319</p>
        <CiEdit   style={{position:"absolute",top:10,right:20,cursor:"pointer"}}  size={30} />

      </div>
    </>
  )
}

export default UserAdressBook