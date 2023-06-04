// imports Css
import { Route, Routes } from 'react-router-dom';

import React from 'react';
// Compomnents  and pages
import Home from './pages/user/Home';
import Products from './pages/user/Products';
import LoginPage from './pages/user/Login';
import SignupPage from './pages/user/Signup';
import ErrorPage from './pages/user/ErrorPage';
// admin
import AdminHome from './pages/admin/AdminHome';
// /////////////////
function App() {
  return (
<Routes>
  {/* add more routes page here */}
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Products/>} />
<Route path='/login' element={<LoginPage/>} />
<Route path='/signup' element={<SignupPage/>} />
<Route path='*' element={<ErrorPage/>} />
{/* admin routes */}
<Route path='/admin' element={<AdminHome/>} />
{/* add more routes here */}
</Routes>


  )
}

export default App;
