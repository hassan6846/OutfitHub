import React from 'react'
import  "./SidebarBtn.css"
import { Link } from 'react-router-dom'
const SidebarBtn = (props) => {
  return (
    <Link  to={`/admin${props.url}`} className='SideBtn'>
<div className='Sidebar_child_1' >
    <img alt='overview' src={props.src} /> <p  className='sideBtn_txt'>{props.text}</p>
</div>
{/* add dropdown here */}
<div className='Sidebar_child_2' style={{ display: props.display }}  > <p className='sidebar_child_2_inner'>1</p> </div>
    </Link>
  )
}

export default SidebarBtn