import React from 'react'
import "./Card.css"
const ProductCard = (props) => {
  return (
    <div className='card_wrapper'>
      <img alt='productIMG' className="productImages" src={props.src}/>
      <p className='product_price'>Rs {props.price} </p>
      <p className='product_title'>{props.title}</p>
    </div>
  )
}

export default ProductCard