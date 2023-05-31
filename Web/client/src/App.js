// imports Css
import { Route, Routes } from 'react-router-dom';

import React from 'react';
// Compomnents  and pages
import Home from './pages/user/Home';
import Products from './pages/user/Products';
import LoginPage from './pages/user/Login';
import SignupPage from './pages/user/Signup';
import AddProduct from './pages/admin/AddProduct';
import ErrorPage from './pages/user/ErrorPage';
// import Singleproduct from './pages/user/Singleproduct';
// /////////////////
function App() {
  return (
<Routes>
  {/* add more routes page here */}
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Products/>} />
<Route path='/login' element={<LoginPage/>} />
<Route path='/signup' element={<SignupPage/>} />
<Route path='/addproduct' element={<AddProduct/>} />
<Route path='*' element={<ErrorPage/>} />

{/* add more routes here */}
</Routes>


  )
}

export default App;
