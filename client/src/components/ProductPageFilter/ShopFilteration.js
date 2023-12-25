import React from 'react'
import "./ShopFilteration.css"
import { Link } from 'react-router-dom'
import {BiSlider} from "react-icons/bi"
import {BsChevronDown} from "react-icons/bs"
const ShopFilteration = () => {
  return (
    <div className='shopfilter_wrapper'>
      <div className='filter_shopBtn'>
      <Link className='filter_Link_2'>Sort <BsChevronDown/> </Link>

        <Link className='filter_Link_2'>Price Range <BsChevronDown style={{fontSize:"13px"}}/> </Link>
        <Link className='filter_Link'>Filter <BiSlider/> </Link>


      </div>
    </div>
  )
}

export default ShopFilteration
