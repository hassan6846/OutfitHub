import React from 'react';
import "./ResetPassword.css";
import { Link } from "react-router-dom";
import Footer from "../../Layouts/footer/Footer";
import toast, { Toaster } from "react-hot-toast";
import { useFormik } from "formik";

const ResetPassword = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "", // Add confirmPassword field for password confirmation
    },
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        toast.error("Passwords do not match");
      }
      if(values.password.length>8&&values.confirmPassword.length>8){
        toast.error("Passsword Should be atleast 8 Character long")
      }
      

    },
  });

  return (
    <div>
      <section className='reset-wrapper'>
        <Toaster />
        <Link className='logo_link' to="/">
          <img alt='mainlogo' src='https://svgshare.com/i/vGt.svg' title='logo' />
        </Link>
        <form onSubmit={formik.handleSubmit} className='reset-Passform'>
          <h3 className='reset-head'>Enter New Password</h3>
          <input
            {...formik.getFieldProps("password")}
            className='reset-inp'
            type='password'
            placeholder='New Password'
          />
          <input
            {...formik.getFieldProps("confirmPassword")} // Bind confirmPassword field
            className='reset-inp'
            type='password'
            placeholder='Repeat Password'
          />
          <button type="submit" className='forgor-btn'>Update Password</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default ResetPassword;
