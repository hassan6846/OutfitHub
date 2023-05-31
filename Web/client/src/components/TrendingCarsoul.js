import React from 'react'
import "./TrendingCarsoul.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
const TrendingCarsoul = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 600,

    pauseOnHover: true, 
    autoplay: true,
    autoplaySpeed: 2000,

    slidesToShow: 6,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (

    <Slider {...settings} className='carsoul'>
      <div className='box flex_box'><p className='centered-txt'>1</p></div>
      <div className='box'><p>2</p></div>
      <div className='box'>3</div>
      <div className='box'>4</div>
      <div className='box'>5</div>
      <div className='box'>6</div>
      <div className='box'>7</div>
      <div className='box'>3</div>
      <div className='box'>4</div>
      <div className='box'>5</div>
      <div className='box'>6</div>
      <div className='box'>7</div>
      <div className='box'>8</div>
      <div className='box'>8</div>
    </Slider>


  )
}

export default TrendingCarsoul




