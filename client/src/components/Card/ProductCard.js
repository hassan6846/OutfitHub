import React from "react";
import { Link } from "react-router-dom";
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import "./ProductCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function ProductCard(props) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  return (
    <div key={props.key} className="card-container">
      <div className="card_wrapper">
        <div className="image-container">
          <div className="sale_intro">{Math.floor(props.saved)}%</div>
          <div className="like_item_card">
            {" "}

          </div>
          <Link
            state={props.state}
            to={props.to}>
            <LazyLoadImage

              className="product_card_image_view"
              wrapperClassName="card_main_context"
              src={props.image}
              alt="ProductImage"

              effect="blur"
            />
          </Link>

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
                <div style={{display:"flex",columnGap:'5px',alignItems:"center",flexDirection:"row"}}>
                  <p style={{marginBottom:"0px"}}>{props.salePrice}</p>
                  <p style={{marginBottom:"0px",fontSize:"13px",color:"#d01345",textDecorationLine:"line-through",}}>{props.orignalPrice}</p>
                </div>
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
              <Link to={props.tagoneLink} className="tag-links">
  {props.tagone.length > 20 ? `${props.tagone.substring(0, 20)}...` : props.tagone}
</Link>
<Link to={props.tagtwoLink} className="tag-links">
  {props.tagtwo.length > 20 ? `${props.tagtwo.substring(0, 20)}...` : props.tagtwo}
</Link>
<Link to={props.tagthreelink} className="tag-links">
  {props.tagsthree.length > 20 ? `${props.tagsthree.substring(0, 20)}...` : props.tagsthree}
</Link></div>

          </div>
          {/* Add Icon State Here */}
          <div className="card_icons_like">

            <Checkbox
            // onclick aadd the passed state to the liked slice state...
            onClick={props.iconClick}
              sx={
                {
                  color: "black",
                  '&.Mui-checked': {
                    color: "black"
                  }
                }
              }

              {...label} checked={props.isChecked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />


          </div>
        </div>
      </div>
    </div>
  );
}
