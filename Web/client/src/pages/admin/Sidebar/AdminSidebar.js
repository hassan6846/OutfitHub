import { React, useState } from 'react'
import { Link } from "react-router-dom"
import {  BiUpload, BiLogOutCircle,} from "react-icons/bi"
import {BsBox2} from "react-icons/bs"
import {TfiStatsUp} from "react-icons/tfi"
import {  MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { defaultUserImg } from '../../../helpers/GlobalVariables'
import {AiOutlineAppstoreAdd} from "react-icons/ai"
// css
import "./AdminSidebar.css"

const AdminSidebar = () => {
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
                <p className={Asideheading}>Overview</p>
                <Link to="/admin" className='aside_links'> <TfiStatsUp className={aside_icon_state} /> <span className={Asidespan}>Overview</span> </Link>
            </div>
            {/* ORDER */}
            <div className='aside_link_flex'>
                <p className={Asideheading}>Products</p>
                <Link to="/admin/products/all" className='aside_links'> <BsBox2 className={aside_icon_state} /> <span className={Asidespan}>All Products</span> </Link>
                <Link to="/admin/products/add" className='aside_links'> <AiOutlineAppstoreAdd className={aside_icon_state} /> <span className={Asidespan}>Add Product</span> </Link>
            </div>
            {/* WISHLISTS */}
            {/* SETTINGS */}
            {/* vender OPTION REQUEST */}
            {/* Contact US */}
            <div className='aside_link_flex'>
             <p className={Asideheading}>Actions</p>
             <Link to="/logout" className='aside_links'> <BiLogOutCircle className={aside_icon_state} /> <span className={Asidespan}>Logout</span> </Link>
            </div>


        </aside>
    )
}

export default AdminSidebar