import React from 'react'
import './Search.css'

function Search() {
    return (
        <div className='search'>
           <div className='search-wrapper' >  <input placeholder='Search Product' className='search_bar' ></input></div>
          <div >  <img src='/search.svg' alt='DESIGN' className='logo-svg' /></div>
        </div>
    )
}

export default Search
