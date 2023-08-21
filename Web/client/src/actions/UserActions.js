//axios for fetching requests
import axios from "axios"
//importing user constants
import {
// login request
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  // signup
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAIL,
  // load 
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  // logout
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  // users try to update
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,

  UPDATE_PASSWORD_REQUEST,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAIL,

  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAIL,

  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAIL,

  ALL_USERS_REQUEST,
  ALL_USERS_SUCCESS,
  ALL_USERS_FAIL,

  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,

  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,

  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,

  CLEAR_ERRORS,
} from "../constants/UserConstants";
import axios from "axios"
/**
 *
 *  Signup/ register
 *
 */
const Signup_User = (payload) => (dispatch) => {
  dispatch({ type: SIGNUP_USER_REQUEST });
  axios.post(
    "https://lifestyle-mock-server-api.onrender.com/registeredUser",
    payload
  ).then((response) => {
    dispatch({ type: SIGNUP_USER_SUCCESS })
  }).catch((e) => {
    dispatch({ type: SIGNUP_USER_FAIL })
  })

}
export default {Signup_User,}