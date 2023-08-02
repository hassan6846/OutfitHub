// library
import React,{useEffect} from 'react'
import TrendingCarsoul from '../../components/TrendingCarsoul'

// style sheets
import "./Home.css"
// components
import Alertbar from '../../components/Alert'
import Nav from "../../Layouts/NavbarMain/ResponsiveNav"
import LandingCarsoul from '../../components/LandingCarsoul'
// import TrendingHead from '../../components/TrendingHead'

import Catalogue from '../../components/Catalogue'
import Cathead from '../../components/Catalogue_Heading'
import Footer from "../../Layouts/footer/Footer"
import CategoryBar from '../../components/CategoryBar'



// ////////////////

const Home = () => {
  // for changing title
  useEffect(() => {
    document.title = "Home";  
  }, []);
  return (
  <div>
      
    <Alertbar/>

    <Nav/>
<CategoryBar/>
    <LandingCarsoul/>
    {/* trending carsoul div */}
   <div>
   {/* <TrendingHead/> */}
   <Cathead heading="Trending Products"  LinkText="See more items" />
   < TrendingCarsoul />
   </div>
   {/* trending carsoul ends  div*/}
  <Cathead heading="Browse Category " LinkPage="/shop"  LinkText="See more" />
<Catalogue/>
<Footer MarginTop="1vmax"/>
  </div>
  )
}

export default Home