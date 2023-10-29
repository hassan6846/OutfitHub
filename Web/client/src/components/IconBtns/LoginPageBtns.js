import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import { Link } from 'react-router-dom'
import {signInWithGoogle} from "../../Firebase/Firebase"
import "./loginbtns.css"
const Loginbtns = () => {
  return (
    <div className='button_flex_login'>
    <Link  className='company_Link_login'><AiFillGithub className='icons_link_login'/>Github</Link>
    <Link onClick={signInWithGoogle} className='company_Link_login'><FcGoogle className='icons_link_login'/>Google</Link>
  </div>
  )
}

export default Loginbtns