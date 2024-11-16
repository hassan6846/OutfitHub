import { React, useState } from 'react'
import { NavLink } from "react-router-dom"
import { BiUser, BiMapAlt, BiUpload, BiLogOutCircle } from "react-icons/bi"

import { MdOutlinePendingActions, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { TbHeartPlus } from "react-icons/tb"
import axios from "axios"
import { toast } from "react-hot-toast"
import { LuContact } from "react-icons/lu"
import { ENDPOINT } from "../../../../api/Endpoint"
import { defaultUserImg } from '../../../../helpers/GlobalVariables'

// // cssf

import { persistor } from '../../../../store/Store'
import "./UserOutlet.css"


const UserOutler = () => {


    
    const [toggled, setToggled] = useState(true)
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
            <div className='aside_profiel_image_cover'> <img className={Aside_img} src={defaultUserImg} alt="profile_img" /> <BiUpload className='upload_icon_aside' />   </div>
            {/* IMAGE DIV ENDS HERE */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Manage My Account</p>
                <NavLink to="/user" className='aside_links'> <BiUser className={aside_icon_state} /> <span className={Asidespan}>My Profile</span> </NavLink>
                <NavLink to="/user/address" className='aside_links'><BiMapAlt className={aside_icon_state} /><span className={Asidespan}>Address Book</span></NavLink>
            </div>
            {/* ORDER */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Orders</p>
                <NavLink className='aside_links' to="/user/order"> <MdOutlinePendingActions className={aside_icon_state} /><span className={Asidespan}> My Orders</span></NavLink>


            </div>
            {/* WISHLISTS */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>My Likes</p>
                <NavLink to="/user/wishlists" className='aside_links'> <TbHeartPlus className={aside_icon_state} /><span className={Asidespan}>Liked Items</span></NavLink>

            </div>

            {/* SETTINGS */}


            {/* Contact US */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Need Help!</p>
                <NavLink to="/user/contact" className='aside_links'> <LuContact className={aside_icon_state} /> <span className={Asidespan}>Contact Us </span></NavLink>
            </div>

            <div className={aside_link_flex}>
                <p className={Asideheading}>Actions</p>
                <NavLink onClick={() => HandleLogout()} className='aside_links'> <BiLogOutCircle className={aside_icon_state} /> <span className={Asidespan}>Logout</span> </NavLink>
            </div>


        </aside>
    )
}

export default UserOutler