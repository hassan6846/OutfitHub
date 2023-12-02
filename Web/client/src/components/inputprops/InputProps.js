import React from 'react'
import { MDBInputGroup, MDBInput, MDBBtn } from "mdb-react-ui-kit";
const InputProps = (props) => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
    <p style={{marginBottom:"0.2rem",fontSize:"14px",marginTop:"0.2rem"}}>{props.title}</p>
<MDBInput type={props.type}/>

    </div>
  )
}

export default InputProps