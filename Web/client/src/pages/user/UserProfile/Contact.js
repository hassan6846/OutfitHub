import React from 'react'
import {MDBBtn, MDBInput,MDBTextArea } from "mdb-react-ui-kit"
import "./Contact.css"
const Contact = () => {
  return (
    <div className='container_CONTACT'>
    <p className='contact_us'>Contact Us.</p>
    <p className='contact_us_sub'>Feel Free to Contact Us.</p>
    <div className='contact_inputs_form'>
    <MDBInput label='Name'  type='text' size='lg' />
    <MDBInput label='Email'  type='text' size='lg' />
    <MDBTextArea label='Message' id='textAreaExample' rows={10} />
    <MDBBtn>Submit</MDBBtn>
    </div>
    </div>
  )
}

export default Contact