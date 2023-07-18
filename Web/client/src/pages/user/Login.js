import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import './Login.css';
import Footer from '../../Layouts/footer/Footer';
import { unstable_HistoryRouter as useHistory } from 'react-router-dom';
const Login = () => {
  const [loginError, setLoginError] = useState('');
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '@gmail.com',
      password: ''
    },
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        });

        if (response.ok) {
          // Redirect to the home page
          history.push('/');
        } else {
          const data = await response.json();
          setLoginError(data.message);
        }
      } catch (error) {
        console.error('Error occurred during login:', error);
      }
    }
  });

  return (
    <div>
      <section className="login_wrapper-100">
        <Link to="/" className="login-logo">
          <img alt="company" src="./logo.svg" />
        </Link>
        <div className="login-container">
          <p className="login-heading">Login Account</p>
          <form onSubmit={formik.handleSubmit} className="login-form" method="post">
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
          {loginError && <p className="login-error">{loginError}</p>}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
