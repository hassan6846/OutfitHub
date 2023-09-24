import React from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
//--swiper css && /main css
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./LandingCarsoul.css";
// --swiper modules
import { Pagination, Autoplay } from "swiper/modules";

//Assets
const SliderImages = [
  "./SliderImage1.jpg",
  "./SliderImage2.gif",
  "./SliderImage3.jpg",
  "./SliderImage4.gif",
  "./SliderImage5.jpg",
  "./SliderImage6.jpg",
];

const LandingCarsoul = () => {
  console.log(SliderImages);
  return (
    <Swiper
      className="Land_swiper"
      modules={[Pagination, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      {SliderImages.map((imagePath, index) => (
        <SwiperSlide className="Swiper_slider_Land" key={index}>
          <img
            className="Landing_carsoul_image"
            src={imagePath}
            alt={`slider ${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LandingCarsoul;
