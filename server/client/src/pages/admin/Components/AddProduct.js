
import "./AddProduct.css"
import React, { useState } from 'react'
import { MDBInput, MDBBtn, MDBTextArea } from "mdb-react-ui-kit"
import { ImPriceTag } from "react-icons/im"
import { RxDimensions } from "react-icons/rx"
import { BsBoxSeamFill, BsImages } from "react-icons/bs"
import Form from "react-bootstrap/Form"
import { TagsInput } from "react-tag-input-component"
import CachedIcon from '@mui/icons-material/Cached';
import IconButton from '@mui/material/IconButton';

import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"





const AddProduct = () => {
  // eslint-disable-next-line
  const navigate = useNavigate()
  // eslint-disable-next-line
  const id = useSelector((state) => state.user.userid)
  // eslint-disable-next-line
  const [images, setImages] = useState([]);
  // eslint-disable-next-line
  const [description, setdescription] = useState("")
  // eslint-disable-next-line
  const [title, settitle] = useState('')
  // eslint-disable-next-line
  const [brand, setbrand] = useState('')
  // eslint-disable-next-line
  const [regularprice, Setregularprice] = useState('')
  // eslint-disable-next-line
  const [saleprice, setsaleprice] = useState('')
  // eslint-disable-next-line
  const [tags, setTags] = useState([])
  // eslint-disable-next-line
  const [weight, Setweight] = useState("")
  // eslint-disable-next-line
  const [dimensions, setdimensions] = useState('')
  // eslint-disable-next-line
  const [category, Setcategory] = useState('')
  // eslint-disable-next-line
  const [subCategory, setsubCategory] = useState('')
  // eslint-disable-next-line
  // eslint-disable-next-line
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line
  // eslint-disable-next-line
  const [message, setMessage] = useState('');
  // eslint-disable-next-line
  const [quantity, setQuantity] = useState('')
  // eslint-disable-next-line
  const [promotion, setpromotion] = useState('')
  // eslint-disable-next-line
  const [status, setStatus] = useState('')
  // eslint-disable-next-line
  const [unit, setUnit] = useState('')
  // eslint-disable-next-line
  // eslint-disable-next-line
  const [loading, isloading] = useState(false)
  // eslint-disable-next-line


  // Check if all required fields are filled
  const isFormValid = title && description && regularprice && saleprice;

  return (
    <div className='addproduct-wrapper'>

      <div className='addproduct_container'>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Add Product <span>

        </span> </p></div>


      {/* ADD OTHER COMPONENTS BELLOW  is Card of Box shadow*/}
      <div className='add_product_card_main'>
        <div className='add_product_1_flex'>
          <p className='product_setting_head'>Product Settings
            <IconButton >
              <CachedIcon />
            </IconButton> </p>
          <p style={{ color: '#848484', fontSize: "0.8rem", fontWeight: "500", display: "flex", columnGap: "1rem", alignItems: "center" }}>Product Images <input type="file" multiple /></p>
          {/* Image Preview GRid */}
          <div className='images_upload_grid'>
            {images.slice(0, 2).map((image, index) => (
              <div className='upload_prview_card' style={{ position: "relative" }} key={index}>
                {images.length ? ( // Check if the image exists
                  <img
                    style={{ width: "100%", height: "100%", position: "absolute", objectFit: "cover" }}
                    src={image.url} // Assuming image has a 'url' property
                    alt={`image-${index}`}
                  />
                ) : (
                  <div>
                    <BsImages />
                    <p>Browse Images</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Descriptions Container */}
          <div style={{ width: "100%" }}>
            <div>
              <h3 style={{ color: "#848484", fontSize: "0.9rem" }} className="user_name">Description </h3>
              <p className="user_name_ans">
                <MDBTextArea style={{ resize: "none" }} onChange={(event) => setdescription(event.target.value)} rows={8} size="lg" placeholder="Product Description.." />
              </p>
            </div>
          </div>
        </div>
        {/* Onlyforms */}
        <div className='add_product_2_flex'>
          <div>
            <h3 style={{ color: "#848484" }} className="user_name">Product Name </h3>
            <p className="user_name_ans">
              <MDBInput onChange={(event) => settitle(event.target.value)} size="lg" placeholder="Product Name" />
            </p>
          </div>
          {/* row 1 */}
          <div style={{ width: "100%", }} className='row_inputs'>
            <div>
              <h3 style={{ color: "#848484" }} className="user_name">Brand Name </h3>
              <p className="user_name_ans">
                <MDBInput onChange={(event) => setbrand(event.target.value)} size="lg" placeholder="Brand." />
              </p>
            </div>


          </div>
          {/* Row 2 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Regular Price. </h3>
              <p className="user_name_ans">
                <MDBInput type="number" onChange={(event) => Setregularprice(event.target.value)} size="lg" placeholder="Regular Market Price." />
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Sale Price </h3>
              <p className="user_name_ans">
                <MDBInput type="number" onChange={(event) => setsaleprice(event.target.value)} size="lg" placeholder="Sale Price" />
              </p>
            </div>
          </div>

          {/* ROw 3 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Category</h3>
              <p className="user_name_ans">
                <Form.Select onChange={(event) => Setcategory(event.target.value)} style={{ width: "100%" }} aria-label="Default select example">
                  <option value="uncatogrized"> None</option>
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="girls">Girls</option>
                  <option value="boys">Boys</option>
                  <option value="babies">Babies</option>
                </Form.Select>
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">SubCategory </h3>
              <p className="user_name_ans">
                <MDBInput onChange={(event) => setsubCategory(event.target.value)} size="lg" placeholder="SubCategory" />

              </p>
            </div>
          </div>
          {/* Row 4 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Product Promotions</h3>
              <p className="user_name_ans">
                <Form.Select onChange={(event) => setStatus(event.target.value)} style={{ width: "100%" }} aria-label="Default select example">

                  <option value="instock">In Stock</option>
                  <option value="outofstock">Out of Stock</option>
                  <option value="ondemand">On Demand</option>
                  <option value="unavailable">Temporary Unavailable</option>
                  <option value="lowstock">Low Stock</option>

                </Form.Select>
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Stock Status</h3>
              <p className="user_name_ans">
                <Form.Select onChange={(event) => setpromotion(event.target.value)} style={{ width: "100%" }} aria-label="Default select example">
                  <option value="trending">Trending</option>
                  <option value="bestseller">Best Seller</option>
                  <option value="limited">Limited Time Only</option>
                  <option value="newarrival">New Arrivals</option>
                </Form.Select>
              </p>
            </div>
          </div>
          {/* Row 5 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Unit</h3>
              <p className="user_name_ans">
                <Form.Select onChange={(event) => setUnit(event.target.value)} style={{ width: "100%" }} aria-label="Default select example">
                  <option value="piece"> Pieces</option>
                  <option value="boxes">Boxes</option>
                  <option value="kg">Kilogram</option>
                  <option value="dozen">Dozen</option>
                  <option value="ounce">Ounce</option>

                </Form.Select>
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Quantity /InStock </h3>
              <p className="user_name_ans">
                <MDBInput type="number" onChange={(event) => setQuantity(event.target.value)} size="lg" placeholder="Quantity" />
              </p>
            </div>
          </div>
          {/* Row 6  */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name"> Dimensions/L*W*H <RxDimensions /> </h3>
              <p className="user_name_ans">
                <MDBInput onChange={(event) => setdimensions(event.target.value)} size="lg" placeholder="Enter Dimensions" />
              </p>
            </div>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">Weight in kgs <BsBoxSeamFill /> </h3>
              <p className="user_name_ans">
                <MDBInput onChange={(event) => Setweight(event.target.value)} size="lg" placeholder="Enter Weight" />
              </p>
            </div>
          </div>
          {/* Row 7 */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <h3 style={{ color: "#848484" }} className="user_name">#Tags <ImPriceTag /> </h3>
              <p className="user_name_ans">
                <TagsInput disabled={true} placeHolder='The Auto Taging feature is added so dont need to manually add the tags on Products' value={tags} onChange={setTags} />
              </p>
            </div>
          </div>


          {/* Row 9  */}
          <div style={{ display: "flex", width: "100%", columnGap: "0.4rem", flexDirection: "row-reverse" }} className='row_inputs'>
            <div style={{ width: "100%" }}>
              <MDBBtn type="submit" disabled={!isFormValid} style={{ width: "100%", padding: "0.7rem", backgroundColor: '#4BB497' }}>Publish Product</MDBBtn>
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