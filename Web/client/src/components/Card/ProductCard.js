


import React from "react";
import "./ProductCard.css"; // Make sure to import your CSS file
import { Link } from "react-router-dom";

export default function ProductCard(props) {




  return (
    <Link
      to={props.to}
      className="card-container">
      <div className="card_wrapper">
        <div className="image-container">
          <div className="sale_intro">-20%</div>
          <img className="product_card_image_view" src={props.image} alt="ProductImage" />
          <div

          >

          </div>
        </div>
        <div className="product-info">
          <div className="product-name_card" style={{ textAlign: "start", color: "#666678",fontWeight:"500",fontSize:"16px" }}>{props.name}</div>
          <div style={{ display: "flex",alignItems:"center" }} className="price">
            <span style={{fontSize:"13px"}} className="original-price">Rs 300</span>
            <span className="discounted-price">20rs</span>
          </div>

          <div className="category_buttons_wrapper">

            <Link className="tag-links">Cosemetics</Link>
            <Link className="tag-links">Women</Link>
            <Link className="tag-links">Serum</Link>
          </div>
        </div>
      </div>
    </Link>
  );
}
