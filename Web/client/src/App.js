// imports Css
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
// Compomnents  and pages
import Home from './pages/user/Home';
import Products from './pages/user/Products';
import LoginPage from './pages/user/Login';
import SignupPage from './pages/user/Signup';
import ErrorPage from './pages/user/ErrorPage';
import Singleproduct from './pages/user/Singleproduct';
// admin
import AdminHome from './pages/admin/AdminHome';
import AdminSettings from './pages/admin/AdminSettings';
import AddProduct from './pages/admin/AddProduct';
import AdminOrders from './pages/admin/AdminOrders';
import AdminUsers from './pages/admin/AdminUsers';
// admin components

// /////////////////
function App() {
  return (
<Router>
  <Routes>
   {/* add more routes page here */}
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Products/>} />
<Route path='/login' element={<LoginPage/>} />
<Route path='/signup' element={<SignupPage/>} />
<Route path='/single' element={<Singleproduct/>} />
<Route path='*' element={<ErrorPage/>} />
{/* admin routes */}
<Route path='/admin' element={<AdminHome/>} />
<Route path='/admin/products' element={<AddProduct/>} />
<Route path='/admin/orders'element={<AdminOrders/>}/>
<Route path='/admin/users' element={<AdminUsers/>} />
<Route path='/admin/settings' element={<AdminSettings/>} />

  </Routes>
</Router>

  )
}

export default App;
