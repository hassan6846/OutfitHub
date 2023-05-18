// imports Css
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
// Compomnents  and pages
import Home from './pages/user/Home';
import Products from './pages/user/Products';

// /////////////////
function App() {
  return (
<Routes>
  {/* add more routes page here */}
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Products/>} />

{/* add more routes here */}
</Routes>


  )
}

export default App;
