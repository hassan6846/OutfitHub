import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/user/Home/Home';
import LoginPage from './pages/user/Login/Login';
import SignupPage from './pages/user/Register/Signup';
import ErrorPage from './pages/user/404/ErrorPage';
import ForgotPassword from './pages/user/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/user/ResetPassword/ResetPassword';
import Products from './pages/user/Shop/Products';
import Singleproduct from './pages/user/ProductDetails/Singleproduct';
import Cart from './pages/user/Cart/Cart';



const AllRoutes = () => (
  <Router>
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      <Route path="/password/reset/:id" element={<ResetPassword />} />

      {/* 404 page */}
      <Route path="*" element={<ErrorPage />} />

      {/* User Routes */}
      <Route path="/shop" element={<Products />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/shop/product/:id" element={<Singleproduct />} />
    </Routes>
  </Router>
);
export default AllRoutes;