import React from 'react'
import "./InputComponent.css"
const InputComponent = (props) => {
  return (
    <input  className='InputProp' placeholder={props.placeholder}>

    </input>
  )
}

export default InputComponent;