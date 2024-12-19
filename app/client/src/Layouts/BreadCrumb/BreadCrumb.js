import React from 'react'
import "./BreadCrumb.css"
import { useLocation,Link } from 'react-router-dom'
import {MdNavigateNext} from "react-icons/md"
const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathParts = pathname.split('/').filter((part) => part !== '');
  return (
    <div className='breadCrumb_Wrapper-100'>

    {pathParts.map((part, index) => (
      <React.Fragment key={index}>
        <Link className='bread_crumb_link' to={`/${pathParts.slice(0, index + 1).join('/')}`}>{part}</Link>
        {index < pathParts.length - 1 && <span className='breadcrumb-separator'> <MdNavigateNext/>   </span>}
      </React.Fragment>
    ))}
  </div>

  )
}

export default BreadCrumb