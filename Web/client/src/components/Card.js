import React from 'react'
import "./Card.css"
const ProductCard = (props) => {
  return (
    <div className='card_wrapper'>
      <p className='product_price'>{props.price}</p>
      <p className='product_title'>{props.title}</p>
    </div>
  )
}

export default ProductCard