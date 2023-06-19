// module And Libarary
import React from 'react'
// css
import "./ProductView.css"
// components and pages
const ProductView = () => {
  return (
    <div className='vue_row'>
      <div className='vue_col_1'>
        <div className='image-Column'>
          <img alt='None' className='columnIMG' src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-1.png" />
          <img alt='None' className='columnIMG' src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-1.png" />
          <img alt='None' className='columnIMG' src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-1.png" />
          <img alt='None' className='columnIMG' src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-1.png" />
          <img alt='None' className='columnIMG' src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-1.png" />
        </div>
        <div className='Big-Image'> <img src="https://cdn.rareblocks.xyz/collection/clarity-ecommerce/images/product-details/2/product-1.png" alt="Img" className='big_img' /> </div>
      </div>
      {/* add vue 2 content container for heading andfilter */}
      <div className='vue_col_2'> 
      <div className='headings'> 
        <h3 className='title'>Jenny’s Closets - The winter top for female, green</h3>
        <div className='stars-and-reviews'> <span>⭐⭐⭐⭐⭐</span> <span className='reviewsSpan'>134 Reviews</span> </div>
        <div className='Price-Wrapper' ><span className='Price'>59$</span>  <span className='priceBefore'>89$</span> </div>
       <div className='features'>  <p className='feat-head'>Features</p> <ul className='features_wrapper_un'><li >Made with full cotton</li> <li>Slim fit for any body</li><li>Quality control by JC</li>  </ul>  </div>

      <div className='Vue_btns'> <button className='AddCartBtn'>Add to Cart</button> <button className='heartBtn'>♥</button> </div>
       </div>
     
       </div>

    </div>
  )
}

export default ProductView