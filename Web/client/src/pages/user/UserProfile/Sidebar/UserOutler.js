import { React, useState } from 'react'
import { Link } from "react-router-dom"
import { BiUser, BiMapAlt, BiUpload, BiLogOutCircle } from "react-icons/bi"

import { MdOutlinePendingActions, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { TbHeartPlus } from "react-icons/tb"


import { LuContact } from "react-icons/lu"
import { GiGrowth } from "react-icons/gi"
import { defaultUserImg } from '../../../../helpers/GlobalVariables'
// css
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

    return (
        <aside className={divClassName}>
            <div onClick={SidebarTOGGLE} className='aside_user_toggle'><MdOutlineKeyboardArrowLeft className='aside_icon_toggle' /></div>
            {/* user Profile IMAGE */}
            <div className='aside_profiel_image_cover'> <img className={Aside_img} src={defaultUserImg} alt="profile_img" /> <BiUpload className='upload_icon_aside' />   </div>
            {/* IMAGE DIV ENDS HERE */}
            <div className='aside_link_flex'>
                <p className={Asideheading}>Manage My Account</p>
                <Link to="/user" className='aside_links'> <BiUser className={aside_icon_state} /> <span className={Asidespan}>My Profile</span> </Link>
                <Link to="/user/address" className='aside_links'><BiMapAlt className={aside_icon_state} /><span className={Asidespan}>Address Book</span></Link>
            </div>
            {/* ORDER */}
            <div className='aside_link_flex'>
                <p className={Asideheading}>Orders</p>
                <Link className='aside_links' to="/user/order"> <MdOutlinePendingActions className={aside_icon_state} /><span className={Asidespan}> My Orders</span></Link>


            </div>
            {/* WISHLISTS */}
            <div className='aside_link_flex'>
                <p className={Asideheading}>My Wishlists</p>
                <Link to="/user/wishlists" className='aside_links'> <TbHeartPlus className={aside_icon_state} /><span className={Asidespan}>Wishlists</span></Link>

            </div>

            {/* SETTINGS */}

            {/* vender OPTION REQUEST */}
            <div className='aside_link_flex'>
                <p className={Asideheading}>Sell On Design</p>
                <Link to="/user/vendor" className='aside_links'> <GiGrowth className={aside_icon_state} /> <span className={Asidespan}>Become A Vendor</span> </Link>
            </div>
            {/* Contact US */}
            <div className='aside_link_flex'>
                <p className={Asideheading}>Need Help!</p>
                <Link to="/user/contact" className='aside_links'> <LuContact className={aside_icon_state} /> <span className={Asidespan}>Contact Us </span></Link>
            </div>

            <div className='aside_link_flex'>
                <p className={Asideheading}>Actions</p>
                <Link to="/logout" className='aside_links'> <BiLogOutCircle className={aside_icon_state} /> <span className={Asidespan}>Logout</span> </Link>
            </div>


        </aside>
    )
}

export default UserOutler