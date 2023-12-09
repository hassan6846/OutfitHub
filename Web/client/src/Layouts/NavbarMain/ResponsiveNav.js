//modules and library.
import  { React,useState } from "react";
import { Link } from "react-router-dom";
import UseAnimation from "react-useanimations";
import { useSignOut } from "react-auth-kit"
import axios from "axios";
// icons
import { FiSearch } from "react-icons/fi";
import { BsFillCartFill, BsChevronDown, BsGraphUp } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineShoppingCart,AiOutlineMessage,AiOutlineUserAdd,} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { FaQuestion } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import menu3 from "react-useanimations/lib/menu3";
// Constants
import { CompanyLogo, defaultUserImg,ALT } from "../../helpers/GlobalVariables";
// CSS imported
import "./ResponsiveNav.css";





// Main NavComponent.
const ResponsiveNav = () => {
  const signOut = useSignOut()
  const [showResults, SetshowResults] = useState(false);
  const [searchValue,setSearchValue]=useState("")
  const [isActive, setIsActive] = useState(true);
 
  //Handle Click input (show)
  const handleInputClick = () => {
    SetshowResults(true)
  }
  //Hide On Blur
  const handleBlur = () => {
    SetshowResults(false)
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

//Search Recomendation Handle Change
const HandleChange=async(e)=>{
  const value = e.target.value.toLowerCase();
   setSearchValue(value);
   console.log(value)
  //  Search Results ..
  try{
    const response = await axios.get(`https://dummyjson.com/products/search?q=${searchValue}`);
    const data = response.data;
    console.log(data)
  }catch(error){
    console.log(error)
  }

}

  return (
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
          <input
            style={{ width: "100%", padding: "0.3rem 1rem" }}
            className="desktop_nav_input"
            label="Search"
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
            <div
              style={{ position: "absolute", transition: "all" }}
              className="search-results_dropdown"

            >
              <div style={{ padding: "1rem", cursor: 'pointer' }}>SearchRecomendations Will be <br /> Map Here</div>
              <button style={{ width: "100%", color: "#131039", backgroundColor: "#4BB497", outline: "none", border: "none", padding: "0.5rem", borderRadius: "5px" }}>See All Result <BsGraphUp style={{ marginLeft: "0.2rem" }} size={14} /></button>
            </div>
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
  );
};

export default ResponsiveNav;
