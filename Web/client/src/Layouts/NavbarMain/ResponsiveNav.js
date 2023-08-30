import React, { useState } from 'react';
import './ResponsiveNav.css';
import { Link } from 'react-router-dom';
import { MDBCol, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
 
const ResponsiveNav = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    // Perform your search logic here and update the searchResults state
    // For now, let's use a mock array of search results
    const mockResults = ['Result 1', 'Result 2', 'Result 3',"Result 4 ", "Billy Jeans Underwear","walter","sdadas","sdas","DSDDS","SDSADS","SSDSADDS"];
    setSearchResults(query ? mockResults : []);
  };

  return (
    <nav className='navbar_container'>
      <Link to="/">
        <img  className='logo_nav_Link' alt='Company' src='./logo.svg' />
      </Link>

      <MDBCol style={{ display: "flex", columnGap: "0.3rem"  }} md="4">
        <input
          className="form-control"
          type="text"
         
          placeholder="Search"
          aria-label="Search"
          onBlur={() => setSearchResults([])}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <MDBBtn style={{padding:"10px 22px",backgroundColor:"#4BB497"}}>
          <MDBIcon fas icon="search" />
        </MDBBtn>
      </MDBCol>

      {searchResults.length > 0 && (
        <div  className="search_dropdown" >
          <div style={{rowGap:"0.5rem"}} className="flex-column-search">
            {searchResults.map((result, index) => (
              <div style={{cursor:"pointer",border:"1px solid black"}} key={index}>{result}</div>
            ))}
          </div>
        </div>
      )}

      <div className='optional_links' style={{ display: "flex" }}>
        <Link>
        <img style={{ cursor: "pointer" }} className='userImage_linked' src='https://tinyurl.com/y3p4rhbs' alt='img' />
        <span className='notification_alert_user'></span>
        </Link>
        <Link className='cart-link-url-route' to="/cart"><MDBIcon fas icon="shopping-cart" /> <p className='cart-length-item'>{0}</p> </Link>
        <Link className='login_link_nav' to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default ResponsiveNav;
