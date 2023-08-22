import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
} from "../constants/UserConstants" 
import AxiosInstance from "../helpers/BaseUrl";
// login Function
export function SignUpFunc(payload) {
    return function(dispatch) {
      dispatch({ type: LOGIN_REQUEST });
      AxiosInstance.post("/login")
        .then(function(response) {
          dispatch({ type: LOGIN_SUCCESS });
        })
        .catch(function(error) {
          dispatch({ type: LOGIN_FAIL });
        });
    };
  }
  export default {SignUpFunc,}
  