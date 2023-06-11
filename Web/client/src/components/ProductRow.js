import React from 'react'
import axios from 'axios'
// css
import "./ProductRow.css"
import ProductCard from './Card'

// components

const ProductRow = () => {
    axios.get("https://dummyjson.com/products")
    .then(function(response){
        console.log(response.data.products[0])
    })
    .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  return (
    <div className='ProductRow'>
        <div className='Product_Filter'></div>
        <div className='ProductCards_Container'>
        <div className='card_menu'></div>
        <div className='ShopCard-Wrapper'>
            <ProductCard price="29" title="this is title" />
        </div>
        </div>
    </div>
  )
}

export default ProductRow