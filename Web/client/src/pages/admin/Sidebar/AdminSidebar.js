import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { ImSwitch } from "react-icons/im";
import { BsGraphUpArrow, BsFillBagFill } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";
import { AiFillFileAdd, AiOutlineArrowLeft } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { MdOutlinePendingActions } from "react-icons/md";
import './AdminSidebar.css';

const AdminSidebar = () => {
  const location = useLocation();

  // Extract the pathname from the location object
  const { pathname } = location;

  // Convert the pathname into a breadcrumb format
  // e.g., '/admin/products/all' -> ['admin', 'products', 'all']
  const pathParts = pathname.split('/').filter((part) => part !== '');

  return (
    <div className='Admin_wrapper'>
      <div className='Action-Sidebar'>
        <Link to='/' className='login-logo logo_admin'>
          <AiOutlineArrowLeft className='arrow' /> <img alt='company' src='./logo.svg' />
        </Link>
        <Link className='Switch_links' to='/admin'>
          <BsGraphUpArrow /> Overview
        </Link>
        <Link className='Switch_links' to='/admin/products'>
          <BsFillBagFill /> Products
        </Link>
        <Link className='Switch_links' to='/admin/products/add'>
          <AiFillFileAdd /> Add New Product
        </Link>
        <Link className='Switch_links' to='/admin/users'>
          <HiOutlineUsers /> All Users
        </Link>
        {/* Add other links here */}
        <Link className='Switch_links' to='/admin/orders'>
          <MdOutlinePendingActions /> Orders
        </Link>
        <Link className='Switch_links' to='/admin/messages'>
          <BiMessageSquareDetail /> Message
        </Link>
        <Link className='logout-btn' to='/admin/logout'>
          <ImSwitch /> Logout
        </Link>
      </div>

      <div className='admin-content'>
        <div className='admin-breadCrumb admin-breadcrumb'>
          {/* Render breadcrumb links */}
          {pathParts.map((part, index) => (
            <React.Fragment key={index}>
              <Link to={`/${pathParts.slice(0, index + 1).join('/')}`}>{part}</Link>
              {index < pathParts.length - 1 && <span className='breadcrumb-separator'> / </span>}
            </React.Fragment>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminSidebar;
