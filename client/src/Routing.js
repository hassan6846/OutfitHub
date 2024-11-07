import { React } from "react";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import AdminOverview from "./pages/admin/Components/Overview";
import AddProduct from "./pages/admin/Components/AddProduct";
import AllProducts from "./pages/admin/Components/AllProducts";
import Orders from "./pages/admin/Components/Orders";
import AllUsers from "./pages/admin/Components/AllUsers";
import VendorRequests from "./pages/admin/Components/VendorRequests";
import Messages from "./pages/admin/Components/Messages";
import Stats from "./pages/admin/Components/Stats";
import Logout from "./pages/admin/Components/logout"
// Auth
import { AuthProvider } from "react-auth-kit"
import ResponsiveNav from './Layouts/NavbarMain/ResponsiveNav'
import Footer from "./Layouts/footer/Footer";
import { Toaster } from "react-hot-toast"
import { CookieConsent } from "react-cookie-consent"
const Routing = () => {

  return (
    <AuthProvider authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      cookieSecure={false}
    >

      <Router>
        <ResponsiveNav />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Products />} />
          <Route path="/shop/:title" element={<Singleproduct />} />
          {/* <Route path="/shop/category/:category/:subcategory" element={}/>             Get All Products relative to param e.g men or women */}

          <Route path="/faqs" element={<FaqPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout/>}/>
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
          <Route path="/user" element={<UserProfile />}>
            <Route path="/user" element={<ProfileOverView />} />
            <Route path="order" element={<Order />} />
            <Route path="edit" element={<EditUserProfile />} />
            <Route path="address" element={<UserAdressBook />} />
            <Route path="address/new" element={<AddNewAdress />} />
            <Route path="contact" element={<Contact />} />
            <Route path="wishlists" element={<Wishlists />} />
       
          </Route>
          {/* ADMIN PRIVATE ROUTE */}
          <Route path="/admin" element={<AdminOutlet />}>
            <Route path="/admin" element={<AdminOverview />} />
            <Route path="logout" element={<Logout />} />
            <Route path="orders" element={<Orders />} />
            <Route path="stats" element={<Stats />} />
            <Route path="products" element={<AllProducts />} />
            <Route path="products/add" element={<AddProduct />} />
            <Route path="users" element={<AllUsers />} />
            <Route path="messages" element={<Messages />} />
            <Route path="messages/vendorrequest" element={<VendorRequests />} />
          </Route>
        </Routes>
        <Toaster />
        <Footer />
      </Router>
      <CookieConsent
        acceptOnScroll={true}
        acceptOnScrollPercentage={5}
        buttonText="Accept."
        cookieName="consent"
        buttonStyle={{ color: "#4e503b", fontSize: "13px", padding: "0.2rem 1rem", }}
        expires={150}
        debug={true}

        style={{ right: "5px" }}
      >
        This website uses cookies to ensure you get best experience at out webiste{" "}
        <span style={{ fontSize: "10px", textDecoration: "underline", marginLeft: "0.3rem", color: "#4BB497", fontWeight: "bold", cursor: "pointer" }}>learn more about privacy policiy.</span>
      </CookieConsent>
    </AuthProvider>
  );
};

export default Routing;
