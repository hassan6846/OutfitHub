import './Nav.css'
import React from 'react'
import Search from './search'
import Logo from './Logo'
function Nav() {
    return (
        <nav className='nav'>
            <div className='nav_wrapper'>
                {/* logo */}
                   <Logo />
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

