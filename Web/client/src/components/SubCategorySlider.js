// liabarary and modules
import React,{useRef,useEffect,useState}from 'react'
import {motion} from "framer-motion"
//css
import "./SubCategorySlider.css"
import { Link } from 'react-router-dom'

const SubCategorySlider = () => {
   const [data,saveData]=useState([])
  //  fetch function
   const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        saveData(data);
      });
  };
  // calling when its load
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    /* objective is  to skeleton reloading*/
  <motion.div className="slider_wrapper_100  Motion-carsoul">
    <motion.div className='slider_wrapper_90  inner-Carsoul '>
{/* the component will be map */}
{data.map((image, category) => (
  <div className='subCategoryBtn'>
    <img src={image} className='SubCat-Img' alt="img-of-subCat"/>
    <Link className='Sub_Link'>{category}</Link>
  </div>
))}
   {/* maps ends  here */}
    </motion.div>
  </motion.div>
  )
}

export default SubCategorySlider