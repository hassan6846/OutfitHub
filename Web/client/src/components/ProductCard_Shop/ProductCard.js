import React from "react";
import { Link } from "react-router-dom";
import UseAnimations from "react-useanimations";
import heart from "react-useanimations/lib/heart"
import "./ProductCardShop.css";




export default function ProductCard(props) {
  return (

    <div

      className="card-container_shop">
      <div className="card_wrapper_shop">

        <div className="image-container_shop">
          <div className="sale_intro_shop">-{props.saved}%</div>
          <div className="like_item_card_shop">     <UseAnimations animation={heart} size={32} /></div>

          <img className="product_card_image_view_shop" src={props.image} alt="ProductImage_shop" />
          <div

          >

          </div>
        </div>
        <div className="product-info_shop">
          <div className="product-name_card_shop" style={{ textAlign: "start", color: "#666678", fontWeight: "500", }}>{props.name}</div>
          <div style={{ display: "flex", alignItems: "center" }} className="price_shop">
            <span style={{ fontSize: "13px" }} className="original-price_shop">{props.actualPrice}</span>
            <span className="discounted-price_shop">{props.price}</span>
          </div>

          <div className="category_buttons_wrapper_shop">
{/* all category or tags will be map here no using  */}
            <Link className="tag-links_shop">{props.catgory}</Link>
            <Link className="tag-links_shop">Women</Link>
            <Link className="tag-links_shop">Serum</Link>
          </div>
        </div>
      </div>
    </div>


  );
}
