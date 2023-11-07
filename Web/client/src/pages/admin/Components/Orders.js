import React from 'react'
import "./Orders.css"
import { FaEdit, FaEye } from "react-icons/fa"

import Checkbox from '@mui/material/Checkbox';
import { LazyLoadImage } from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { BsFillCaretDownFill } from "react-icons/bs"

import { Link } from 'react-router-dom';
import { useState } from "react"
 const ImageAddress = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const Orders = () => {

  const [collapsable,setCollapsable]=useState(true)
  function collapsableToggle() {
    setCollapsable(!collapsable)
}
const dropdown_collapsableClass = collapsable ? "dropdown_view_toggle" : "dropdown_view"
  return (
    <div className='dropdown_wrapper_datagrid'>
  
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Orders <span></span> </p>

     <section>
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
        <p className='datagrid_category' style={{ marginBottom: "0" ,color:"rgb(0,107,255)",fontWeight:"500"}}>Electronics</p>
        <p className='datagrid_sub' style={{ marginBottom: "0" }}>Camera</p>
      
        <p className='price_datagrid' style={{ marginBottom: "0" }}>254$ <span style={{ textDecoration: "line-through", fontSize: "13px" }}>300$</span></p>
        <p className='Last_updated' style={{ marginBottom: "0" }}>Last Modified: <br /> 28/4/2023</p>
        {/* Actions */}
        <div className='action_Wrapper'>
          <Link><FaEdit size={20} /></Link>
          <Link><FaEye size={20} /></Link>
          <Link onClick={collapsableToggle}><BsFillCaretDownFill size={20} /></Link>
         
        </div>
      </div>

{/* collapsble */}
    <div className={dropdown_collapsableClass}>
      <div className='dropdown_collapsable'> 
        <div className='product_table_head'style={{fontSize:"1.2rem"}}>Product</div>
        <div className='image_table'><img alt="product_img" className='product_table_image' src={ImageAddress}/> <p style={{margin:"0"}}>Xiaomi NoteBook </p></div>
        <div className='product_table_head'>Sku:<span style={{fontSize:'13px',fontWeight:"500"}}>TR-001</span></div>
        <div className='product_table_head'>Stock status:<span style={{color:"#4BB497",fontWeight:"bold"}}>In Stock</span> (120)</div>
        <div className='product_table_head'>Price: <span style={{fontSize:'13px',fontWeight:"500"}}>$254</span></div>
        <div className='product_table_head'>Category:<span style={{color:"rgb(0,107,255)",fontWeight:"bold"}}>Electronics</span></div>
      </div>
      {/* ends here */}
    </div>

    </section>
    </div>

  )
}

export default Orders