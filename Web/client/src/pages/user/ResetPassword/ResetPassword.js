import { React } from 'react'
import "./ResetPassword.css"
import { Toaster, toast } from "react-hot-toast"
import { useParams } from 'react-router-dom'

const ResetPassword = () => {
  const { id } = useParams()
console.log(id)
  return (
    <div>
      <Toaster />
      ResetPassword {id}
      </div>
  )
 
}

export default ResetPassword