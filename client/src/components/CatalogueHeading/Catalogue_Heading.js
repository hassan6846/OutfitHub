import { Link } from "react-router-dom";
import "./Trending_heading.css";
import React from 'react'
import { FcNext } from "react-icons/fc"
const Cathead = (props) => {
  return (
    <div className="heading__flex_wrapper_90">
      <div className="heading__child_70">
        <h3 className="cat_heading_text" >{props.heading}</h3>
        <Link to={props.LinkPage} className="Nav_link" >{props.LinkText} <FcNext color="#131039" style={{ color: "#131039", display: props.display }} className="next_icon" /> </Link>
      </div>
    </div>
  )
}

export default Cathead;