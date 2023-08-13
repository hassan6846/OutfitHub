import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import "./TrendingCarsoul.css";

export default function TrendingCarsoul() {
  return (
    <>
      <Swiper 
  
  breakpoints={{
    
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  }}

      navigation={true} modules={[Navigation]} className="mySwiper"
      
      >

        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
        <SwiperSlide>Slide 10</SwiperSlide>
      </Swiper>
    </>
  );
}
