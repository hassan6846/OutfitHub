import React, { useState } from 'react'
import "./AddProduct.css"
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit"
import { ImPriceTag } from "react-icons/im"
import { RxDimensions } from "react-icons/rx"
import { BsBoxSeamFill, BsImages } from "react-icons/bs"
import Form from "react-bootstrap/Form"
import {TagsInput} from "react-tag-input-component"

const AddProduct = () => {
const [Images,setImages]=useState([])
  return (
    <div className='addproduct-wrapper'>

      <div className='addproduct_container'>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Add Product <span></span> </p></div>


      {/* ADD OTHER COMPONENTS BELLOW  is Card of Box shadow*/}
      <div className='add_product_card_main'>
        <div className='add_product_1_flex'>
          <p className='product_setting_head'>Product Settings</p>
          <p style={{ color: '#848484', fontSize: "0.8rem", fontWeight: "500" ,display:"flex",columnGap:"1rem",alignItems:"center"}}>Product Images <input type="file" multiple="true" /></p>
          {/* Image Preview GRid */}
          <div className='images_upload_grid'>
            <div className='upload_prview_card ' style={{position:"relative"}}>  <img  style={{width:"100%",height:"100%",position:"absolute",objectFit:"cover"}} src="https://res.cloudinary.com/diml3oeaw/image/upload/v1698854628/trendImg2_jik4zs.jpg" alt="product-image-context"/> <BsImages /> <p>Browse Images</p> </div>
            <div className='upload_prview_card' style={{position:"relative"}}>   <img  style={{width:"100%",height:"100%",position:"absolute",objectFit:"cover"}} src="https://res.cloudinary.com/diml3oeaw/image/upload/v1698854628/trendImg2_jik4zs.jpg" alt="image-image-upload"/>  <BsImages /> <p>Browse Images</p> </div>
            <div className='upload_prview_card_column' style={{ display: "flex", flexDirection: "column", rowGap: "1rem" }}>

              <div style={{ display: "flex", position:"relative", flexDirection: "column", rowGap: "1rem", alignItems: "center", width: "100%", height: "50%", justifyContent: "center", backgroundColor: "#F9F9F9", border: '1px dashed gray' }}>  <img  style={{width:"100%",height:"100%",position:"absolute",objectFit:"cover"}} src="https://res.cloudinary.com/diml3oeaw/image/upload/v1698854628/trendImg2_jik4zs.jpg" alt="product-image-upload"/>  <BsImages /> <p>Browse Images</p> </div>
              <div style={{ display: "flex", position:"relative", flexDirection: "column", rowGap: "1rem", alignItems: "center", width: "100%", height: "50%", justifyContent: "center", backgroundColor: "#F9F9F9", border: '1px dashed gray' }}>  <img  style={{width:"100%",height:"100%",position:"absolute",objectFit:"cover"}} src="https://res.cloudinary.com/diml3oeaw/image/upload/v1698854628/trendImg2_jik4zs.jpg" alt="product-image-upload"/>  <BsImages /> <p>Browse Images</p> </div>
            </div>
          </div>
          {/* Descriptions Container */}
          <div style={{ width: "100%" }}>
            <div>
              <h3 style={{ color: "#848484", fontSize: "0.9rem" }} className="user_name">Description </h3>
              <p className="user_name_ans">
                <MDBTextArea style={{ resize: "none" }} rows={8} size="lg" placeholder="Product Description.." />
              </p>
            </div>
          </div>
        </div>
        {/* Onlyforms */}
        <div className='add_product_2_flex'>
          <div>
            <h3 style={{ color: "#848484" }} className="user_name">Product Name </h3>
            <p className="user_name_ans">
              <MDBInput size="lg" placeholder="Full Name" />
            </p>
          </div>
          {/* row 1 */}
          <div style={{ width: "100%", }} className='row_inputs'>
            <div>
              <h3 style={{ color: "#848484" }} className="user_name">Brand Name </h3>
              <p className="user_name_ans">
                <MDBInput size="lg" placeholder="Brand." />
              </p>
            </div>


          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Regular Price. </h3>
              <p className="user_name_ans">
                <MDBInput type="number" size="lg" placeholder="Regular Market Price." />
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Sale Price </h3>
              <p className="user_name_ans">
                <MDBInput type="number" size="lg" placeholder="Sale Price" />
              </p>
            </div>
          </div>

          {/* ROw 3 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Category</h3>
              <p className="user_name_ans">
                <Form.Select style={{ width: "100%" }} aria-label="Default select example">
                  <option> None</option>
                  <option value="1">Men</option>
                  <option value="2">Women</option>
                  <option value="3">Girls</option>
                  <option value="4">Boys</option>
                  <option value="5">Babies</option>
                </Form.Select>
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">SubCategory </h3>
              <p className="user_name_ans">
              <TagsInput  />
              </p>
            </div>
          </div>
          {/* Row 4 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Product Promotions</h3>
              <p className="user_name_ans">
                <Form.Select style={{ width: "100%" }} aria-label="Default select example">

                  <option value="1">In Stock</option>
                  <option value="2">Out of Stock</option>
                  <option value="3">On Demand</option>
                  <option value="4">Temporary Unavailable</option>
                  <option value="5">Low Stock</option>

                </Form.Select>
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Stock Status</h3>
              <p className="user_name_ans">
                <Form.Select style={{ width: "100%" }} aria-label="Default select example">
                  <option value="1">Trending</option>
                  <option value="2">Best Seller</option>
                  <option value="3">Limited Time Only</option>
                  <option value="5">New Arrivals</option>
                </Form.Select>
              </p>
            </div>
          </div>
          {/* Row 5 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Unit</h3>
              <p className="user_name_ans">
                <Form.Select style={{ width: "100%" }} aria-label="Default select example">
                  <option> Pieces</option>
                  <option value="1">Boxes</option>
                  <option value="2">Kilogram</option>
                  <option value="3">Dozen</option>
                  <option value="4">Ounce</option>

                </Form.Select>
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Quantity /InStock </h3>
              <p className="user_name_ans">
                <MDBInput size="lg" placeholder="Quantity" />
              </p>
            </div>
          </div>
          {/* Row 6  */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name"> Dimensions/L*W*H <RxDimensions /> </h3>
              <p className="user_name_ans">
                <MDBInput size="lg" placeholder="Enter Dimensions" />
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Weight in kgs <BsBoxSeamFill /> </h3>
              <p className="user_name_ans">
                <MDBInput size="lg" placeholder="Enter Weight" />
              </p>
            </div>
          </div>
          {/* Row 7 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">#Tags <ImPriceTag /> </h3>
              <p className="user_name_ans">
              <TagsInput />
              </p>
            </div>
          </div>


          {/* Row 9  */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <MDBBtn style={{ width: "100%", padding: "0.7rem", backgroundColor: '#4BB497' }}>Publish Product</MDBBtn>
            </div>
          </div>

          {/* 2 */}

        </div>

      </div>
      {/*  */}
    </div>
  )
}

export default AddProduct