import React from 'react'
// style sheets
// components
import Alertbar from '../../components/Alert'
import Nav from '../../components/Navbar'
import TrendingCarsoul from '../../components/TrendingCarsoul'

// ////////////////

const Home = () => {
  return (
    <>  
     <Alertbar />
      <Nav /> 
      <TrendingCarsoul/>
      </>

  )
}

export default Home