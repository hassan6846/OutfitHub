import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./TrendingCarsoul.css";

// card
import ProductCard from "../Card/ProductCard";
const products = [
  { id: 1, name: "Women Denim Charcoal.", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854629/trendImg9_v3fgrr.jpg" },
  { id: 2, name: "Ember Enigma Jeans", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854628/trendImg1_rmhfg4.jpg" },
  { id: 3, name: "Shadow Grace Denim", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854628/trendImg2_jik4zs.jpg" },
  { id: 4, name: "Steel Serenity Jeans", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854629/trendImg7_crbpmr.jpg" },
  { id: 5, name: "Ashen Aura Denim", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854629/trendImg3_nuajh9.jpg" },
  { id: 6, name: "Graphite Glamour Jeans ", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854629/trendImg4_bsjoiv.jpg" },
  { id: 7, name: "Smokey Chic Denim", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854629/trendImg5_il2bsm.jpg" },
  { id: 8, name: "Slate Essence Jeans", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854629/trendImg6_lahxnl.jpg" },
  { id: 9, name: "Misty Charcoal Denim  ", image: "https://res.cloudinary.com/diml3oeaw/image/upload/v1698854630/trendImg8_xqsh0u.jpg" },

];
export default function TrendingCarsoul(props) {
  return (
    <>
      <Swiper
spaceBetween={5}
slidesPerView={'auto'}
     className="mySwiper"
     style={{ marginBottom: props.margin }}

      >
        {
          products.map((product) => (
            <SwiperSlide style={{width:"auto"}} key={product.id}>
              <ProductCard to={`/shop/product/${product.name}`} name={product.name} image={product.image} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
