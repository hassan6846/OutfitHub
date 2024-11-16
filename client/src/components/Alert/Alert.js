import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsTelephoneFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import  "./Alert.css";
import {useSelector} from "react-redux"
function Alertbar() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const [showAlert, setShowAlert] = useState(isAuthenticated===false);
  const closeAlert = () => {
    setShowAlert(false);
  };
      
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setShowAlert(false);
      }
    };

    
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAuthenticated,showAlert]);

  if (!showAlert) {
    return null; 
  }

  return (
    <div className={`Alert ${showAlert ? "show" : "hide"}`}>
      <div className="alerted_wrapper">
        {/* 1 */}
        <div className="Alert__phone">
          <Link
            to="tel:924086667812"
            style={{
              marginBottom: "0px",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              columnGap: "0.6rem",
            }}
          >
            <BsTelephoneFill /> +92 408 666 7812
          </Link>
        </div>
        {/* 1 */}

        {/* 2 */}
        <div>
          <p className="alert_msg" style={{ color: "white" }}>
            Sign up today and <span>GET 20% OFF</span> on your first order{" "}
            <Link
              style={{ fontWeight: "bold" }}
              className="signup_link"
              to="/signup"
            >
              | Sign Up Now 
            </Link>
          </p>
        </div>
        {/* 2 */}

        {/* 3 */}
        <div className="closebtn" onClick={closeAlert}>
          <MdOutlineClose className="close_alert_svg" />
        </div>
        {/* 3 */}
      </div>
    </div>
  );
}

export default Alertbar;
