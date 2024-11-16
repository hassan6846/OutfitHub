
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
import { toast } from 'react-hot-toast'
import { ENDPOINT } from '../../../api/Endpoint'
import axios from 'axios'
import { useSelector } from 'react-redux'





const AddProduct = () => {
  const id = useSelector((state) => state.user.userid)
  const [images, setImages] = useState([]);
  const [description, setdescription] = useState("")
  const [title, settitle] = useState('')
  const [brand, setbrand] = useState('')
  const [regularprice, Setregularprice] = useState('')
  const [saleprice, setsaleprice] = useState('')
  const [tags, setTags] = useState([])
  const [weight, Setweight] = useState("")
  const [dimensions, setdimensions] = useState('')
  const [category, Setcategory] = useState('')
  const [subCategory, setsubCategory] = useState('')
  // eslint-disable-next-line
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line
  const [message, setMessage] = useState('');

  const [quantity, setQuantity] = useState('')
  const [promotion, setpromotion] = useState('')
  const [status, setStatus] = useState('')
  //selectables
  const [unit, setUnit] = useState('')
  // eslint-disable-next-line
  const [loading, isloading] = useState(false)
  //HandleFileChange...
  // HandleFileChange with base64 conversion
  const HandleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    setMessage('You can only upload up to 4 images.');
    setOpen(true);
    if (files.length === 2) {

      toast.success("Good Current System only support 2 Images only", {
        position: "bottom-right"
      })

    }
    if (files.length > 4) {

      toast.error("Current System only Support 2 images ", {
        position: "bottom-right"
      })
    }


    // Convert each file to base64
    const newImages = await Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            resolve({
              id: file.name,
              url: URL.createObjectURL(file), // For preview
              base64: reader.result, // Base64 encoded
              file: file,
            });
          };
          reader.onerror = (error) => reject(error);
        });
      })
    );

    setImages((prevImages) => [...prevImages, ...newImages]);
    console.log(images)
  };
  ///clear State
  const ClearState = async () => {
    setImages([])
  }

  // Handle Upload
  const HandleUpload = async () => {
    try {
      const response = await axios.post(
        `${ENDPOINT}/admin/product/upload`,
        {
          id: id,
          title: title,
          brand: brand,
          img1: "",
          img2: "",
          description: description,
          regprice: regularprice,
          saleprice: saleprice,
          category: category,
          subcategory: subCategory,
          promotion: promotion,
          status: status,
          qty: quantity,
          unit: unit,
          weight: weight,
          dimensions: dimensions
        }, // Add your request payload here if needed
        {
          headers: {
            'Content-Type': 'application/json', // Set Content-Type to application/json
            // You can also add other headers, like authorization if needed
          },
          withCredentials:true
        }
      );

      // Handle the response, maybe log it or do something with the result
      console.log('Upload successful', response.data);
    } catch (error) {
      console.error('Upload failed', error);
    }
  };


  return (
    <div className='addproduct-wrapper'>

      <div className='addproduct_container'>
        <p style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }} className='wishlist_page_head'>Add Product <span>

        </span> </p></div>


      {/* ADD OTHER COMPONENTS BELLOW  is Card of Box shadow*/}
      <div className='add_product_card_main'>
        <div className='add_product_1_flex'>
          <p className='product_setting_head'>Product Settings
            <IconButton onClick={ClearState} >
              <CachedIcon />
            </IconButton> </p>
          <p style={{ color: '#848484', fontSize: "0.8rem", fontWeight: "500", display: "flex", columnGap: "1rem", alignItems: "center" }}>Product Images <input type="file" multiple onChange={HandleFileChange} /></p>
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
              <MDBBtn onClick={() => HandleUpload()} style={{ width: "100%", padding: "0.7rem", backgroundColor: '#4BB497' }}>Publish Product</MDBBtn>
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