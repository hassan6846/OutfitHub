import React from 'react'
import "./FilterBar.css"
import SubCategorybtn from './SubCategorybtn'
const FilterBar = () => {
  return (
    <div className='filterbar_wrapper'>
        <div className='filterBtns_Container'>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
          <SubCategorybtn/>
       
        </div>
    </div>
  )
}

export default FilterBar