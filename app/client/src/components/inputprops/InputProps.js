import React from 'react'
import {  MDBInput  } from "mdb-react-ui-kit";
const InputProps = (props) => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    <p style={{marginBottom:"0.2rem",fontSize:"14px",marginTop:"0.2rem"}}>{props.title}</p>
<MDBInput  

onChange={props.onChange}
type={props.type}/>

    </div>
  )
}

export default InputProps