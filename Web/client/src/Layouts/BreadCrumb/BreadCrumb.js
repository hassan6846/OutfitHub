import React from 'react'
import "./BreadCrumb.css"
import { useLocation,Link } from 'react-router-dom'
const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathParts = pathname.split('/').filter((part) => part !== '');
  return (
    <div className='breadCrumb_Wrapper-100'>
    {/* Render breadcrumb links */}
    {pathParts.map((part, index) => (
      <React.Fragment key={index}>
        <Link to={`/${pathParts.slice(0, index + 1).join('/')}`}>{part}</Link>
        {index < pathParts.length - 1 && <span className='breadcrumb-separator'> / </span>}
      </React.Fragment>
    ))}
  </div>

  )
}

export default BreadCrumb