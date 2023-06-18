// Liabrary Or Modules
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

/**
 * Pages 
 */
import Home from './pages/user/Home';
import LoginPage from './pages/user/Login';
import SignupPage from './pages/user/Signup';
import ErrorPage from './pages/user/ErrorPage';
import Products from './pages/user/Products';

// testing components
// import ProductCard from './components/ProductCard';
import SubCategorySlider from './components/SubCategorySlider';

function App() {
  return (
<Router>
  <Routes>
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Products/>} />
<Route path='/login' element={<LoginPage/>} />
<Route path='/signup' element={<SignupPage/>} />
{/* 404 page  */}
<Route path='*' element={<ErrorPage/>} />
<Route path='/product' element={<SubCategorySlider/>} />
{/* protected Routes are down below */}
  </Routes>
</Router>

  )
}

export default App;
