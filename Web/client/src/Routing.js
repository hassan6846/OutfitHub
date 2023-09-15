import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import toast from 'react-hot-toast';
// components 
import Home from './pages/user/Home/Home';
import LoginPage from './pages/user/Login/Login';
import SignupPage from './pages/user/Register/Signup';
import ErrorPage from './pages/user/404/ErrorPage';
import ForgotPassword from './pages/user/ForgotPassword/ForgotPassword';
import ResetPassword from './pages/user/ResetPassword/ResetPassword';
import Products from './pages/user/Shop/Products';
import Singleproduct from './pages/user/ProductDetails/Singleproduct';
import Cart from './pages/user/Cart/Cart';
import Otp from "./pages/user/Otp/Otp"
import UserProfile from "./pages/user/UserProfile/UserProfile"
import FaqPage from "./pages/user/Faqs/Faq"
// hooks


const Routing = () => {
  useEffect(()=>{
    toast.error("hello")
  })
  return (
      <Router>

    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/password/forgot" element={<ForgotPassword />} />
      {/* session */}
      <Route path="/password/reset/:id" element={<ResetPassword />} />
      <Route path='/otp' element={<Otp/>}/>
      {/* 404 page */}
      <Route path="*" element={<ErrorPage />} />

      {/* User Routes */}
      <Route path="/shop" element={<Products />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/shop/product" element={<Singleproduct />}/>
      <Route path='/faqs' element={<FaqPage/>} />
  {/* Private Routes */}
  <Route path="/user" element={<UserProfile/>}/>
    </Routes>
  </Router>
  
  )
}

export default Routing