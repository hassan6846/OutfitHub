import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Order.css";
import axios from "axios";
import { ENDPOINT } from "../../../api/Endpoint";
import { useSelector } from "react-redux";
// UI components
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { CiCreditCard1 } from "react-icons/ci";
import { LiaAddressBook } from "react-icons/lia";
import { FaMoneyBillWaveAlt } from "react-icons/fa";

const Order = () => {
  const userid = useSelector((state) => state.user.userid);
  const [data, setData] = useState([]);

  useEffect(() => {
    const FetchOrder = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/order/user/${userid}`,{
          withCredentials:true
        });
        const order = response.data.orders;
        console.log(order);
        setData(order);
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
        data.map((order) => (
          <div key={order.OrderId} className="OrderCard">
            <div style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ flexDirection: "row", display: "flex", alignItems: "center", columnGap: 10 }}>
                <Chip style={{ backgroundColor: "#4BB497" }} label="#Order Id" />
                <p style={{ marginBottom: 0, fontSize: "13px" }}> #{order.OrderId}</p>
              </div>

              <Chip style={{ cursor: "pointer" }} label={order.orderStatus} />
            </div>

            <p>Order Date: {new Date(order.orderedAt).toLocaleDateString('en-US')}</p>

            <Divider />
            {order.products.map((product, index) => (
              <div key={index} style={{ marginTop: "5px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <div style={{ flexDirection: "row", display: 'flex' }}>
                  <img
                    src={product.image[0]} 
                    alt={product.name} 
                    style={{ height: "150px", width: "150px", objectFit: "cover", borderRadius: "5px" }}
                  />

                  <div style={{ flexDirection: "column", display: 'flex', justifyContent: "center", alignItems: "flex-start", marginLeft: "20px" }}>
                    <p style={{ marginBottom: "10px" }}>{product.name}</p>
                    <p style={{ marginBottom: "10px" }}>{product.description}</p>
                  </div>
                </div>

                <div style={{ flexDirection: "column", display: 'flex', justifyContent: "center", alignItems: "flex-start", marginLeft: "20px" }}>
                  <p style={{ marginBottom: "10px" }}>{product.SalePrice*product.quantity} Rs</p>
                  <p style={{ marginBottom: "10px" }}>Qty: {product.quantity}</p>
                </div>
              </div>
            ))}
            <Divider />
            <div style={{marginTop:"20px"}}>
            <p style={{ marginBottom: "10px",fontSize:"13px" }}><CiCreditCard1 />    Payment Method : {order.PaymentMethod}</p>
            <p style={{ marginBottom: "10px" ,fontSize:"13px"}}><LiaAddressBook /> Delivery Address : {order.shippingInfo.address} ,{order.shippingInfo.city},{order.shippingInfo.country}</p>
            <p style={{ marginBottom: "10px",fontSize:"16px" }}><FaMoneyBillWaveAlt />
            Total Amount : {order.TotalAmount} Rs</p>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Order;
