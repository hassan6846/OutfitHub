import React, { useEffect } from "react";
import "./Wishlists.css";
import { Link } from "react-router-dom";
//state.
import { useSelector } from "react-redux";

export default function Wishlists() {
  const likedItems=useSelector((state)=>state.like.products)
    useEffect(()=>{
      console.log(likedItems)
    })
  return (
    <>
      <p className="wishlist_page_head">Liked Items</p>
 
      {/* else iF NO WISLISTS */}
      <div className="wislisht_empty_container">
        <p>Your Wishlist is Empty</p>
        <Link to="/shop" className="wishlistLink">
          Continue Shopping
        </Link>
      </div>
    </>
  );
}
