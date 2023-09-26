import React from 'react'
import { MDBInput, MDBTextArea, MDBBtn } from "mdb-react-ui-kit"
import "./Vendor.css"
const Vendor = () => {
  return (
    <>
      <p className='user_vendor_p'>Apply For Membership</p>
      <p className='vendor_note'>Note: Kindly fill the form completely. Otherwise, your application will be rejected.</p>
      <div className='vendor_wrapper'>
        <div className='vendor_form'>
          <MDBInput label="Name" />
          <MDBInput label="Email" />
          <MDBInput label="Password" />
          <MDBInput label="Confirm Password" />
          <MDBInput label="Phone/Whatsapp Number" />
          <p className='text_area_heading'>Explain Your Selling Strategy</p>
          <MDBTextArea label="Please Links to the products you might sell." rows={6} />
          <MDBBtn style={{ backgroundColor: "#4BB497" }}>Submit</MDBBtn>
        </div>
      </div>
    </>
  )
}

export default Vendor