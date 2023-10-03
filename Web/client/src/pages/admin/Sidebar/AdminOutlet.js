import React from 'react'
// components
import Footer from "../../../Layouts/footer/Footer"
import Navbar from "../../../Layouts/NavbarMain/ResponsiveNav"
// css
import "./AdminOutlet.css"
import AdminSidebar from "./AdminSidebar"
import { Outlet } from 'react-router-dom'

const AdminOutlet = () => {
  return (
    <>
      <Navbar />
      {/* Here is the main */}
      <div className='sidebar_div_parent'>
        <AdminSidebar />
        <div className='scrollable_container'>
          <Outlet />
        </div>
      </div>
      {/* HERE IS JABBA THE HUTT */}
      <Footer />
    </>
  )
}

export default AdminOutlet