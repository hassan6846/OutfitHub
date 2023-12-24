//modules and library.
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UseAnimation from "react-useanimations";
import { useSignOut } from "react-auth-kit"
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
// Constants
import { CompanyLogo, defaultUserImg, ALT } from "../../helpers/GlobalVariables";
// CSS imported
import "./ResponsiveNav.css";
//
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import Slug from "../../helpers/Slugify";
import { useQuery } from "@tanstack/react-query";
//spinner
import Alertbar from "../../components/Alert/Alert";
// Main NavComponent.
//clickAway
import { ClickAwayListener } from "@mui/base/ClickAwayListener";
import TextField from "@mui/material/TextField";
const ResponsiveNav = () => {
  const signOut = useSignOut()
  const [showResults, SetshowResults] = useState(false);
  const [searchValue, setSearchValue] = useState("")
  const [isActive, setIsActive] = useState(true);
  const [searchResults, SetsearchResults] = useState([])
  // message for start searching
  const [startSearch, SetstartSearch] = useState(false)
  //Handle Click input (show)
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


  ///useEffect api Fetch
  useEffect(() => {

    const fetchData = async () => {

      try {
        const response = await axios.get(`https://dummyjson.com/products/search?q=${searchValue}`);
        const data = response.data;
        console.log(data);
        SetsearchResults(data.products)


      } catch (error) {
        console.log(error);
      }
    };
    // main

    if (searchValue !== "") {
      fetchData()
    }
  }, [searchValue])

  //////////////////
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
                  1
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
              style={{ width: "100%",}}
              className="desktop_nav_input"
              fullWidth
              onClick={handleInputClick}
              spellCheck="false"
              onBlur={handleBlur}
              onChange={HandleChange}
              value={searchValue}
              placeholder="Search Anything"
            />
            <button className="navbar_input_btn">
              <FiSearch style={{ fontSize: "20px" }} />
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
                  <div style={{ padding: "0.5rem", cursor: 'pointer' }}>{searchResults.map((item, index) => (


                    <Link onClick={HandleCardClick} key={index} to={`/shop/${Slug(item.title)}`} className='dropdown_card_nav'>
                      {/* Title & Price */}

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <LazyLoadImage
                          effect='blur'
                          wrapperClassName="Dropdown_image"
                          alt={`slider ${index}`}
                          className="dropdown_image_results"
                          src={item.thumbnail}
                        />
                        <div style={{ display: "flex", flexDirection: "column", marginLeft: "0.4rem" }}>
                          <p className="dropdown_text_nav" style={{ marginBottom: "0" }}>{item.title}</p>
                          <p className="dropdown_text_nav" style={{ marginBottom: "0", color: "#848484", fontSize: "14px", fontWeight: 'bold' }}>${item.price}</p>
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
                  1
                </span>
              </span>
            </Link>

            {/* use terinary operators instead */}
            <div className="profile_Dropdown_nav">
              <Link to="/user" className="User_profile_dropdown">
                {" "}
                <img
                  className="nav_img"
                  height="40px"
                  alt="alt"
                  src={defaultUserImg}
                />{" "}
                <BsChevronDown className="profile_icon_dropdown" />
                <div className="dropdown_results_nav">
                  <Link to="/signup" className="dropdown_items_nav">
                    <AiOutlineUserAdd />
                    LOGIN/SIGNUP
                  </Link>

                  {/* if he is logged in then */}
                  <Link to="/user" className="dropdown_items_nav">
                    <FaUserCircle />
                    Your Profile
                  </Link>
                  <Link to="/cart" className="dropdown_items_nav">
                    <AiOutlineShoppingCart /> Cart
                  </Link>
                  <Link to="/user/wishlists" className="dropdown_items_nav">
                    <AiOutlineHeart /> Wishlists{" "}
                  </Link>
                  <Link to="/user/messages" className="dropdown_items_nav">
                    <AiOutlineMessage />
                    Messages
                  </Link>
                  <Link onClick={() => signOut()} className="dropdown_items_nav">
                    <TbLogout2 />
                    LOGOUT
                  </Link>
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
