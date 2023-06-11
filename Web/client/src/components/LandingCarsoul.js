import React from 'react'
import "./LandingCarsoul.css"
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
const LandingCarsoul = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='car_wrapper'>
<div className='main_wrapper'>
    <Slider  {...settings} className='big_carsoul'>  
<Link><img  className='imgCarsoul' src="./jeans.png"  alt="img1" /></Link>
<Link><img  className='imgCarsoul' src="./menshirt.jpg"  alt="img1" /></Link>
<Link><img  className='imgCarsoul' src="./men.png"  alt="img1" /></Link>

    </Slider>
    {/* flex carsoul */}
    <div className='column_carsoul_wrapper'>
        <div className='column_item1' >
     
        </div>
        <div  className='column_item2'> 
        
         </div>
    </div>
    {/*  */}
</div>
    </div>
  )
}

export default LandingCarsoul
