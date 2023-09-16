import React, { useState, useEffect } from 'react';
import './Alert.css';
import { Link } from 'react-router-dom';
import { BsTelephoneFill } from "react-icons/bs"
import { MdOutlineClose } from "react-icons/md"

function Alertbar() {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setShowAlert(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and hide the alert if needed
      if (window.scrollY > 150) {
        setShowAlert(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!showAlert) {
    return null; // Do not render the alert if showAlert is false
  }

  return (
    <div className={`Alert ${showAlert ? 'show' : 'hide'}`}>
      <div className='alerted_wrapper'>
        {/* 1 */}
        <div className='Alert__phone'>
          <Link to="tel:924086667812" style={{ marginBottom: "0px", color: "white", display: "flex", justifyContent: "center", alignItems: "center", columnGap: "0.6rem" }}>
            <BsTelephoneFill /> +92 408 666 7812
          </Link>
        </div>
        {/* 1 */}

        {/* 2 */}
        <div>
          <p className='alert_msg' style={{ color: "white" }}>
            Sign up today and <span>GET 20% OFF</span> on your first order{' '}
            <Link style={{ fontWeight: "bold" }} className='signup_link' to="/signup">| Sign Up Now</Link>
          </p>
        </div>
        {/* 2 */}

        {/* 3 */}
        <div className='closebtn' onClick={closeAlert}>
          <MdOutlineClose className='close_alert_svg' />
        </div>
        {/* 3 */}
      </div>
    </div>
  );
}

export default Alertbar;
