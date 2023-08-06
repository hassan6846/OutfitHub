import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faHeart as faHeartEmpty
} from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css"; // Make sure to import your CSS file

export default function ProductCard() {
  const [liked, setLiked] = useState(false);

  const handleLikeToggle = () => {
    setLiked((prevState) => !prevState);
  };

  return (
    <div className="card-container">
      <div className="card">
        <div className="image-container">
          <div className="sale_intro">20% Off</div>
          <img
            src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg"
            alt="ProductImage"
          />
          <div
            className={`heart-icon ${liked ? "liked" : ""}`}
            onClick={handleLikeToggle}
          >
            {liked ? (
              <FontAwesomeIcon icon={faHeart} />
            ) : (
              <FontAwesomeIcon icon={faHeartEmpty} />
            )}
          </div>
        </div>
        <div className="product-info">
          <div className="price">
            <span className="original-price">$100</span>
            <span className="discounted-price">$80</span>
          </div>
          <div className="product-name">Product Name</div>
        </div>
      </div>
    </div>
  );
}
