import React,{useEffect} from 'react'
import "./ErrorPage.css"
import LogoLink from '../../components/LogoLink';

const ErrorPage = () => {
useEffect(()=>{
  document.title="404 Conflict"
})
  return (
<div>
<div className='error__Wrapper' style={{ backgroundImage: `url(https://flxt.tmsimg.com/assets/p194843_i_h9_ab.jpg)` }}>
<LogoLink/>
<p className='error_text'>404</p>


</div>
<footer/>
</div>

 
  )
}

export default ErrorPage