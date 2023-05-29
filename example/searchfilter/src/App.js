// imports Css
import { Route, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
// Compomnents  and pages
import HomePage from './pages/Home';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
<Routes>
  {/* add more routes page here */}
<Route path='/' element={<HomePage/>} />
<Route path='/shop' element={<SingleProduct/>} />


{/* add more routes here */}
</Routes>


  )
}

export default App;
