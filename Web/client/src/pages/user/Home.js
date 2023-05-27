import React from 'react'
import TrendingCarsoul from '../../components/TrendingCarsoul'
// style sheets

// components
import Alertbar from '../../components/Alert'
import Nav from '../../components/Navbar'
import LandingCarsoul from '../../components/LandingCarsoul'
// import TrendingHead from '../../components/TrendingHead'
import Footer from '../../components/Footer'
import Catalogue from '../../components/Catalogue'
import Cathead from '../../components/Catalogue_Heading'




// ////////////////

const Home = () => {
  return (
  <div>
    <Alertbar/>
    <Nav/>
    <LandingCarsoul/>
    {/* trending carsoul div */}
   <div>
   {/* <TrendingHead/> */}
   <Cathead heading="Trending Products"  LinkText="See more items" />
   < TrendingCarsoul />
   </div>
   {/* trending carsoul ends  div*/}
  <Cathead heading="Browse Category "  LinkText="See more" />
<Catalogue/>
  <Footer/>
  </div>

 

  )
}

export default Home