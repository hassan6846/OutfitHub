


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
          <div className="price">
            <span className="original-price">300rs</span>
            <span className="discounted-price">20rs</span>
          </div>
          <div className="product-name">{props.name}</div>
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
