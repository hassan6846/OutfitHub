import React, { useEffect } from "react";
import "./Wishlists.css";
import Checkbox from '@mui/material/Checkbox';

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
export default function Wishlists() {
  const likedItems = useSelector((state) => state.like.products);

  useEffect(() => {
    console.log(likedItems); // Debugging the likedItems array
  }, [likedItems]);

  return (
    <>
      <p className="wishlist_page_head">Liked Items</p>

      {/* Conditional Rendering Inside */}
      {likedItems.length === 0 ? (
        <div className="wishlist_empty_container">
          <p>Your Wishlist is Empty</p>
          <Link to="/shop" className="wishlistLink">
            Continue Shopping
          </Link>
        </div>
      ) : (
        // This is where we render the liked items if there are any
        <div className="wishlist_products_container">
          {likedItems.map((product, index) => (
            <div
              key={index}
              style={{
                boxShadow:"rgba(100, 100, 111, 0.123) 0px 7px 20px 0px",
                marginTop: "5px",
                display: "flex",
                borderRadius:"5px",
                flexDirection: "row",
                marginBottom:"30px",
                padding:"20px",
                justifyContent: "space-between",
              }}
            >
              <div className="" style={{ flexDirection: "row", display: 'flex' }}>
                <img
                  src={product.image[0]} // Assuming product has an array of images
                  alt={product.name}
                  style={{
                    height: "150px",
                    width: "150px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />

                <div
                  style={{
                    flexDirection: "column",
                    display: 'flex',
                    justifyContent: "center",
                    alignItems: "flex-start",
                    marginLeft: "20px",
                  }}
                >
                  <p style={{ marginBottom: "10px" }}>{product.name}</p>
                  <p style={{ marginBottom: "10px" }}>{product.description}</p>
                </div>
              </div>

              <div
                style={{
                  flexDirection: "column",
                  display: 'flex',
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginLeft: "20px",
                }}
              >
                <Checkbox
                  // onclick aadd the passed state to the liked slice state...

                  sx={
                    {
                      color: "black",
                      '&.Mui-checked': {
                        color: "black"
                      }
                    }
                  }

                  icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
