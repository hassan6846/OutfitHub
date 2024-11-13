import axios from "axios"
import { ENDPOINT } from "./Endpoint"

// import { ClearAll } from "../Slices/UserSlices"
// import { useDispatch } from "react-redux"
// //clear all storage cookie sesssion,localstorage
// //refresh the window and redirect to login
// //reset all state.



const Logout = async () => {
    try {
        const response = await axios.post(`${ENDPOINT}/logout`)
        console.log(response)
    } catch (error) {
        console.log(error + "While logout")
    }
}
export default Logout