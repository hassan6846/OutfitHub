import {React,useEffect} from 'react'
import { useParams } from 'react-router-dom'
// css
import "./search.module.css"
// Components.
import ResponsiveNav from '../../../Layouts/NavbarMain/ResponsiveNav'
import Footer from "../../../Layouts/footer/Footer"
import BreadCrumb from '../../../Layouts/BreadCrumb/BreadCrumb'
const Search = () => {
  const query=useParams()
  // useEffect.
  useEffect(()=>{
  console.log(query)
  })
  return (
    <>
    <ResponsiveNav/>
    <BreadCrumb/>
    <Footer/>
    </>
  )
}

export default Search