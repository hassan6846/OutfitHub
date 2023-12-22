import { React, useEffect } from 'react'
import { Toaster, toast } from "react-hot-toast"
import { FaLockOpen } from "react-icons/fa";
import {
  MDBBtn,
  MDBInput
} from "mdb-react-ui-kit"
import { Link } from 'react-router-dom'
// css modules
import "./ResetPassword.css"
const ResetPassword = () => {
  useEffect(() => {
    toast.success("hello")

  })
  return (
    <div className='reset_section'>


      <Toaster />
      <div className='form_wrapper_reset-password'>
        <p className='reset-password_head'>Set new password</p>
        <p className='reset-password_lenin'>Must be at least 8 chracter long</p>
        <form className='reset_form_inp'>
          <MDBInput icon={<FaLockOpen />} type="password" label="Password" className='reset-password' />
          <MDBInput icon={<FaLockOpen />} type="password" label="Confirm password" className='reset-password_confirm' />
          <MDBBtn type="submit" className='reset-btn_form' style={{ backgroundColor: "#4BB497" }} block size='lg'>Reset password</MDBBtn>
          <Link to="/login" style={{ textAlign: "center", marginTop: "1rem" }}> <i class="fas fa-arrow-left"></i> Back to login</Link>
        </form>
      </div>
    </div>
  )

}

export default ResetPassword