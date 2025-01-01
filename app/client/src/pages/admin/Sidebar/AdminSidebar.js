import { React, useState } from 'react'
import { NavLink } from "react-router-dom"
import axios from "axios"
import {ENDPOINT} from "../../../api/Endpoint"
import {persistor} from "../../../store/Store"
import {toast} from "react-hot-toast"
import { BiUpload, BiLogOutCircle, } from "react-icons/bi"
import { BsBox2, BsFillCartFill} from "react-icons/bs"
import { BiSolidUser, BiSolidMessageSquareDetail } from "react-icons/bi"
import { GoGraph } from "react-icons/go";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md"

import { AiOutlineAppstoreAdd } from "react-icons/ai"

// css
import "./AdminSidebar.css"
import { useSelector } from 'react-redux'


const AdminSidebar = () => {
    const avatar = useSelector((state) => state.user.avatar);
    const [toggled, setToggled] = useState(false)
    function SidebarTOGGLE() {
        setToggled(!toggled)
    }

    // classes
    const divClassName = toggled ? "user_profile_aside_toggle" : "user_profile_aside"
    const Asideheading = toggled ? "aside_heading_sidebar_toggled" : "aside_heading_sidebar"
    const Asidespan = toggled ? "icon_text_aside_toggled" : "icon_text_aside"
    const Aside_img = toggled ? "aside_user_profile_img_toggle" : "aside_user_profile_img"
    const aside_icon_state = toggled ? "aside_icon_state_toggled" : "aside_icon_state"
    const aside_link_flex = toggled ? "aside_link_flex_toggled" : "aside_link_flex"
//LOGOUT
const HandleLogout = async () => {
    try {
      const response = await axios.post(`${ENDPOINT}/logout`, {

      }, {
        withCredentials: true
      })


      await persistor.purge();
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/';
  
      toast.success(response.data.message)
      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }
    return (
        <aside className={divClassName}>
            <div onClick={SidebarTOGGLE} className='aside_user_toggle'><MdOutlineKeyboardArrowLeft className='aside_icon_toggle' /></div>
            {/* user Profile IMAGE */}
            <div className='aside_profiel_image_cover'> <img className={Aside_img} src={avatar} alt="profile_img" /> <BiUpload className='upload_icon_aside' />   </div>
            {/* IMAGE DIV ENDS HERE */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Stats Overview</p>
                <NavLink activeClassName='aside_link_active' to="/admin"  className={({ isActive }) => (isActive ? 'aside_links' : '')}
                > <GoGraph className={aside_icon_state} /> <span className={Asidespan}>Stats</span> </NavLink>

            </div>
            {/* ORDER */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Products</p>
                <NavLink to="/admin/products" className='aside_links'> <BsBox2 className={aside_icon_state} /> <span className={Asidespan}>All Products</span> </NavLink>
                <NavLink to="/admin/products/add" className='aside_links'> <AiOutlineAppstoreAdd className={aside_icon_state} /> <span className={Asidespan}>Add Product</span> </NavLink>
            </div>
            {/* uSers */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Orders</p>
                <NavLink to="/admin/orders" className='aside_links'> <BsFillCartFill className={aside_icon_state} /> <span className={Asidespan}>All Orders</span> </NavLink>

            </div>
            <div className={aside_link_flex}>
                <p className={Asideheading}>Users</p>
                <NavLink to="/admin/users" className='aside_links'> <BiSolidUser className={aside_icon_state} /> <span className={Asidespan}>All Users /Stats</span> </NavLink>
            </div>
            {/* WISHLISTS */}

            {/* vender OPTION REQUEST */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Messages</p>
                <NavLink to="/admin/messages" className='aside_links'> <BiSolidMessageSquareDetail className={aside_icon_state} /> <span className={Asidespan}>Messages</span> </NavLink>
            </div>
            {/* ALL */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Actions</p>
                <NavLink to="/admin/logout" onClick={()=>HandleLogout()} className='aside_links'> <BiLogOutCircle className={aside_icon_state} /> <span className={Asidespan}>Logout</span> </NavLink>
            </div>


        </aside>
    )
}

export default AdminSidebar