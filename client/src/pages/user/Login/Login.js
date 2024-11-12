import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import toast, { Toaster } from "react-hot-toast";
// Css
import "./Login.css";
// components and Library.
import Loginbtns from "../../../components/IconBtns/LoginPageBtns.js";
import {ENDPOINT} from "../../../api/Endpoint.js"

//state
import { setId ,setName,setAvatar,SETMAIL ,setGender,setJoinedIn,setRole,setPHONE} from "../../../Slices/UserSlices.js";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch=useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Track login submission

  // Validation functions
  const validateEmail = (email) => {
    // Basic email validation
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 7;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (!value) {
      setEmailError("Please fill the email field");
    } else if (!validateEmail(value)) {
      setEmailError("Please enter a valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (!value) {
      setPasswordError("Please fill the password field");
    } else if (!validatePassword(value)) {
      setPasswordError("Password must be at least 7 characters long");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if form is valid
    if (emailError || passwordError || !email || !password) {
      return;
    }

    setIsSubmitting(true); // Start login submission

    try {
      console.log(`Sending request to: http://localhost:4000/api/v1/login`);

      // Make the API call
      const response = await axios.post(`${ENDPOINT}/login`, {
        email,
        password,
      
      }
    ,
    {
      withCredentials:true
    }
    );

      // Log the response and its data
    
      console.log("Response data:", response.data.user);
      dispatch(setId(response.data.user._id));
      dispatch(SETMAIL(response.data.user.email));
      dispatch(setGender(response.data.user.gender));
      dispatch(setAvatar(response.data.user.avatar.url));
      dispatch(setName(response.data.user.username));
      dispatch(setJoinedIn(response.data.user.createdAt));
      dispatch(setRole(response.data.user.role));
      dispatch(setPHONE(response.data.user.phone));
      
      // Handle successful login
      toast.success("Successfully logged in");
    } catch (error) {
      console.log("Error during login:", error);
      if (error.response) {
        console.log("Error response data:", error.response.data.message);
        toast.error( error.response.data.message)
      } else {
        console.log("Error message:", error.message);
      }
    } finally {
      setIsSubmitting(false); // End login submission
    }
  };

  useEffect(() => {
    // Optional: Clear session data only when required
    sessionStorage.clear();
  }, []);

  return (
    <div>
      <section className="login_wrapper-100">
        <div>
          <Toaster />
        </div>
        <div className="login-container">
          <h1 className="login-heading">Login account</h1>
          <Loginbtns />
          <p className="orline_login">OR CONTINUE WITH</p>
          <form onSubmit={handleSubmit} className="login-form">
            <MDBInput
              value={email}
              onChange={handleEmailChange}
              className="login-input"
              type="email"
              placeholder="Enter Email"
              label="Email"
            />
            {emailError && <div className="error">{emailError}</div>}

            <MDBInput
              value={password}
              onChange={handlePasswordChange}
              className="login-input"
              type="password"
              placeholder="Enter Password"
              label="Password"
              autoComplete="true"
            />
            {passwordError && <div className="error">{passwordError}</div>}

            <Link className="forgot-link" to="/password/forgot">
              Forgot Password?
            </Link>

            <MDBBtn
              type="submit"
              style={{ backgroundColor: "#4BB497", border: "0px" }}
              className="otp-submit"
              disabled={isSubmitting || !email || !password || emailError || passwordError}
            >
              {isSubmitting ? "Logging in..." : "Login"}
            </MDBBtn>
          </form>
          <div className="login_flex">
            <p className="login_page_tag_line">DON'T HAVE ACCOUNT?</p>
            <Link to="/signup" className="register">
              Create Account Instead
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
