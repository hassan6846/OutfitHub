import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
// css
import "./search.module.css"
// Components.

import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb'
const Search = () => {
  const query=useParams()
  // useEffect.
  useEffect(()=>{
  console.log(query)
  })
  return (
    <>

    <BreadCrumb/>

    </>
  )
}

export default Search