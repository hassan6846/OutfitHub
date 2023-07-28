import React from 'react'
import { Link } from "react-router-dom"
import "./AllProducts.css"

import { CgArrowsExchangeAltV } from "react-icons/cg";
const AllProducts = () => {
  return (
    <div className='allproduct_wrapper'>
      <div className='product_container'>
        <div className='product_heading_cont'>
          <p className='product-title'>Products</p>
          {/*
        
        add drop down btns here with humanble styles and dropdown  
       also neeeded to add the skeleton loading
       ways to allign tables
       work on product api and adding orders and saving orders when user is not in login session yeah it is local stoage 
       make the whole app responsive 
       add private route functioanltiy
       add routes not accesble before not logged in 
       implement jwt token
       */}
          <div className='product_actions'>
            <Link className='add_product_link'>Most Sell</Link>
            <Link to="/admin/products/add" className='add_product_link'>Add Product</Link>
          </div>
     
        </div>
        <div className='tabless'>
        <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">No</th>
      <th scope="col">Images <CgArrowsExchangeAltV className='cgArrow'/></th>
      <th scope="col">Product Name  <CgArrowsExchangeAltV className='cgArrow'/></th>
      <th scope="col">Price  <CgArrowsExchangeAltV className='cgArrow'/></th>
      <th scope="col">Status  <CgArrowsExchangeAltV className='cgArrow'/></th>
      <th scope="col">Selled  <CgArrowsExchangeAltV className='cgArrow'/></th>
      <th scope="col">Views  <CgArrowsExchangeAltV className='cgArrow'/></th>
      <th scope="col">Earnings  <CgArrowsExchangeAltV className='cgArrow'/></th>
      <th scope="col">Actions  <CgArrowsExchangeAltV className='cgArrow'/></th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <th scope="row">1</th>
      <td><img className='productIMG_ALL' src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='product_img'/></td>
      <td><p className='product_name'>White Android Watch With 2 bands Free..</p></td>
      <td><p className='product_price'><span>$</span>12</p></td>
      <td className='productStatus_true'><p className='status_quo'> <span className='stock_amount'>(3)</span> In stock</p></td>
      <td ><p className='product_selled'>3</p></td>
      <td ><p className='product_views'>300</p></td>
      <td ><p className='product_earned'><span className='dolor'>$</span>36</p></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td><img className='productIMG_ALL' src='https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80' alt='product_img'/></td>
      <td><p className='product_name'>White Android Watch With 2 bands Free..</p></td>
      <td><p className='product_price'><span>$</span>12</p></td>
      <td className='productStatus_true'><p className='status_quo'> <span className='stock_amount'>(3)</span> In stock</p></td>
      <td ><p className='product_selled'>3</p></td>
      <td ><p className='product_views'>300</p></td>
      <td ><p className='product_earned'><span className='dolor'>$</span>36</p></td>
    </tr>
  </tbody>
</table>

        </div>
      </div>
    </div>
  )
}

export default AllProducts