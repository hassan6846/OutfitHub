import React from 'react'
import "./Orders.css"
import { FaEdit, FaEye } from "react-icons/fa"
import { MDBBadge } from "mdb-react-ui-kit"
import Checkbox from '@mui/material/Checkbox';
import {LazyLoadImage} from "react-lazy-load-image-component"
import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Link } from 'react-router-dom';
const ImageAddress = "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
const Orders = () => {
  return (
    <div>
      <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Orders <span></span> </p>


      <div className='orderDatagrid'>

        {/* product Image */}
        <div className='Image_description'>

          <Checkbox style={{ marginRight: "1rem" }} />
          <LazyLoadImage effect="opacity"  className='product_imageMain' src={ImageAddress} alt='img' />
          <p style={{ marginBottom: "0" }}>Fuji Film 2k Camera</p>
        </div>
        <p style={{ marginBottom: "0" }}>SKU-001</p>
        <p style={{ marginBottom: "0" }}>InStock <span style={{ color: "red" }}>(2)</span></p>
        <MDBBadge style={{ marginBottom: "0" }}>Electronics</MDBBadge>
        <p style={{ marginBottom: "0" }}>Camera</p>
        <p style={{ marginBottom: "0" }}>#Camera</p>
        <p style={{ marginBottom: "0" }}>254$ <span style={{ textDecoration: "line-through", fontSize:"13px" }}>300$</span></p>
        <p style={{ marginBottom: "0" }}>Last Modified: <br /> 28/4/2023</p>
        {/* Actions */}
        <div className='action_Wrapper'><Link><FaEdit size={20} /></Link>
          <Link><FaEye size={20} /></Link></div>
      </div>

    </div>

  )
}

export default Orders