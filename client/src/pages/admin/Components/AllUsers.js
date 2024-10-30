//library
import { useState, useEffect } from "react"
import axios from "axios"
//imports
import { ENDPOINT } from "../../../api/Endpoint"

//styles
import "./AllUsers.css"
//icons
import { PiUsersThree } from "react-icons/pi"
import { FaHandsHelping } from "react-icons/fa"
import { SlGraph } from "react-icons/sl"
import { RiRadioButtonLine } from "react-icons/ri"
import MoreVertIcon from '@mui/icons-material/MoreVert';
//ui
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const AllUsers = () => {
  const [usercount, Setusercount] = useState(0)//to count no of users
  const [allusers, Setallusers] = useState([]) //to held no of user being fetched./
  const [anchorEl, setAnchorEl] = useState(null); // To control menu open/close state
  // Handle menu open/close
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userCountResponse, usersResponse] = await Promise.all([
          axios.get(`${ENDPOINT}/admin/user-count`),
          axios.get(`${ENDPOINT}/admin/get-users`)
        ])
        await Setusercount(userCountResponse.data.data)
        await Setallusers(usersResponse.data.data)

      } catch (error) {
        console.log("Error While Fetching The data")
        throw (error)
      }
    }
    fetchData()

  }, [])

  return (
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>User Manegment,   </p>
      <p style={{ fontSize: "1.1rem", marginBottom: "0.4rem", color: "#131039", padding: "0.4rem", fontWeight: "500" }}>Users Overview,</p>
      <div className='row_user_data_cards'>
        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><PiUsersThree className='icon_user_maneg' /></span> {usercount}</p> <p>Total Registerd Users.</p>


        </div>



        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><SlGraph className='icon_user_maneg' /></span> 43m</p> <p>Vistors On Website.</p></div>
        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><FaHandsHelping className='icon_user_maneg' /></span> 43</p> <p>Total Vendor Requests.</p></div>
        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><RiRadioButtonLine className='icon_user_maneg' /></span> 43k</p> <p>Online Users.</p></div>
      </div>

      {/* Graphs Vistors World And New Users */}
      <div className=''> </div>
      <p style={{ fontSize: "1.1rem", marginBottom: "0.4rem", color: "#131039", padding: "0.4rem", fontWeight: "500" }}>All Users.</p>

      {/* div For all users... */}
      <div className='all_users_datagrid'>
      {
        allusers.map((user)=>(
          <div  className="user-Card">
          <div style={{ flexDirection: "row", display: "flex", alignItems: "center", justifyContent: "space-between" }} >
            <div>


              <Avatar src={user.avatar} />
              <p>{user.username}</p>
            </div>

            <div>
              <p style={{ marginBottom: "3px", fontWeight: "bold" }}>Details</p>
              <p style={{ marginBottom: "3px" }}>Email:{user.email}</p>
              <p style={{ marginBottom: "3px" }}>Phone:{user.phone}</p>
              <p></p>
            </div>
            <div>
              <p style={{ marginBottom: "3px", fontWeight: "bold" }}>Joined On</p>
              <p>{user.createdAt}</p>
            </div>

            <div>
              <p style={{ marginBottom: "3px", fontWeight: "bold" }}>Role</p>
              <p>{user.role}</p>
            </div>

            <div>
              <p style={{ marginBottom: "3px", fontWeight: "bold" }}>Actions</p>
              <MoreVertIcon onClick={handleMenuOpen} style={{ cursor: "pointer" }} />
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >

                <MenuItem onClick={handleMenuClose}>Delete User</MenuItem>
              </Menu>
            </div>
          </div>

        </div>
        ))
      }
      </div>
    </div>
  )
}

export default AllUsers