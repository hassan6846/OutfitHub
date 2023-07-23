import React from 'react';
import { Switch, Link, Routes, Route } from 'react-router-dom';
import { ImSwitch } from "react-icons/im";
import { BsGraphUpArrow, BsFillBagFill } from "react-icons/bs"
import { BiMessageSquareDetail } from "react-icons/bi"
import { AiFillFileAdd,AiOutlineArrowLeft } from "react-icons/ai"
import { HiOutlineUsers } from "react-icons/hi"
import { MdOutlinePendingActions } from "react-icons/md"
// css
import './AdminSidebar.css';
import AllUsers from '../Components/AllUsers';
import AddProduct from '../Components/AddProduct';
import Overview from "../Components/Overview"
import Messages from "../Components/Messages"
import AllProducts from "../Components/AllProducts"
const AdminSidebar = () => {

  return (

    <div className='Admin_wrapper'>
      <div className='Action-Sidebar'>
        <Link to='/' className='login-logo logo_admin'>
          <AiOutlineArrowLeft className='arrow'/>  <img alt='company' src='./logo.svg' />
        </Link>
        <Link className='Switch_links' to='/admin'>
          <BsGraphUpArrow />  Overview
        </Link>
        <Link className='Switch_links' to='/admin/products'>
          <BsFillBagFill />     Products
        </Link>
        <Link className='Switch_links' to='/admin/products/all'>
          <AiFillFileAdd />  Add New Product
        </Link>
        <Link className='Switch_links' to='/admin/users'>
          <HiOutlineUsers />        All Users
        </Link>
        {/* Add other links here */}
        <Link className='Switch_links' to='/admin/orders'>
          <MdOutlinePendingActions />   Orders
        </Link>
        <Link className='Switch_links' to='/admin/messages'>
          <BiMessageSquareDetail />     Message
        </Link>
        <Link className='logout-btn' to='/admin/logout'>
          <ImSwitch /> Logout
        </Link>
      </div>
      <div className='admin-content'>
      </div>
    </div>

  );
};

export default AdminSidebar;
