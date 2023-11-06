import React from 'react'
import "./Orders.css"
import { FaEdit, FaEye } from "react-icons/fa"

import Checkbox from '@mui/material/Checkbox';
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { BsFillCaretDownFill } from "react-icons/bs"

import { Link } from 'react-router-dom';
 const ImageAddress = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const Orders = () => {
  return (
    <div className='dropdown_wrapper_datagrid'>
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Orders <span></span> </p>


      <div className='orderDatagrid'>

        {/* product Image */}
        <div className='Image_description'>

          <Checkbox className='datagridCheck' style={{ marginRight: "0.5rem" }} />
          <LazyLoadImage            wrapperClassName="imageMain_product_order"  effect="opacity" className='product_imageMain' src={ImageAddress} alt='img'  />
          <p  className="datagrid_title"style={{ marginBottom: "0" }}>Fuji Film 2k Camera</p>
          <p className="mobile_sku" style={{ marginBottom: "0" }}>Tr-001</p>
        </div>
        <p className='desktop_sku' style={{ marginBottom: "0" }}>SKU-001</p>
        <p className='stock_status' style={{ marginBottom: "0" }}>InStock <span style={{ color: "red" }}>(2)</span></p>
        <p className='datagrid_category' style={{ marginBottom: "0" }}>Electronics</p>
        <p className='datagrid_sub' style={{ marginBottom: "0" }}>Camera</p>
      
        <p className='price_datagrid' style={{ marginBottom: "0" }}>254$ <span style={{ textDecoration: "line-through", fontSize: "13px" }}>300$</span></p>
        <p className='Last_updated' style={{ marginBottom: "0" }}>Last Modified: <br /> 28/4/2023</p>
        {/* Actions */}
        <div className='action_Wrapper'>
          <Link><FaEdit size={20} /></Link>
          <Link><FaEye size={20} /></Link>
          <Link><BsFillCaretDownFill size={20} /></Link>
         
        </div>
      </div>

    </div>
    <div className='dropdown_view'></div>
    </div>

  )
}

export default Orders