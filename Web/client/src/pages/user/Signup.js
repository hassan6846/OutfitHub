import React from 'react'
import { useForm } from 'react-hook-form';
import LogoLink from '../../components/LogoLink';
// css
import "./Signup.css"
import { Link } from 'react-router-dom';

const SignupPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
<div className='Singup_wrapper'>
<LogoLink/>
<div className='register_form'>
<h3 className='reg_head'>Register Account</h3>
<div className='input_wrappers'>
<form className='form_main' onSubmit={handleSubmit(onSubmit)}> 
     <div> 
       <p className='input-head'>name</p>
      <input  className='input_style'  type="text" placeholder="name" {...register("name", {required: true, max: 30, min: 5, maxLength: 80})} /></div>
      <div>    
      <p  className='input-head' >Email</p>
      <input   className='input_style' type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} /></div>
      <div>  
      <p  className='input-head' >password</p>
      <input   className='input_style' type="password" placeholder="Password" {...register("Mobile number", {required: true, max: 20, min: 8, maxLength: 12})} /></div>

      <input className='submitbtn' type="submit" />
    </form>

</div>
<Link to="/login">Login Instead..</Link>
</div>

</div>
  )
}

export default SignupPage ;

