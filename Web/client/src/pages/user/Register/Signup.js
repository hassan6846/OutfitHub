// ... (your existing imports)

import { React, useState } from "react";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";
// import { useFormik } from "formik";
// import axios from "axios";

// css
import "./Signup.css";
// Local Components
import Footer from "../../../Layouts/footer/Footer";
import ResponsiveNav from '../../../Layouts/NavbarMain/ResponsiveNav'
import { MDBBtn } from "mdb-react-ui-kit";
import InputProps from "../../../components/inputprops/InputProps";

import { MuiOtpInput } from "mui-one-time-password-input"
// Stepper
import { Stepper } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Fade from "@mui/material/Fade";
// icon
import { CiMail } from "react-icons/ci";

const Signup = () => {
    const steps = ['1. Enter Details', '2. Verify email', '3. Verify phone number']
    const [activeStep, setActiveStep] = useState(0);

    const [otp, setOtp] = useState('')
    /* 
    FunctionSteppers
    */

    // nextStep
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleChange = (newValue) => {
        setOtp(newValue)
    }
    //Goback

    return (
        <>
            <ResponsiveNav />
            <section className="signup_container">

                <div className="signup_form_wrapper">
                    <h1 className="signup_head">Sign up for an account</h1>
                    <p className="para_signup" >No credit card required. Already have an account?<Link to="/login" className="Link_login">Log in.</Link></p>

                    {/* Stepper will be here */}
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                    {/* 1 */}
                    <Fade in={activeStep === 0}>
                        <div className="stepper_1" style={{ display: activeStep === 0 ? 'block' : 'none' }}>
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
                                <MDBBtn onClick={handleNext} style={{ backgroundColor: "#4BB497" }} className="next_action">Create my account</MDBBtn>
                            </div>
                        </div>
                    </Fade>
                    {/* 2 */}
                    <Fade in={activeStep === 1}>
                        <div className="stepper_2" style={{ display: activeStep === 1 ? 'block' : 'none' }}>
                            <p style={{ marginBottom: "0" }} className="email_head">Verify your email</p>

                            <p className="email_verify_tag">  We have sent an <span className="email_bold">otp</span> email to <span className="email_bold"> ha6817330@gmail.com</span></p>

                            <div className="otp_justify"><div className="signup_otp_verify"><MuiOtpInput gap={1} value={otp} onChange={handleChange} /></div></div>
                            <div className="otp_verify_submit"><MDBBtn className="otp_verify_btn" onClick={handleNext} style={{ backgroundColor: "#4BB497" }}>Verify</MDBBtn></div>

                            <div className="instruction_mail">
                                <div className="icon_flex_mail">  <CiMail size={40} /></div>
                                <ol>
                                    <li>1 Go to your mail box and open the <span className="email_bold">email that we just sent you.</span></li>
                                    <li>2 Click on the <span className="email_bold">link</span> to <span className="email_bold">verify</span> your account to continue.</li>
                                </ol>
                            </div>
                            <p className="para_signup">Haven’t received the email from us? <span className="Link_login"> Resend email.</span></p>
                        </div>
                    </Fade>
                    {/* 3 */}
                    <Fade in={activeStep === 2}>
                        <div className="stepper_3" style={{ display: activeStep === 2 ? 'block' : 'none' }}>
                            <p style={{ marginBottom: "0" }} className="email_head">Enter OTP Code.</p>
                            <p className="para_signup" >We have send Otp To <span className="email_bold"> 03004834152</span></p>
                            {/* otp */}
                            <div className="otp_justify"><div className="signup_otp_verify"><MuiOtpInput gap={1} value={otp} onChange={handleChange} /></div></div>
                            <div className="otp_verify_submit"><MDBBtn className="otp_verify_btn" onClick={handleNext} style={{ backgroundColor: "#4BB497" }}>Verify OTP.</MDBBtn></div>

                        </div>
                    </Fade>

                    {/* optional if The Steps Ends Then Show The Lottie Files. */}
                    {activeStep === steps.length ? (
                        <>
                            <p style={{ marginBottom: "0" }} className="email_head">Account created sucessfully</p>
                            <p className="para_signup" >You'll be redirected in few Seconds.</p>
                            <div className="animation_frame"><iframe title="animtion" src="https://lottie.host/embed/d47526ca-363e-4b36-aca8-d9f655b05ae8/p7PkPstxRx.json"></iframe></div>
                        </>
                    ) : null
                    }

                </div>
            </section>
            <Footer />
        </>
    )
};

export default Signup;
