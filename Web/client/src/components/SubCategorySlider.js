// liabarary and modules
import React,{useRef,useEffect,useState}from 'react'
import {motion} from "framer-motion"
//css
import "./SubCategorySlider.css"
import { Link, json } from 'react-router-dom'

const SubCategorySlider = () => {
   const [data,saveData]=useState([])
  //  fetch data
const fetchUserData=()=>{
  fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(json => console.log(json))
saveData(json)
}
  // calling when its load
  useEffect(() => {
    fetchUserData();
    console.log(data)
  }, []);

  return (
    /* objective is  to skeleton reloading*/
  <motion.div className="slider_wrapper_100  Motion-carsoul">
    <motion.div className='slider_wrapper_90  inner-Carsoul '>
{/* the component will be map */}
  <div className='subCategoryBtn'>
    <img src={image} className='SubCat-Img' alt="img-of-subCat"/>
    <Link className='Sub_Link'>{category}</Link>
  </div>

   {/* maps ends  here */}
    </motion.div>
  </motion.div>
  )
}

export default SubCategorySlider