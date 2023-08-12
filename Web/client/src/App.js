import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import WebFont from "webfontloader";
// import AdminSidebar from './pages/admin/Sidebar/AdminSidebar';
// import Overview from './pages/admin/Components/Overview';
// import AllProducts from './pages/admin/Components/AllProducts';
// import AddProduct from './pages/admin/Components/AddProduct';
// import AllUsers from './pages/admin/Components/AllUsers';
// import Orders from './pages/admin/Components/Orders';
// import Messages from './pages/admin/Components/Messages';
// import AdminLogout from './pages/admin/Components/AdminLogout';

/**
 * Pages
 */
import Home from './pages/user/Home/Home';
// import LoginPage from './pages/user/Login/Login';
// import SignupPage from './pages/user/Register/Signup';
import ErrorPage from './pages/user/404/ErrorPage';
// import Products from './pages/user/Shop/Products';
// import Singleproduct from './pages/user/ProductDetails/Singleproduct';
// import ForgotPassword from './pages/user/ForgotPassword/ForgotPassword';
// import ResetPassword from './pages/user/ResetPassword/ResetPassword';
// import Faq from './pages/user/Faqs/Faq';
// import Otp from './pages/user/Otp/Otp';
// import { Cart } from './pages/user/Cart/Cart';
// import UserProfilePage from './pages/user/UserProfilePage';

function App() {


  // benefits of loading fonts in app.js
 

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route exact path='/password/forgot' element={<ForgotPassword />} />
        <Route exact path='/password/reset/:token' element={<ResetPassword />} />
        <Route path='/password/otp/:token' element={<Otp />} /> */}

        {/* 404 page */}
        <Route path='*' element={<ErrorPage />} />

        {/* Protected Routes */}
        {/* <Route path='/admin/*' element={<AdminSidebar />}> */}
          {/* <Route index element={<Overview />} />
          <Route path='products' element={<AllProducts />} />
          <Route path='products/add' element={<AddProduct />} />
          <Route path='users' element={<AllUsers />} />
          <Route path='user/:id'/>
          <Route path='orders' element={<Orders />} /> */}
          {/* <Route path='messages' element={<Messages />} />
          <Route path='logout' element={<AdminLogout />} /> */}
        {/* </Route> */}

        {/* User Routes */}
        {/* <Route path='/shop' element={<Products />} /> */}
        {/* <Route path='/cart' element={<Cart/>}/>
        <Route path='/shop/product/:id' element={<Singleproduct />} />
        <Route path="/user/:id" element={<UserProfilePage/>}/> */}
        {/* <Route path='/faqs' element={<Faq />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
