import React from 'react'
import "./SubCategorybtn.css"
import { Link } from 'react-router-dom'
const SubCategorybtn = () => {
  return (
    <Link className='subBtnWrapper'>
    <img className="SubBtnImg" src="./shoesz.jpg"  alt="shoesz"/>
    <p className='sub_productName'>shoes</p>
    </Link>
  )
}

export default SubCategorybtn