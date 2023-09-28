import React from 'react'
import {Link} from "react-router-dom"
import "./Order.css"

const Order = () => {
  return (
    <div>


<div className='Order_msg_wrapper'>
    <p className='order_msg_txt'>You haven't Purchased anything yet.</p>
<Link to="/shop" className='wishlistLink'>Continue Shopping</Link>
</div>

    </div>
  )
}

export default Order