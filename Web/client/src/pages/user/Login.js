
import React from 'react'

import GoogleBtn from '../../components/GoogleBtn';
import InputComponent from '../../components/InputComponent';
import "./Login.css"
import SimpleBtn from '../../components/SimpleBtn';
import LogoLink from '../../components/LogoLink';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
   <div className='login_container'>

<LogoLink/>
<div className='login_form' >
  <p className='login_account' >Login Account</p>
<GoogleBtn/>
<p className='or'>or</p>
    <InputComponent placeholder="Email" />
    
    <InputComponent placeholder="Password" />
    <Link className='resetPassword '>Forgot Password?</Link>
    <SimpleBtn  txt="login" />
    <div className='register_wrapper'>

<p className='registertxt'>Create Account </p>
 <Link className='registerlink'>Register</Link>
 </div> 

</div>

   </div>
  )
}

export default LoginPage ;
