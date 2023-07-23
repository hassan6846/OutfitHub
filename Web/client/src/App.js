// Liabrary Or Modules
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios"
import WebFont from "webfontloader";
/**
 * Pages 
 */
import Home from './pages/user/Home';
import LoginPage from './pages/user/Login';
import SignupPage from './pages/user/Signup';
import ErrorPage from './pages/user/ErrorPage';
import Products from './pages/user/Products';
import Singleproduct from './pages/user/Singleproduct';
import ForgotPassword from './pages/user/ForgotPassword';
import ResetPassword from './pages/user/ResetPassword';
import Faq from './pages/user/Faq';

import Otp from './pages/user/Otp';

// testing components
import ProductCard from './components/ProductCard';
import AdminSidebar from './pages/admin/Sidebar/AdminSidebar';
import AllProducts from './pages/admin/Components/AllProducts';
import AddProduct from './pages/admin/Components/AddProduct';
import AllUsers from './pages/admin/Components/AllUsers';
import Orders from './pages/admin/Components/Orders';
import Messages from './pages/admin/Components/Messages';
import AdminLogout from './pages/admin/Components/AdminLogout';
// import SubCategorySlider from './Layouts/SubCategorySlider/SubCategorySlider';


function App() {
  const [stripeApiKey, setStripeApiKey] = useState("");
  //get api key for payment 
  async function GetApiKey(){
 const {data}=await axios.get("/api/v1/stripeapikey")
 setStripeApiKey(data.stripeApiKey)
  }
  // benifits of loading fonts in app.js
  useEffect(()=>{
    WebFont.load({
      google:{
        families: ["Roboto", "Droid Sans", "Chilanka"],
      }})
  })
  return (
<Router>
  <Routes>
<Route exact={true} path='/' element={<Home/>} />
<Route path='*' element={<ErrorPage/>} />
<Route path='/shop' element={<Products/>} />
<Route path='/shop/men'/>
<Route path='/login' element={<LoginPage/>} />
<Route path='/signup' element={<SignupPage/>} />
<Route exact path='/password/forgot' element ={<ForgotPassword/>}/>
<Route exact path='/password/reset/:token' element={<ResetPassword/>}/>
<Route path='/password/otp/:token' element={<Otp/>} />
{/* 404 page  */}
<Route path='/product' element={<ProductCard/>} />
<Route path='/product/:id' element={<Singleproduct/>} />
<Route path='/cart'/>
{/* User Routes */}
<Route path='/about' element={<Faq/>}/>
{/* protected Routes are down below */}
<Route exact={true} path='/admin' element={<AdminSidebar/>} />
<Route path='/admin/products' element={<AllProducts/>} />
<Route path='/admin/products/all' element={<AddProduct/>} />
<Route path='/admin/users' element={<AllUsers/>}/>
<Route path='/admin/orders' element={<Orders/>}/>

<Route path='/admin/messages' element={<Messages/>}/>
<Route path='/admin/logout' element={<AdminLogout/>}/>
  </Routes>
</Router>

  )
}

export default App;
