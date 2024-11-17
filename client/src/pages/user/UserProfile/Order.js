import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import axios from "axios";
import { ENDPOINT } from "../../../api/Endpoint";
import { useSelector } from "react-redux";

const Order = () => {
  const userid = useSelector((state) => state.user.userid);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const FetchOrder = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/order/user/${userid}`);
        const order = response.data.orders;
        console.log(order);
        setdata(order);
      } catch (error) {
        console.log(error);
      }
    };
    FetchOrder();
  }, [userid]);

  return (
    <div>
      <p className="wishlist_page_head">Your Orders</p>
      {data.length === 0 ? (
        <div className="Order_msg_wrapper">
          <p className="order_msg_txt">You haven't purchased anything yet.</p>
          <Link to="/shop" className="wishlistLink">Continue Shopping</Link>
        </div>
      ) : (
        <div>

        </div>
      )}
    </div>
  );
};

export default Order;
