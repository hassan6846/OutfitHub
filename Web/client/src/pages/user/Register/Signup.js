// modules and Liabrary
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useFormik } from "formik";
import axios from "axios";
// css
import "./Signup.css";
//  Local Components
import Footer from "../../../Layouts/footer/Footer";
import ResponsiveNav from '../../../Layouts/NavbarMain/ResponsiveNav'
import { MDBInputGroup, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import InputProps from "../../../components/inputprops/InputProps";
import CountrySelect from "../../../components/inputprops/AutoComplete";

const Signup = () => {
    return (
        <>
            <ResponsiveNav />
            <section className="signup_container">
                <div className="signup_form_wrapper">
                    <h1 className="signup_head">Sign up for a account</h1>
                    <p className="para_signup" >No credit card required. Already have an account?<Link to="/login" className="Link_login">Log in.</Link></p>
                    <InputProps title="E-mail" type="Email" />
                    <div className="input_flex_signup">
                        <InputProps title="First name" type="text" />
                        <InputProps title="Last name" type="text" />
                    </div>
                    <InputProps title="Password" type="password" />
                    <InputProps title="Confirm password" type="password" />
                    {/* Country & Number */}
                    <InputProps title="Phone Number" type="number" />
                    <div className="btn_next">
                        <MDBBtn style={{ backgroundColor: "#4BB497" }} className="next_action">Create my account</MDBBtn>
                    </div>


                </div>
            </section>
            <Footer />
        </>
    )
};

export default Signup;
