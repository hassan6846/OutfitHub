import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Orders.css";
import axios from "axios";
import { ENDPOINT } from "../../../api/Endpoint";
import { useSelector } from "react-redux";
// UI components
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import { CiCreditCard1 } from "react-icons/ci";
import { LiaAddressBook } from "react-icons/lia";
import { FaMoneyBillWaveAlt, FaFilter } from "react-icons/fa";

const Orders = () => {
  const userid = useSelector((state) => state.user.userid);
  const [data, setData] = useState([]);
  const [isDelivered, setIsDelivered] = useState(false); // `null` means no chip is selected

  useEffect(() => {
    const FetchOrder = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/admin/orders?orderState=${isDelivered}`);
        const order = response.data.orders;
        console.log(order);
        setData(order);
      } catch (error) {
        console.log(error);
      }
    };
    FetchOrder();
  }, [userid,isDelivered]);
  const handleChipClick = (status) => {
    if (status === 'Delivered') {
      setIsDelivered(true);  // "Delivered" selected
    } else {
      setIsDelivered(false); // "Active-Non delivered" selected
    }
  };
  return (
    <div>
      <p className="wishlist_page_head">Your Orders</p>
      {data.length === 0 ? (
        <div className="Order_msg_wrapper">
          <p className="order_msg_txt">No one has Ordered anything yet.</p>
          <Link to="/shop" className="wishlistLink">Visit Home</Link>
        </div>
      ) : (
        data.map((order) => (
          <>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding: "5px", marginBottom: "20px" }}>
              <div>
                <p style={{ marginBottom: "0px", fontSize: "18px" }}> <FaFilter />Sort Orders By</p>
              </div>

              <div style={{ flexDirection: "row", columnGap: '10px' }}>
                <Chip
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                  label="Delivered"
                  color={isDelivered === true ? 'primary' : 'default'} // Apply primary color when selected
                  onClick={() => handleChipClick('Delivered')}
                  selected={isDelivered === true}
                />

                <Chip
                  style={{ marginLeft: "5px", cursor: "pointer" }}
                  label="Active-Non delivered"
                  color={isDelivered === false ? 'primary' : 'default'} // Apply primary color when selected
                  onClick={() => handleChipClick('Active-Non delivered')}
                  selected={isDelivered === false}
                />
              </div>
            </div>
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
                      style={{ height: "150px", width: "150px", objectFit: "cover", borderRadius: "5px" }} />

                    <div style={{ flexDirection: "column", display: 'flex', justifyContent: "center", alignItems: "flex-start", marginLeft: "20px" }}>
                      <p style={{ marginBottom: "10px" }}>{product.name}</p>
                      <p style={{ marginBottom: "10px" }}>{product.description}</p>
                    </div>
                  </div>

                  <div style={{ flexDirection: "column", display: 'flex', justifyContent: "center", alignItems: "flex-start", marginLeft: "20px" }}>
                    <p style={{ marginBottom: "10px" }}>{product.SalePrice * product.quantity} Rs</p>
                    <p style={{ marginBottom: "10px" }}>Qty: {product.quantity}</p>
                  </div>
                </div>
              ))}
              <Divider />
              <div style={{ marginTop: "20px" }}>
                <p style={{ marginBottom: "10px", fontSize: "13px" }}><CiCreditCard1 />    Payment Method : {order.PaymentMethod}</p>
                <p style={{ marginBottom: "10px", fontSize: "13px" }}><LiaAddressBook /> Delivery Address : {order.shippingInfo.address} ,{order.shippingInfo.city},{order.shippingInfo.country}</p>
                <p style={{ marginBottom: "10px", fontSize: "16px" }}><FaMoneyBillWaveAlt />
                  Total Amount : {order.TotalAmount} Rs</p>

              </div>
            </div></>
        ))
      )}
    </div>
  );
};

export default Orders;
