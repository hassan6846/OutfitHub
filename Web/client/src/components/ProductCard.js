// modules
import React from 'react'
//css
import "./ProductCard.css"
import { Link } from 'react-router-dom'
// other Compoments


/**
 * objective is to apply the skeleton reloading
 * and maneging the  context of the elements
 */
const ProductCard = () => {
  return (
    <Link>
<div className='card_flex'>
  <div className='Product_preview'> <img className='product-img' alt='product-img' src="https://d30fs77zq6vq2v.cloudfront.net/product/515x772/28022023/17671_867_1653558308_628f4c247d664-1664946919397.jpg"/> </div>
  <div className='Product_details'>
    <p className='product-subCategory'>Tshirt</p>
    <p className='product-title'>Cyan Tshirt with Flowers</p>
   <p className='price'>  <span className='priceBefore'>900Rs</span> <strong className='SalePrice'>500Rs</strong> </p>
  </div>
</div>
</Link>
  )
}

export default ProductCard