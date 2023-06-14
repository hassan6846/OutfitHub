import React,{useEffect} from 'react'
import "./ErrorPage.css"
import LogoLink from '../../components/LogoLink';

const ErrorPage = () => {
useEffect(()=>{
  document.title="404 🔍💻💻😂😂😂😂😂😂😂"
})
  return (
<div>
<div className='error__Wrapper' style={{ backgroundImage: `url(./download.png)` }} >
<LogoLink/>
<p className='error_text'>404</p>


</div>
<footer/>
</div>

 
  )
}

export default ErrorPage