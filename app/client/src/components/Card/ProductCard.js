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
          <Link state={props.state} to={props.to}>
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
            <Link state={props.state} to={props.to}>
              <div
                className="product-name_card"
                style={{
                  textAlign: "start",
                  color: "#666678",
                  fontWeight: "500",
                }}
              >
                <p>{props.name.length > 30 ? `${props.name.substring(0, 30)}...` : props.name}</p>

                <div style={{ display: "flex", columnGap: '5px', alignItems: "center", flexDirection: "row" }}>
                  <p style={{ marginBottom: "0px" }}>{props.salePrice}</p>
                  <p style={{ marginBottom: "0px", fontSize: "13px", color: "#d01345", textDecorationLine: "line-through", }}>
                    {props.orignalPrice}
                  </p>
                </div>
              </div>
            </Link>

            <div style={{ display: "flex", alignItems: "center" }} className="price">
              <span style={{ fontSize: "13px" }} className="original-price">
                {props.actualPrice}
              </span>
              <span className="discounted-price">{props.price}</span>
            </div>

            <div className="category_buttons_wrapper">
              {/* All category or tags will be mapped here */}
              <Link to={`/shop/tags/${encodeURIComponent(props.tagone)}`} className="tag-links">
                {props.tagone.length > 10 ? `${props.tagone.substring(0, 6)}...` : props.tagone}
              </Link>
              <Link to={`/shop/tags/${encodeURIComponent(props.tagtwo)}`} className="tag-links">
                {props.tagtwo.length > 10 ? `${props.tagtwo.substring(0, 6)}...` : props.tagtwo}
              </Link>
              <Link to={`/shop/tags/${encodeURIComponent(props.tagsthree)}`} className="tag-links">
                {props.tagsthree.length > 10 ? `${props.tagsthree.substring(0, 6)}...` : props.tagsthree}
              </Link>
            </div>
          </div>

          <div className="card_icons_like">
            <Checkbox
              onClick={props.iconClick}
              sx={{
                color: "black",
                '&.Mui-checked': {
                  color: "black"
                }
              }}
              {...label}
              checked={props.isChecked}
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
