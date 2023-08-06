import React from 'react'
import "./LogoLink.css"
import { Link } from 'react-router-dom'

const LogoLink = (props) => {
  return (
    <Link  to={props.to} className='SimpleLogo'> <img src='/logo.svg' alt='Close button' className='svg' /></Link>
  )
}

export default LogoLink