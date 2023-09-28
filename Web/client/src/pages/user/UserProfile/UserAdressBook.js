import React from 'react'
import {GrAdd} from "react-icons/gr"
import "./UserAdressBook.css"
import { Link } from 'react-router-dom'
const UserAdressBook = () => {
  return (
    <>
      <p className='wishlist_page_head'>Address Book</p>
      <div className='wislisht_empty_container'>
        <p>There is not any Shipping Address in Address Book.</p>
        <Link style={{display:"flex",alignItems:"center",columnGap:"5px"}} to="/shop" className="wishlistLink">
          Add New <GrAdd style={{color:"white"}}/>
        </Link>
      </div>
    </>
  )
}

export default UserAdressBook