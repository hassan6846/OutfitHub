import React from "react";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import "./ProductCard.css";

export default function ProductCard(props) {
  return (
    <div className="card-container">
      <div className="card_wrapper">
        <div className="image-container">
          <div className="sale_intro">-{props.saved}%</div>
          <div className="like_item_card">
            {" "}
            <UseAnimations animation={heart} size={32} />
          </div>
          <Link to="sa">
            <img
              className="product_card_image_view"
              src={props.image}
              alt="ProductImage"
            />
          </Link>
          <div></div>
        </div>
        <div className="product-info">
          <Link to="/s">
            {" "}
            <div
              className="product-name_card"
              style={{
                textAlign: "start",
                color: "#666678",
                fontWeight: "500",
                fontSize: "16px",
              }}
            >
              {props.name}
            </div>
          </Link>
          <div
            style={{ display: "flex", alignItems: "center" }}
            className="price"
          >
            <span style={{ fontSize: "13px" }} className="original-price">
              {props.actualPrice}
            </span>
            <span className="discounted-price">{props.price}</span>
          </div>

          <div className="category_buttons_wrapper">
            {/* all category or tags will be map here no using  */}
            <Link className="tag-links">{props.catgory}</Link>
            <Link className="tag-links">Women</Link>
            <Link className="tag-links">Serum</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
