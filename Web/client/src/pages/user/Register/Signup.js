// modules and Liabrary
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import axios from "axios";
// css
import "./Signup.css";
//  Components
import Footer from "../../../Layouts/footer/Footer";
import Loginbtns from "../../../components/IconBtns/LoginPageBtns";
import { MDBInputGroup, MDBInput, MDBBtn } from "mdb-react-ui-kit";
const Signup = () => {
  const [isSubmitting, setIsSubmitting] = useState(true); // Track login/SignUP submission
  // Regex.
  const specialChar = /[12348]/;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;


  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      PhoneNumber: "",
      password: "",
    },

    validateOnBlur: false,
    validateOnChange: true,
    onSubmit: async (values) => {

      setIsSubmitting(false)
      //making sure if password length is greater than
      if (values.password.length < 8) {
        toast.error("Password must be 8 chracter long");
        return;
      }
      //special character
      else if (!specialChar.test(values.password)) {
        toast.error("Password must contain at least one special character");
      }

      //atleat one lowercase
      else if (!uppercaseRegex.test(values.password)) {
        toast.error(
          "Password must contain at least one uppercase and one lowercase character"
        );
        return;
      } else if (!lowercaseRegex.test(values.password)) {
        toast.error(
          "Password must contain at least one uppercase and one lowercase character"
        );
        return;
      }
      ///email field
      else if (values.email === "") {
        toast.error("kindly fill the email field");
      } else if (values.username === "") {
        toast.error("Kindly fill the Username field");
      } else if (values.username.length < 5) {
        toast.error("Username must be at least 6 characters long ");
        return;
      }

      const api = axios.create({
        baseURL: "http://localhost:3001",
      });
      // register promise pending
      const Register = async () => {
        try {
          const response = await api.post("/api/v1/register", {
            username: values.username,
            email: values.email,
            password: values.password,
          });
          return response.data;
        } catch (err) {
          throw err;
        }
      };
      toast.promise(Register(), {
        loading: "Creating Account",
        success: <b>Account Created Successfully</b>,
        error: <b>Error While creating account</b>,
      });
    },
  });
  useEffect(() => {
    document.title = "SIGN UP";
  });
  return (
    <div>
      <div className="main_wrapper">
        <Link to="/" className="login-logo">
          <img alt="company" src="https://svgshare.com/i/xRe.svg" />
        </Link>

        <form
          onSubmit={formik.handleSubmit}
          method="post"
          className="form_wrapper"
        >
          <p className="signup_txt">Create Account</p>
          <Loginbtns />
          <p className="register_or_btns">OR CONTINUE WITH</p>
          <MDBInput
            {...formik.getFieldProps("username")}
            className="signup_email"
            type="text"
            placeholder="Name"
            label=" Name"
          />
          <MDBInput
            {...formik.getFieldProps("email")}
            className="signup_email"
            type="text"
            placeholder="Email"
            label=" Email"
          />
          {/* OTP FIELD */}
          <MDBInputGroup>
            <MDBInput
              className="signup_email"
              placeholder="Phone Number"
              type="number"
              label="Phone Number"

            />
            <MDBBtn outline>Send</MDBBtn>
          </MDBInputGroup>
          <MDBInput
            className="signup_email"
            placeholder="OTP From Number"
            type="number"
            label="OTP"
            inputMode="numeric"
            pattern="\d{6}"
            autoComplete="one-time-code"
            required
          />
          <MDBInput
            {...formik.getFieldProps("password")}
            className="signup_email"
            type="password"
            placeholder="Password"
            label="Password"
          />
          <MDBInput
            {...formik.getFieldProps("password")}
            className="signup_email"
            type="password"
            placeholder="Repeat Repeat"
            label="Repeat Password"
          />
          <MDBBtn
            style={{ backgroundColor: "#4BB497", border: "0px" }}
            block
            type="submit"
            size="lg"
            className="register_FORM_BTN"
            onClick={formik.handleSubmit}
          >
            {isSubmitting ? "Register" : "Creating account please wait..."}
          </MDBBtn>
          <p className="register_login_tag">Already Have Account</p>
          <Link className="regsiter_login_link" to="/login">
            Login Instead....
          </Link>
        </form>
      </div>
      <Footer MarginTop="0vmax" />
    </div>
  );
};

export default Signup;
