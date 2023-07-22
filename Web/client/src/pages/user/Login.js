import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import './Login.css';
import Footer from '../../Layouts/footer/Footer';
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";

const Login = () => {
  const [isSubmitting, setIsSubmitting] = useState(false); // Track login submission

  const formik = useFormik({
    initialValues: {
      email: '@gmail.com',
      password: '',
    },
    validateOnBlur: true,
    validateOnChange: true,
    validate: (values) => {
      const errors = {};

      if (!values.email) {
        errors.email = 'Please fill the email field';
      }

      if (!values.password) {
        errors.password = 'Please fill the password field';
      }

      if (values.password.length < 7) {
        errors.password = 'Please valid Password You might be joking';
      }

      return errors;
    },
    onSubmit: async (values) => {
      if (!formik.isValid) {
        return;
      }

      setIsSubmitting(true); // Start login submission

      const api = axios.create({
        baseURL: "http://localhost:3001"
      });

      try {
        const response = await api.post("/api/v1/login", {
          email: values.email,
          password: values.password
        });

        console.log(response);

        // Handle successful login
        toast.success('Successfully logged in');
      } catch (error) {
        console.log(error);

        if (error.response && error.response.data && error.response.data.msg) {
          toast.error(error.response.data.msg);
        } else if (error.message) {
          toast.error(error.response.data.Msg);
        } else {
          toast.error('Error when logging in');
        }
      } finally {
        setIsSubmitting(false); // End login submission
      }
    },
  });

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  return (
    <div>
      <section className="login_wrapper-100">
        <div>
          <Toaster />
        </div>
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
            {formik.touched.email && formik.errors.email && (
              <div className="error">{formik.errors.email}</div>
            )}

            <input
              {...formik.getFieldProps('password')}
              className="otp-input"
              type="password"
              placeholder="Enter Password"
            />
            {formik.touched.password && formik.errors.password && (
              <div className="error">{formik.errors.password}</div>
            )}

            <button type="submit" className="otp-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <Link className='forgot-link' to="/password/forgot">Forgot Password</Link>
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
