import React from 'react';
import "./ForgotPassword.css";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import Footer from "../../../Layouts/footer/Footer";
import toast, { Toaster } from 'react-hot-toast';
import {
  MDBInput,
  MDBBtn
} from "mdb-react-ui-kit"
const ForgotPassword = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      if (!isValidEmail(values.email)) {
        toast.error('Kindly fill all the fields');
      }

    },
  });

  const isValidEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <section className='Forgot_wrapper'>
        <Link className='logo_link' to="/">
          <img alt='mainlogo' src='https://svgshare.com/i/vGt.svg' title='logo' />
        </Link>
        <form onSubmit={formik.handleSubmit} className='forgor-form'>
          <h3 className='forgor-head'>Update Password</h3>

          <div className='alert_wrapper_change_event'>
            <p className='forgor-tag'>No Worries,We'll send you instructions in your email</p>
            <p style={{ color: "#848484", fontWeight: "bold", fontSize: '13px', textAlign: "center" }}>Note You cannot Change Password Again After 20 Days.</p>
            <MDBInput  {...formik.getFieldProps("email")}
              type='email'
              placeholder='Email'
              className='forgor-inp' size="lg" label="Enter your Email" />
          </div>
          {/*  add this bootsrap element inside */}
          <div className='padding_alert' role="alert">
            We've sent Link to your email {formik.values.email} </div>
          <MDBBtn style={{ backgroundColor: "#4BB497", border: "0px" }} className='recover_btn custom-button-color' type="submit" block size="lg">
            Recover Password
          </MDBBtn>

        </form>
      </section>
      <Footer />
      <Toaster /> {/* React-hot-toast component */}
    </div>
  );
};

export default ForgotPassword;
