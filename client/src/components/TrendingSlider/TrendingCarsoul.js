import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./TrendingCarsoul.css";

// card
import ProductCard from "../Card/ProductCard";
import axios from "axios";
import { ENDPOINT } from "../../api/Endpoint";
import Slug from "../../helpers/Slugify";
import { addtoLiked,removeFromLiked } from "../../Slices/LikedSlice";
import { useDispatch,useSelector } from "react-redux";
import {toast} from "react-hot-toast"
export default function TrendingCarsoul(props) {
  const dispatch=useDispatch()
  const [data, setdata] = useState([])
  const liked = useSelector((state) => state.like.products);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${ENDPOINT}/products/promotions/trending`);
        setdata(response.data.product)
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct()
    // eslint-disable-next-line 
  }, [])
  const handleLikeToggle = (product) => {
    // Check if the product is already in the liked list
    const isLiked = liked.some((item) => item._id === product._id);
  
    if (isLiked) {
      // If liked, dispatch removeFromLiked action
      dispatch(removeFromLiked(product));
      toast('Removed from Liked item!', {
        icon: '😥',
      });
    } else {
      // If not liked, dispatch addtoLiked action
      dispatch(addtoLiked(product));
      toast('Added to liked item!', {
        icon: '🎉',
      });
    }
  };
  
  return (
    <>
      <Swiper
        spaceBetween={5}
        slidesPerView={'auto'}
        className="mySwiper"
        style={{ marginBottom: props.margin }}

      >
        {
          data.map((product) => (
            <SwiperSlide style={{ width: "auto" }} key={product.id}>
              <ProductCard
                saved={Math.floor(((Number(product.RegularPrice) - Number(product.SalePrice)) / Number(product.RegularPrice)) * 100)}
                // pathname:`/shop/${Slug(item.name)}`,
                state={product}
                tagoneLink={`/shop/tags/${Slug(product.tags[0] || '')}`}
                iconClick={() => handleLikeToggle(product)}
                tagtwoLink={`/shop/tags/${Slug(product.tags[1] || '')}`}
                tagthreelink={`/shop/tags/${Slug(product.tags[2] || '')}`}
                tagone={product.tags[0] || ''}
                tagtwo={product.tags[1] || ''}
                tagsthree={product.tags[2] || ''}
                isChecked={liked.some((likedProduct) => likedProduct._id === product._id)}

                to={`/shop/${Slug(product.name)}`}
                name={product.name}
                image={product.image[0]} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
