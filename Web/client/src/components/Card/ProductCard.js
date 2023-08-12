


import React from "react";
import "./ProductCard.css"; // Make sure to import your CSS file

export default function ProductCard(props) {




  return (
    <div className="card-container">
      <div className="card">
        <div className="image-container">
          <div className="sale_intro">20% Off</div>
          <img src={props.image} alt="ProductImage" />
          <div
           
          >
         
          </div>
        </div>
        <div className="product-info">
          <div className="price">
            <span className="original-price">{props.originalPrice}</span>
            <span className="discounted-price">{props.discountedPrice}</span>
          </div>
          <div className="product-name">{props.productName}</div>
        </div>
      </div>
    </div>
  );
}
