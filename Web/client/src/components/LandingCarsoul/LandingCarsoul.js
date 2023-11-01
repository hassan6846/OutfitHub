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
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
//Assets
const SliderImages = [
  "https://res.cloudinary.com/diml3oeaw/image/upload/v1694869173/Ecommerce/HomeSlider/csroyrooohsvkjv9zkt2.jpg",
  "https://res.cloudinary.com/diml3oeaw/image/upload/v1694869173/Ecommerce/HomeSlider/vm1nmeqftma1qqeccemi.jpg",
  "https://res.cloudinary.com/diml3oeaw/image/upload/v1694869173/Ecommerce/HomeSlider/nd2i36gvbywat7zrmjut.jpg",
  "https://res.cloudinary.com/diml3oeaw/image/upload/v1694869173/Ecommerce/HomeSlider/ydbsk4x2vf8dum9fvq84.jpg",
  "https://res.cloudinary.com/diml3oeaw/image/upload/v1694869173/Ecommerce/HomeSlider/gjnvxcbpei38k26hnifn.jpg",
  "https://res.cloudinary.com/diml3oeaw/image/upload/v1694869173/Ecommerce/HomeSlider/wlobnafva9cyy91cqnkg.jpg",
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
          <LazyLoadImage
          effect='blur'
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
