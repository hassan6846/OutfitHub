import React from 'react'
import "./TrendingCarsoul.css"
import { Link } from 'react-router-dom'

const TrendingCarsoul = () => {
  return (
  <section className="full_width_Wrapper" >
{/* text  */}
<div className='txtWrapper_100'>  
{/* 70% flex */}
<div className='txtWrapper_70_flex'>
 <div> <h3>Trending Products</h3> </div> 
 <div><Link>See more</Link> </div>
</div>
{/* 70% */}
 </div>
 {/* text wrapper */}
  </section>
  )
}

export default TrendingCarsoul