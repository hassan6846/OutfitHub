import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import './Login.css';
import Footer from '../../Layouts/footer/Footer';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const useNav = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '@gmail.com',
      password: '',
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      if (values.email === '') {
        toast.error('Please fill the email field');
        return;
      }
    else if (values.password===""){
      toast.error('Please fill the password field');
      return;
    }
    else if (values.password.length<7){
      toast.error('Please fill the correct password you might be joking');
      return;
    }
      alert(JSON.stringify(values));
   
    },
  });

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div>
     

      <section className="login_wrapper-100">
         <div><Toaster 
         /></div>
        <Link to="/" className="login-logo">
          <img alt="company" src="./logo.svg" />
        </Link>
        <div className="login-container">
          <p className="login-heading">Login Account</p>
          <form onSubmit={formik.handleSubmit} className="login-form">
            <input
              {...formik.getFieldProps('email')}
              className="otp-input"
              type="email"
              placeholder="Enter Email"
            />

            <input
              {...formik.getFieldProps('password')}
              className="otp-input"
              type="password"
              placeholder="Enter Password"
            />

            <button type="submit" className="otp-submit">
              Login
            </button>
          </form>
          <p className="or">or</p>
          <Link to="/signup" className="register">
            Create Account Instead
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
