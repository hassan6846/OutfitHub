import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  const handleGoogleSignUp = () => {
    // Handle Google Sign Up OAuth logic here
  };

  const handleSignupFormSubmit = (e) => {
    e.preventDefault();
    // Handle signup form submission logic here
  };

  return (
    <div>
      <h2>Signup Page</h2>
      <form onSubmit={handleSignupFormSubmit}>
        <input type="text" placeholder="Full Name" required />
        <br />
        <input type="email" placeholder="Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Sign up</button>
      </form>
      <button  onClick={handleGoogleSignUp}>Sign up with Google</button>
      <Link to="/login">Already have account</Link>
    </div>
  );
};

export default SignupPage;
