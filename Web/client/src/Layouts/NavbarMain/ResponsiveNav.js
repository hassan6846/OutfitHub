import React from 'react';
import { Link } from 'react-router-dom';
import './ResponsiveNav.css';

const ResponsiveNav = () => {
  return (
    <nav className='navbar_container'>
      <Link to="/signup">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/logout">Logout</Link>
    </nav>
  );
}

export default ResponsiveNav;
