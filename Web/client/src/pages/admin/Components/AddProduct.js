import React from 'react'
import "./AddProduct.css"
import {MDBInput} from "mdb-react-ui-kit"

const AddProduct = () => {
  return (
    <div className='addproduct-wrapper'>

      <div className='addproduct_container'>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Add Product <span></span> </p></div>


      {/* ADD OTHER COMPONENTS BELLOW  is Card of Box shadow*/}
      <div className='add_product_card_main'>
        <div className='add_product_1_flex'>
          <p className='product_setting_head'>Product Settings</p>
          <p style={{ color: '#848484', fontSize: "0.8rem", fontWeight: "500" }}>Product Images</p>
          {/* Image Preview GRid */}
          <div className='images_upload_grid'>

          </div>

        </div>
        {/* Onlyforms */}
        <div className='add_product_2_flex'>
        <div>
          <h3 className="user_name">Full Name </h3>
          <p className="user_name_ans">
            <MDBInput size="lg" placeholder="Full Name" />
          </p>
        </div>
        {/* 2 */}
        
        </div>

      </div>
      {/*  */}
    </div>
  )
}

export default AddProduct