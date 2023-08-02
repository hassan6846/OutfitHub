import React from 'react'
import {Link} from "react-router-dom"
import "./CategoryBar.css"
import 'swiper/css';
import {Swiper,SwiperSlide} from "swiper/react"
const CategoryBar = () => {
  return (
    <div className='cat_cont'>   
      
       <div className='category_wrapper'>
    <Link className='cat_link'>Men</Link>
    <Link className='cat_link'>Women</Link>
    <Link className='cat_link'>Kids</Link>
    <Link className='cat_link'>Girls</Link>
    <Link className='cat_link'>Beauty</Link>
    <Link className='cat_link'>Jewellery</Link>
        </div>
<div className='category_items_slider'>
  The Selectable SubCategoryItems will be here but i  center
</div>
        </div>

  )
}

export default CategoryBar