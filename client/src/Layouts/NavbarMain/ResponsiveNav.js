// eslint-disable-next-line
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseAnimation from "react-useanimations";

import axios from "axios";
// icons
import { FiSearch } from "react-icons/fi";
import { BsFillCartFill, BsChevronDown, BsGraphUp } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineMessage, AiOutlineUserAdd, } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import menu3 from "react-useanimations/lib/menu3";
import { LuSearch } from "react-icons/lu";
import { CompanyLogo, ALT } from "../../helpers/GlobalVariables";
import "./ResponsiveNav.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slug from "../../helpers/Slugify";
import Alertbar from "../../components/Alert/Alert";
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux"
import { ENDPOINT } from "../../api/Endpoint";
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"






const ResponsiveNav = () => {
  const navigate=useNavigate()
  const avatar = useSelector((state) => state.user.avatar);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated)
  const cart = useSelector((state) => state.cart);
  const [showResults, SetshowResults] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [isActive, setIsActive] = useState(true);
  const [startSearch, SetstartSearch] = useState(false)
  const [isHovered, setIsHovered] = useState(20);
  const [product, setproduct] = useState([])

  const handleInputClick = () => {
    SetstartSearch(true)

  }
  //Hide On Blur
  const handleBlur = () => {

    SetstartSearch(false)
  }

  //prevent Submition.
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  //handle Navbar Class Toggle.
  const handleClick = () => {
    setIsActive(!isActive);
  };
  // navbar state toggle Clase Open And Close.
  const toggleClass = isActive
    ? "Toggle_menu_sidebar_navbar"
    : "Toggle_menu_sidebar_navbar_clicked";

  // Handle Change to Set UseState.
  const HandleChange = (e) => {
    console.log("SearchValue" + searchValue)
    setSearchValue(e.target.value)
    SetstartSearch(false)
    SetshowResults(true)

  }

  const handleClickAway = () => {
    SetshowResults(false);
  };
  //Spinner.
  const HandleCardClick = () => {
    SetshowResults(false)
  }
  useEffect(() => {

    // main
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/products/${searchValue}`);
        setproduct(response.data.products)
        console.log(product)
      } catch (error) {
        console.log(error);
      }
    }
    if (searchValue !== "") {

      fetchProduct()
    }
// eslint-disable-next-line
  }, [searchValue])

  //////////////////

  const  HandleLogout=async()=>{
    try {
      const response=await axios.post(`${ENDPOINT}/logout`,{
      
      },{
        withCredentials:true
      })
      toast.success(response.data.message)

        navigate('/login')

      console.log(response)
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
    <>
      <Alertbar />
      <div>
        <div className={toggleClass}> <div className="mobile_sidebar" style={{ width: "100%", height: "100%", backgroundColor: "#eee", display: "flex", flexDirection: "column" }} >
          <div className="Links_container">
            <Link>Hello</Link>
            <Link>Hello</Link>

            <Link>Hello</Link>
            <Link>Hello</Link>

            <Link>Hello</Link>
            <Link>Hello</Link>
          </div>
        </div></div>
        <div className="mobile_nav_link">
          <div>
            {" "}
            <Link
              to="/"
              style={{
                backgroundColor: "#eee",
                boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                padding: "6px",
                borderRadius: "5px",
              }}
            >
              <img src={CompanyLogo} alt={ALT} />
            </Link>
          </div>
          <div className="mobile_links_divs">
            <div
              onClick={handleClick}
              style={{ cursor: "pointer" }}
              className="hamburger_menu"
            >
              <UseAnimation size={35} animation={menu3} />
            </div>
            <Link to="/cart">
              <span style={{ position: "relative" }}>
                <BsFillCartFill className="cart-icon" />
                <span className="cart_length" style={{ position: "absolute" }}>
                  {cart.products.length}
                </span>
              </span>
            </Link>
          </div>
        </div>
        <nav className="navbar_container">
          <Link
            className="nav_link_company"
            to="/"
            style={{
              backgroundColor: "#eee",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
              padding: "6px",
              borderRadius: "5px",
            }}
          >
            <img src={CompanyLogo} alt={ALT} />
          </Link>
          <form
            style={{ position: "relative" }}
            onSubmit={handleSubmit}
            className="Searchfield_form_nav"
          >
            <TextField


              style={{ width: "100%", borderRadius: "50px" }}
              className="desktop_nav_input"

              onClick={handleInputClick}
              spellCheck="false"
              onBlur={handleBlur}
              onChange={HandleChange}

              value={searchValue}
              placeholder="Search Anything"
            />
            <button style={{ borderRadius: "50px" }} onMouseEnter={() => setIsHovered(35)}
              onMouseLeave={() => setIsHovered(20)} className="navbar_input_btn">
              <FiSearch size={isHovered} color="#fff" style={{ fontSize: "16px" }} />
            </button>
            {/* maps results below HASSAn */}
            {showResults && (
              <ClickAwayListener onClickAway={handleClickAway}>
                <div
                  style={{ position: "absolute", transition: "all" }}
                  className="search-results_dropdown"

                >
                  {/* Conditonal */}
                  {startSearch ? (
                    <p style={{ margin: 0, display: "flex", alignItems: "center", fontSize: "16px", columnGap: "0.2rem", padding: "0.5rem", color: "#848484" }} ><LuSearch size={20} /> Start Searching</p>
                  ) : (
                    null
                  )}


                  {/* search Results Will mapped here */}
                  <div style={{ padding: "0.5rem", cursor: 'pointer' }}>
                    {product.map((item, index) => (


                      <Link onClick={HandleCardClick}
                        key={index}

                        to={{
                          pathname: `/shop/${Slug(item.name)}`,

                        }}
                        state={item}
                        className='dropdown_card_nav'>
                        {/* Title & Price */}

                        <div style={{ display: "flex", alignItems: "center" }}>
                          <LazyLoadImage
                            effect='blur'
                            wrapperClassName="Dropdown_image"
                            alt={`slider ${index}`}
                            className="dropdown_image_results"
                            src={item.image[0]}
                          />
                          <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.4rem" }}>
                            <p className="dropdown_text_nav" style={{ marginBottom: "0" }}>{item.name}</p>
                            <p className="dropdown_text_nav" style={{ marginBottom: "0", color: "#848484", fontSize: "14px", fontWeight: 'bold' }}>${item.SalePrice}</p>
                          </div>


                        </div>
                        {/*MAIN Category and pricing  */}

                        {/*END*/}
                      </Link>
                    ))}</div>
                  <button className="stickey_btn_nav" style={{ width: "100%", color: "#131039", backgroundColor: "#4BB497", outline: "none", border: "none", padding: "0.5rem", borderRadius: "5px" }}>See All Result <BsGraphUp style={{ marginLeft: "0.2rem" }} size={14} /></button>
                </div>
              </ClickAwayListener>
            )}

          </form>
          {/* Actions Nav If user is logged in or not 
      also not made by chatgpt it is me ok
      */}
          <div className="buttons_Nav_profile">
            <Link to="/cart">
              <span style={{ position: "relative" }}>
                <BsFillCartFill className="cart-icon" />
                <span className="cart_length" style={{ position: "absolute" }}>
                  {cart.products.length}
                </span>
              </span>
            </Link>

            {/* use terinary operators instead */}
            <div className="profile_Dropdown_nav">
              <Link  className="User_profile_dropdown">
                {" "}
                <img
                  className="nav_img"
                  height="40px"
                  alt="alt"
                  src={avatar}
                />{" "}
                <BsChevronDown className="profile_icon_dropdown" />
                <div className="dropdown_results_nav">


                  {/* Show login/signup link if user is not authenticated */}
                  {!isAuthenticated && (
                    <Link to="/signup" className="dropdown_items_nav">
                      <AiOutlineUserAdd />
                      LOGIN/SIGNUP
                    </Link>
                  )}

                  {/* Show profile, cart, and other links if user is authenticated */}
                  {isAuthenticated && (
                    <div >
                      <Link to="/user" className="dropdown_items_nav">
                        <FaUserCircle />
                        Your Profile
                      </Link>
                      <Link to="/cart" className="dropdown_items_nav">
                        <AiOutlineShoppingCart /> Cart
                      </Link>
                      <Link to="/user/wishlists" className="dropdown_items_nav">
                        <AiOutlineHeart /> Wishlists
                      </Link>
                      <Link to="/user/messages" className="dropdown_items_nav">
                        <AiOutlineMessage />
                        Messages
                      </Link>
                      <Link onClick={() => HandleLogout()} className="dropdown_items_nav">
                        <TbLogout2 />
                        LOGOUT
                      </Link>
                    </div>
                  )}

                  <Link to="/faqs" className="dropdown_items_nav">
                    <FaQuestion />
                    FAQ'S
                  </Link>

                </div>
              </Link>
            </div>
            {/* resposive toggle nav */}
            <div className="hamburger_menu">
              <RiMenu3Line />
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default ResponsiveNav;
