import React from 'react'
import "./SimpleBtn.css"
const SimpleBtn = (props) => {
  return (
    <button className='simpleBTN'> {props.txt}</button>
  )
}

export default SimpleBtn