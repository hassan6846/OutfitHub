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
  { id: 1, name: "Product 1", image: "https://images.unsplash.com/photo-1691493254643-1855ea6a342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=708&q=80" },
  { id: 2, name: "Product 2", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
  { id: 3, name: "Product 3", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
  { id: 4, name: "Product 3", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
  { id: 5, name: "Product 3", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
  { id: 6, name: "Product 3", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
  { id: 7, name: "Product 3", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
  { id: 8, name: "Product 3", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },
  { id: 9, name: "Product 3", image: "https://images.unsplash.com/photo-1691592740763-6b13de20f14c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" },

];
export default function TrendingCarsoul() {
  return (
    <>
      <Swiper
breakpoints={{
  375:{

   spaceBetween:140,
        slidesPerView:2
  },

  1024:{
        slidesPerView:5,
        spaceBetween:0,
  },
  768:{
slidesPerView:3,
spaceBetween:140,
  },

  820:{
    slidesPerView:3,
  spaceBetween:100,
  },
  912:{
    slidesPerView:3,
  }

}}
        navigation={true} modules={[Navigation]} className="mySwiper"

      >
        {
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard name={product.name} image={product.image} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}
