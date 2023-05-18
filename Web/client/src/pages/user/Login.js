import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const handleGoogleSignUp = () => {
    // Handle Google Sign Up OAuth logic here
  };

  const handleLoginFormSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission logic here
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={handleLoginFormSubmit}>
        <input type="email" placeholder="Email" required />
        <br />
        <input type="password" placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleGoogleSignUp}>Sign up with Google</button>
      <Link to="/signup">Create Account instead</Link>
    </div>
  );
};

export default LoginPage;
