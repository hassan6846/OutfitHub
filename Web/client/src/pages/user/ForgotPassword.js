import React from 'react';
import "./ForgotPassword.css";
import { useFormik } from 'formik';
import { Link } from "react-router-dom";
import Footer from "../../Layouts/footer/Footer";
import toast, { Toaster } from 'react-hot-toast';

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
      } else {
        // Perform password recovery logic here
        // Display success message or navigate to another page
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
          <h3 className='forgor-head'>Forgot Password</h3>
          <p className='forgor-tag'>No Worries,We'll send you instructions in your email</p>
          <input
            {...formik.getFieldProps("email")}
            type='email'
            placeholder='Email'
            className='forgor-inp'
          />
          <button className='forgor-btn' type="submit">Recover Password</button>
        </form>
      </section>
      <Footer/>
      <Toaster /> {/* React-hot-toast component */}
    </div>
  );
};

export default ForgotPassword;
