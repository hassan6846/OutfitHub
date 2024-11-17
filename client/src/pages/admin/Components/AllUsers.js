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
  const [uploads, setuploads] = useState(0)
  const [productcount, setproductcount] = useState(0)
  const [storageusage, setstorageusage] = useState(0)
  // Handle menu open/close
  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  //loading
  const [loading, isloading] = useState(true)
  //useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userCountResponse, usersResponse, uploadResponse, productResponse, storageusageResponse] = await Promise.all([
          axios.get(`${ENDPOINT}/admin/user-count`, { withCredentials: true }),
          axios.get(`${ENDPOINT}/admin/get-users`, { withCredentials: true }),
          axios.get(`${ENDPOINT}/admin/cloudinary/total-uploads`, { withCredentials: true }),
          axios.get(`${ENDPOINT}/admin/product-count`, { withCredentials: true }),
          axios.get(`${ENDPOINT}/admin/cloduinary/usage`, { withCredentials: true })
        ])
        await Setusercount(userCountResponse.data.data)
        await Setallusers(usersResponse.data.data)
        await setuploads(uploadResponse.data.totalUploads)
        await setproductcount(productResponse.data.data)
        await setstorageusage(storageusageResponse.data.final)
        isloading(false)
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
      <p style={{ fontSize: "1.1rem", marginBottom: "0.4rem", color: "#131039", padding: "0.4rem", fontWeight: "500" }}>Users Overview,/stats</p>



      <div className='row_user_data_cards'>
        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><PiUsersThree size={70} className='icon_user_maneg' /></span> {usercount}</p> <p>Total Registerd Users.</p>


        </div>



        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><SlGraph size={70} className='icon_user_maneg' /></span> {uploads}</p> <p>Total Image Asset Hosted.</p></div>
        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><FaHandsHelping size={70} className='icon_user_maneg' /></span> {productcount}</p> <p>Total Product Uploaded</p></div>
        <div className='user_manegment_card'> <p className='usersCount'>  <span className='icons_flex_user_maneg'><RiRadioButtonLine size={70} className='icon_user_maneg' /></span> {Math.floor(storageusage)} mb</p> <p>Total Cloud Storage used</p></div>
      </div>

      {/* Graphs Vistors World And New Users */}
      <div className=''> </div>
      <p style={{ fontSize: "1.1rem", marginBottom: "0.4rem", color: "#131039", padding: "0.4rem", fontWeight: "500" }}>All Users.</p>

      {/* div For all users... */}
      <div className='all_users_datagrid'>
        {
          allusers.map((user) => (
            <div className="user-Card">
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