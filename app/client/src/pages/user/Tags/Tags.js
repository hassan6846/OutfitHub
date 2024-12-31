import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

//css
import "./Tags.css";
//utils
import { ENDPOINT } from "../../../api/Endpoint";
import Slugify from "../../../helpers/Slugify"; // Helper for slugifying
//states
import { useDispatch, useSelector } from "react-redux";
import { addtoLiked, removeFromLiked } from "../../../Slices/LikedSlice";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "../../../components/Card/ProductCard";

// Helper to deslugify (convert hyphens to spaces)
const deslugify = (slug) => slug.replace(/-/g, " ");

const Tags = () => {
  const dispatch = useDispatch();
  const liked = useSelector((state) => state.like.products);

  const [product, setproducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchProductByTags = async () => {
      try {
        setLoading(true);
        const tag = deslugify(params.tag); // Convert hyphens back to spaces
        const encodedTag = encodeURIComponent(tag); // Encode for server
        console.log(encodedTag);

        const response = await axios.get(`${ENDPOINT}/products/tags/${encodedTag}`, {
          withCredentials: true,
        });

        setproducts(response.data.products);
        console.log(response.data.products);
      } catch (error) {
        console.log(error);
        toast.error("Error While Fetching Products.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductByTags();
  }, [params]);

  const handleLikeToggle = (product) => {
    const isLiked = liked.some((item) => item._id === product._id);

    if (isLiked) {
      dispatch(removeFromLiked(product));
      toast("Removed from Liked item!", {
        icon: "😥",
      });
    } else {
      dispatch(addtoLiked(product));
      toast("Added to liked item!", {
        icon: "🎉",
      });
    }
  };

  return (
    <div className="Tags_Page_Container">
      {loading ? (
        <div  style={{height:'100vh',width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <CircularProgress />
        </div>
      ) : (
        product.map((product, index) => (
          <ProductCard
            saved={Math.floor(((Number(product.RegularPrice) - Number(product.SalePrice)) / Number(product.RegularPrice)) * 100)}
            state={product}
            key={index}
            tagoneLink={`/shop/tags/${Slugify(product.tags[0] || "")}`} // Slugify tags for URL
            iconClick={() => handleLikeToggle(product)}
            tagtwoLink={`/shop/tags/${Slugify(product.tags[1] || "")}`}
            tagthreelink={`/shop/tags/${Slugify(product.tags[2] || "")}`}
            tagone={product.tags[0] || ""}
            tagtwo={product.tags[1] || ""}
            tagsthree={product.tags[2] || ""}
            isChecked={liked.some((likedProduct) => likedProduct._id === product._id)}
            to={`/shop/${Slugify(product.name)}`}
            name={product.name}
            image={product.image[0]}
          />
        ))
      )}
    </div>
  );
};

export default Tags;
