import './Nav.css'
import React from 'react'
import Search from './search'

function Nav() {
    return (
        <nav className='nav'>
            <div className='nav_wrapper'>
                {/* logo */}
                <div className='logo'><img src='/logo.svg' alt='DESIGN' className='logo-svg' /></div>       
                {/* logo */}
               {/* links */}
                <div className='links'>
               <p>links are here</p>
                </div>
                {/* links */}
                {/* actions */}
                <div className='actions'> 
                      <Search />
                  <div className='actions_btns'></div>
                  <div className='actions_btns'></div>
                  <div className='actions_btns'></div>
                </div>
                {/* actions */}
            </div>
        </nav>
    )
}

export default Nav

