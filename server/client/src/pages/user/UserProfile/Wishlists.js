import React, { useEffect } from "react";
import "./Wishlists.css";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import { removeFromLiked } from "../../../Slices/LikedSlice";
import toast from "react-hot-toast";

export default function Wishlists() {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.like.products);

  useEffect(() => {
    console.log(likedItems); // Debugging the likedItems array
  }, [likedItems]);

  const handleLikeToggle = (product) => {
    const isLiked = likedItems.some((item) => item._id === product._id);

    if (isLiked) {
      dispatch(removeFromLiked(product));
      toast("Removed from Liked item!", {
        icon: "😥",
      });
    }
    // Optionally, you can handle adding a product to likedItems if required in the future.
  };

  return (
    <>
      <p className="wishlist_page_head">Liked Items</p>

      {likedItems.length === 0 ? (
        <div className="wishlist_empty_container">
          <p>Your Wishlist is Empty</p>
          <Link to="/shop" className="wishlistLink">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="wishlist_products_container">
          {likedItems.map((product, index) => (
            <div
              key={index}
              style={{
                boxShadow: "rgba(100, 100, 111, 0.123) 0px 7px 20px 0px",
                marginTop: "5px",
                display: "flex",
                borderRadius: "5px",
                flexDirection: "row",
                marginBottom: "30px",
                padding: "20px",
                justifyContent: "space-between",
              }}
            >
              <div
                className=""
                style={{ flexDirection: "row", display: "flex" }}
              >
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
                    display: "flex",
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
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  marginLeft: "20px",
                }}
              >
                <Checkbox
                  checked={likedItems.some((item) => item._id === product._id)} // Checkbox reflects liked state
                  onChange={() => handleLikeToggle(product)} // Toggle like state on click
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
