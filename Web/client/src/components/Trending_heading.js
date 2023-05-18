import { Link } from "react-router-dom";
import "./Trending_heading.css";
import React from 'react'

const Trending_heading = () => {
  return (
    <div className="heading__flex_wrapper_100">
        <div className="heading__child_70">
            <h3>Trending Products</h3>
           <Link to="/shop?product=trending" >See more</Link>
        </div>
    </div>
  )
}

export default Trending_heading