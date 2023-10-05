import { React, useState } from 'react'
import { Link } from "react-router-dom"
import { BiUpload, BiLogOutCircle, } from "react-icons/bi"
import { BsBox2, BsFillCartFill,BsFillMapFill} from "react-icons/bs"
import { BiSolidUser, BiSolidMessageSquareDetail } from "react-icons/bi"
import { TfiStatsUp } from "react-icons/tfi"
import { MdOutlineKeyboardArrowLeft } from "react-icons/md"
import { defaultUserImg } from '../../../helpers/GlobalVariables'
import { AiOutlineAppstoreAdd } from "react-icons/ai"
import { FaHandsHelping } from "react-icons/fa"
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
    const aside_link_flex = toggled ? "aside_link_flex_toggled" : "aside_link_flex"

    return (
        <aside className={divClassName}>
            <div onClick={SidebarTOGGLE} className='aside_user_toggle'><MdOutlineKeyboardArrowLeft className='aside_icon_toggle' /></div>
            {/* user Profile IMAGE */}
            <div className='aside_profiel_image_cover'> <img className={Aside_img} src={defaultUserImg} alt="profile_img" /> <BiUpload className='upload_icon_aside' />   </div>
            {/* IMAGE DIV ENDS HERE */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Overview</p>
                <Link to="/admin" className='aside_links'> <TfiStatsUp className={aside_icon_state} /> <span className={Asidespan}>Overview</span> </Link>
                <Link to="/admin/stats" className='aside_links'> <BsFillMapFill className={aside_icon_state} /> <span className={Asidespan}>Stats</span> </Link>
            </div>
            {/* ORDER */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Products</p>
                <Link to="/admin/products" className='aside_links'> <BsBox2 className={aside_icon_state} /> <span className={Asidespan}>All Products</span> </Link>
                <Link to="/admin/products/add" className='aside_links'> <AiOutlineAppstoreAdd className={aside_icon_state} /> <span className={Asidespan}>Add Product</span> </Link>
            </div>
            {/* uSers */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Orders</p>
                <Link to="/admin/orders" className='aside_links'> <BsFillCartFill className={aside_icon_state} /> <span className={Asidespan}>All Orders</span> </Link>

            </div>
            <div className={aside_link_flex}>
                <p className={Asideheading}>Users</p>
                <Link to="/admin/users" className='aside_links'> <BiSolidUser className={aside_icon_state} /> <span className={Asidespan}>All Users</span> </Link>
            </div>
            {/* WISHLISTS */}

            {/* vender OPTION REQUEST */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Messages</p>
                <Link to="/admin/messages" className='aside_links'> <BiSolidMessageSquareDetail className={aside_icon_state} /> <span className={Asidespan}>Messages</span> </Link>
                <Link to="/admin/messages/vendorrequest" className='aside_links'> <FaHandsHelping className={aside_icon_state} /> <span className={Asidespan}>Vendor Requests</span> </Link>
            </div>
            {/* ALL */}
            <div className={aside_link_flex}>
                <p className={Asideheading}>Actions</p>
                <Link to="/logout" className='aside_links'> <BiLogOutCircle className={aside_icon_state} /> <span className={Asidespan}>Logout</span> </Link>
            </div>


        </aside>
    )
}

export default AdminSidebar