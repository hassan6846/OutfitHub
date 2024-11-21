// library
import { React, useEffect } from 'react'
import TrendingCarsoul from '../../../components/TrendingSlider/TrendingCarsoul'

// style sheets
import "./Home.css"
// components
// import Alertbar from '../../../components/Alert/Alert'
import LandingCarsoul from '../../../components/LandingCarsoul/LandingCarsoul'
// import TrendingHead from "../../components/CatalogueHeading/"
import Catalogue from '../../../components/Catalogue/Catalogue'
import Cathead from '../../../components/CatalogueHeading/Catalogue_Heading'
import CategoryBar from '../../../components/CategoryBar/CategoryBar'

import Cookies from "js-cookie"
// ////////////////

const Home = () => {
  useEffect(() => {
    const token = Cookies.get('token'); // Retrieve the cookie with the name 'token'
    if (token) {
      console.log('Cookie "token" value:', token);
    } else {
      console.log('Cookie "token" not found.');
    }
  })
  return (
    <div>


      <LandingCarsoul />
      <div>
        <Cathead heading="Trending Products" LinkPage="/shop/promotions/trendings" LinkText="See more items" />
        < TrendingCarsoul />
      </div>
      <Cathead heading="Browse Category" LinkPage="" LinkText="" />
      <Catalogue

        men="https://res.cloudinary.com/diml3oeaw/image/upload/v1701513460/Ecommerce/HomeSlider/ze9ougfzehicxx7guygu.jpg"
        kids="https://res.cloudinary.com/diml3oeaw/image/upload/v1701513460/Ecommerce/HomeSlider/d4ebvjkgdomg6h38nm05.jpg"
        women="https://res.cloudinary.com/diml3oeaw/image/upload/v1701513461/Ecommerce/HomeSlider/vl9zvlklnlxg9wkdxwg8.jpg"
        trend="https://res.cloudinary.com/diml3oeaw/image/upload/v1701513461/Ecommerce/HomeSlider/irxasvfmz19imdxk0dyj.jpg"
      />

      <h3 className='CategoryHead'>Top Category</h3>
      <CategoryBar />

    </div>
  )
}

export default Home