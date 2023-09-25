import React from 'react'
import { Link } from "react-router-dom"
import { BiUser, BiMapAlt, BiUpload, BiLogOutCircle } from "react-icons/bi"
import { GiCancel } from "react-icons/gi"
import { MdOutlinePendingActions, MdKeyboardReturn, MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { TbHeartPlus } from "react-icons/tb"
import { AiOutlineIdcard,AiOutlineMessage } from "react-icons/ai"
import { BsPersonHearts } from "react-icons/bs"
import { FiSettings } from "react-icons/fi"
import { GiGrowth } from "react-icons/gi"
import { defaultUserImg } from '../../../../helpers/GlobalVariables'
// css
import "./UserOutlet.css"
// use animation TOGGLE
const UserOutler = () => {
    return (

        <aside className='user_profile_aside'>
            <div className='aside_user_toggle'><MdOutlineKeyboardArrowLeft className='aside_icon_toggle' /></div>
            {/* user Profile IMAGE */}
            <div className='aside_profiel_image_cover'> <img className='aside_user_profile_img' src={defaultUserImg} alt="profile_img" /> <BiUpload className='upload_icon_aside' />   </div>
            {/* IMAGE DIV ENDS HERE */}
            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>Manage My Account</p>
                <Link to="/user" className='aside_links'> <BiUser /> My Profile</Link>
                <Link to="/user/messages" className='aside_links'><AiOutlineMessage />Messages</Link>
                <Link to="/user/address" className='aside_links'><BiMapAlt />Address Book</Link>
            </div>
            {/* ORDER */}
            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>Orders</p>
                <Link className='aside_links'> <MdOutlinePendingActions />Pending Orders</Link>
                <Link className='aside_links'> <MdKeyboardReturn />  Returns</Link>
                <Link className='aside_links'><GiCancel />Canceled Orders</Link>
            </div>
            {/* WISHLISTS */}
            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>My Wishlists</p>
                <Link  to="/user/wishlists" className='aside_links'> <TbHeartPlus />Wishlists</Link>
                <Link to="/user/liked" className='aside_links'> <BsPersonHearts />Liked Items</Link>
            </div>
            {/* payment BOOK */}
            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>Payment Methods</p>
                <Link className='aside_links'> <AiOutlineIdcard />Set Up payment Method</Link>
            </div>
            {/* SETTINGS */}
            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>My Settings</p>
                <Link className='aside_links'> <FiSettings /> Settings</Link>
            </div>
            {/* vender OPTION REQUEST */}
            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>Sell On Design</p>
                <Link to="/user/vendor" className='aside_links'> <GiGrowth /> Become A Vendor </Link>
            </div>
            {/* Contact US */}
            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>Need Help!</p>
                <Link to="/user/contact" className='aside_links'> <BiLogOutCircle /> Contact Us </Link>
            </div>

            <div className='aside_link_flex'>
                <p className='aside_heading_sidebar'>Actions</p>
                <Link to="/logout" className='aside_links'> <BiLogOutCircle /> Logout </Link>
            </div>


        </aside>
    )
}

export default UserOutler