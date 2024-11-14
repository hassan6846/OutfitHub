import { React } from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
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

// users Profile Private Routes.
import UserProfile from "./pages/user/UserProfile/UserProfile";
import FaqPage from "./pages/user/Faqs/Faq";
import ProfileOverView from "./pages/user/UserProfile/ProfileOverView";
import UserAdressBook from "./pages/user/UserProfile/UserAdressBook";
import Contact from "./pages/user/UserProfile/Contact";
import Wishlists from "./pages/user/UserProfile/Wishlists";

import Order from "./pages/user/UserProfile/Order";
import EditUserProfile from "./pages/user/UserProfile/EditUserProfile";
import AddNewAdress from "./pages/user/UserProfile/AddNewAdress";
import Checkout from "./pages/user/Checkout/Checkout";

// ADMIN
import AdminOutlet from "./pages/admin/Sidebar/AdminOutlet";

import AddProduct from "./pages/admin/Components/AddProduct";
import AllProducts from "./pages/admin/Components/AllProducts";
import Orders from "./pages/admin/Components/Orders";
import AllUsers from "./pages/admin/Components/AllUsers";
import Messages from "./pages/admin/Components/Messages";
import Logout from "./pages/admin/Components/logout"
// Auth
import ResponsiveNav from './Layouts/NavbarMain/ResponsiveNav'
import Footer from "./Layouts/footer/Footer";
import { Toaster } from "react-hot-toast"
import { CookieConsent } from "react-cookie-consent"

import Tags from "./pages/user/Tags/Tags";
import Trending from "./pages/user/Trending/Trending";
import NewArrival from "./pages/user/NewArrival/NewArrival";
import ProtectedRoute from "./components/Protected/ProductRoute";
//stripe
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51NIDjMKxIUjmCPdCkuccRvfJCOR0Wl7VcFMfc4CMfy2I1K0eXKe0UEUm6doBSnkdOfK3JPjGdccVrx6kiuNu77vc00xifmoTSq');
const Routing = () => {

  return (


    <Elements stripe={stripePromise}>
      <Router>
      <ResponsiveNav />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Products />} />
        <Route path="/shop/:title" element={<Singleproduct />} />


        <Route path="/shop/tags/:tag" element={<Tags />} />
        <Route path="/shop/promotions/trendings" element={<Trending />} />
        <Route path="/shop/promotions/new-arrival" element={<NewArrival />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* don't be visited after user logged in */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        {/* sessions can also not be visited until you make request*/}
        <Route path="/password/reset/:id" element={<ResetPassword />} />
        <Route path="/password/reset/*" element={<ErrorPage />} />
        {/* 404 page */}
        <Route path="*" element={<ErrorPage />} />
        <Route path="/404" element={<ErrorPage />} />
        {/* User Routes */}

        {/* Private Routes CANNOT BE VISITED Without LOGIN */}
        <Route path="/user" element={<ProtectedRoute><UserProfile /></ProtectedRoute>}>
          <Route path="/user" element={<ProfileOverView />} />
          <Route path="order" element={<Order />} />
          <Route path="edit" element={<EditUserProfile />} />
          <Route path="address" element={<UserAdressBook />} />
          <Route path="address/new" element={<AddNewAdress />} />
          <Route path="contact" element={<Contact />} />
          <Route path="wishlists" element={<Wishlists />} />

        </Route>
        {/* ADMIN PRIVATE ROUTE */}
        <Route path="/admin" element={<ProtectedRoute requiredRole="admin"> <AdminOutlet /></ProtectedRoute>}>

          <Route path="logout" element={<Logout />} />
          <Route path="orders" element={<Orders />} />

          <Route path="products" element={<AllProducts />} />
          <Route path="products/add" element={<AddProduct />} />
          <Route path="users" element={<AllUsers />} />
          <Route path="messages" element={<Messages />} />

        </Route>
      </Routes>
      <Toaster />
      <Footer />
    </Router>
      <CookieConsent


        style={{ right: "5px" }}
      >
        This website uses cookies to ensure you get best experience at out webiste{" "}
        <span style={{ fontSize: "10px", textDecoration: "underline", marginLeft: "0.3rem", color: "#4BB497", fontWeight: "bold", cursor: "pointer" }}>learn more about privacy policiy.</span>
      </CookieConsent>
    </Elements>

  );
};

export default Routing;
