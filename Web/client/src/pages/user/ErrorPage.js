import React from 'react'
import "./ErrorPage.css"
import LogoLink from '../../components/LogoLink';

const ErrorPage = () => {
  return (
<div className='error__Wrapper' style={{ backgroundImage: `url(./download.png)` }} >
<LogoLink/>
<p className='error_text'>404</p>


</div>
 
  )
}

export default ErrorPage