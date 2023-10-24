import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';
import "./TrendingCarsoul.css";

// card
import ProductCard from "../Card/ProductCard";
const products = [
  { id: 1, name: "Women Denim Charcoal.", image: "trendImg9.jpg" },
  { id: 2, name: "Ember Enigma Jeans", image: "./trendImg1.jpg" },
  { id: 3, name: "Shadow Grace Denim", image: "./trendImg2.jpg" },
  { id: 4, name: "Steel Serenity Jeans", image: "./trendImg3.jpg" },
  { id: 5, name: "Ashen Aura Denim", image: "./trendImg4.jpg" },
  { id: 6, name: "Graphite Glamour Jeans ", image: "./trendImg5.jpg" },
  { id: 7, name: "Smokey Chic Denim", image: "./trendImg6.jpg" },
  { id: 8, name: "Slate Essence Jeans", image: "./trendImg7.jpg" },
  { id: 9, name: "Misty Charcoal Denim  ", image: "./trendImg8.jpg" },

];
export default function TrendingCarsoul() {
  return (
    <>
      <Swiper
spaceBetween={5}
slidesPerView={'auto'}
        navigation={true} modules={[Navigation]} className="mySwiper"

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
