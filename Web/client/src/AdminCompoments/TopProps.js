import React from 'react'


import "./TopProps.css"
const TopCards = (props) => {

 
  return (
    <div className='TopProps_Wrapper' >
      <div className='TopProps__headWrapper'><img alt='👜' src='./search.svg' /> <p className='card_Name'>Total sales</p> </div>
      {/* learn to use  react conditional image usage */}
      <p className='Card_Numbers'> $90123</p>
      <div className='card_statistic_Wrapper'>   
    <p> <span>↗</span>   20.9%</p>
    <p> <span>↗</span> <span>+</span>  <span>18.4</span> <span>k</span> this week</p>
        </div>
    </div>
  )
}

export default TopCards