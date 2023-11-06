import React    from "react";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart";
import "./ProductCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProductCard(props) {

  return (
    <div  className="card-container">
      <div className="card_wrapper">
        <div className="image-container">
          <div className="sale_intro">-{props.saved}%</div>
          <div className="like_item_card">
            {" "}
          
          </div>
          <Link to="sa">
            <LazyLoadImage
              
              className="product_card_image_view"
              wrapperClassName="card_main_context"
              src={props.image}
              alt="ProductImage"
           
              effect="blur"
            />
          </Link>
          <div></div>
        </div>
        <div className="product-info">
          <div>
          <Link to="/s">
            {" "}
            <div
              className="product-name_card"
              style={{
                textAlign: "start",
                color: "#666678",
                fontWeight: "500",
             
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
            <Link className="tag-links">Serum</Link></div>
  
          </div>
          {/* Add Icon State Here */}
          <div className="card_icons_like">  <UseAnimations animation={heart} size={25} /></div>
        </div>
      </div>
    </div>
  );
}
