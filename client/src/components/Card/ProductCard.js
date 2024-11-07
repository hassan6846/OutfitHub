import React    from "react";
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
    <div  className="card-container">
      <div className="card_wrapper">
        <div className="image-container">
          <div className="sale_intro">-{props.saved}%</div>
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
            <Link to={props.tagoneLink} className="tag-links">{props.tagone}</Link>
            <Link  to={props.tagtwoLink} className="tag-links">{props.tagtwo}</Link>
            <Link to={props.tagthreelink} className="tag-links">{props.tagsthree}</Link></div>
  
          </div>
          {/* Add Icon State Here */}
          <div className="card_icons_like"> 
          
           <Checkbox
sx={
  {
    color:"black",
    '&.Mui-checked':{
      color:"black"
    }
  }
}

        {...label} checked={props.isChecked} icon={<FavoriteBorder />} checkedIcon={<Favorite />} /> </div>
        </div>
      </div>
    </div>
  );
}
