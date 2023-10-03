import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import toast from "react-hot-toast";
// components
import Home from "./pages/user/Home/Home";
import LoginPage from "./pages/user/Login/Login";
import SignupPage from "./pages/user/Register/Signup";
import ErrorPage from "./pages/user/404/ErrorPage";
import ForgotPassword from "./pages/user/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/user/ResetPassword/ResetPassword";
import Products from "./pages/user/Shop/Products";
import Singleproduct from "./pages/user/ProductDetails/Singleproduct";
import Cart from "./pages/user/Cart/Cart";
import Otp from "./pages/user/Otp/Otp";
import UserProfile from "./pages/user/UserProfile/UserProfile";
import FaqPage from "./pages/user/Faqs/Faq";
import ProfileOverView from "./pages/user/UserProfile/ProfileOverView";
import UserAdressBook from "./pages/user/UserProfile/UserAdressBook";
import Contact from "./pages/user/UserProfile/Contact";
import Wishlists from "./pages/user/UserProfile/Wishlists";
import Vendor from "./pages/user/UserProfile/Vendor";
import Order from "./pages/user/UserProfile/Order";
import EditUserProfile from "./pages/user/UserProfile/EditUserProfile";
import AddNewAdress from "./pages/user/UserProfile/AddNewAdress";

// ADMIN
import AdminOutlet from "./pages/admin/Sidebar/AdminOutlet";

const Routing = () => {
  useEffect(() => {
    toast.error("hello");
  });
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        {/* don't be visited after user logged in */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        {/* sessions can also not be visited until you make request*/}
        <Route path="/password/reset/:id" element={<ResetPassword />} />
        <Route path="/password/reset/*" element={<ErrorPage />} />
        <Route path="/otp/:token" element={<Otp />} />
        {/* 404 page */}
        <Route path="*" element={<ErrorPage />} />
        {/* User Routes */}
        <Route path="/shop" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop/:id" element={<Singleproduct />} />
        <Route
          path="/search/:query"
          element={"this is query search from field page"}
        />
        <Route path="/faqs" element={<FaqPage />} />
        {/* Private Routes CANNOT BE VISITED AFTER LOGGED IN */}
        <Route path="/user" element={<UserProfile />}>
          <Route path="/user" element={<ProfileOverView />} />
          <Route path="order" element={<Order />} />
          <Route path="edit" element={<EditUserProfile />} />
          <Route path="address" element={<UserAdressBook />} />
          <Route path="address/new" element={<AddNewAdress />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlists" element={<Wishlists />} />
          <Route path="vendor" element={<Vendor />} />
        </Route>
        {/* ADMIN PRIVATE ROUTE */}
        <Route path="/admin" element={<AdminOutlet/>}></Route>
      </Routes>
    </Router>
  );
};

export default Routing;
