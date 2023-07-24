import React from 'react'
import "./AddProduct.css"
const AddProduct = () => {
  return (
    <div className='addproduct-wrapper'>
      <div>
        <label for="inp" >ProductName</label><br/>
        <input  name='inp' placeholder='Product Name'/>
      </div>
    </div>
  )
}

export default AddProduct