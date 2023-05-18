import React from 'react'
import TrendingCarsoul from '../../components/TrendingCarsoul'
// style sheets

// components
import Alertbar from '../../components/Alert'
import Nav from '../../components/Navbar'
import LandingCarsoul from '../../components/LandingCarsoul'
import Trending_heading from '../../components/Trending_heading'
import Footer from '../../components/Footer'


// ////////////////

const Home = () => {
  return (
  <div>
    <Alertbar/>
    <Nav/>
    <LandingCarsoul/>
    {/* trending carsoul div */}
   <div>
    <Trending_heading/>
   < TrendingCarsoul />
   </div>
   {/* trending carsoul  div*/}

  <Footer/>
  </div>

 

  )
}

export default Home