import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

import { MDBBtn } from "mdb-react-ui-kit";
import InputProps from "../../../components/inputprops/InputProps";
import { Stepper } from "@mui/material";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Fade from "@mui/material/Fade";
import toast from "react-hot-toast";
import { ENDPOINT } from "../../../api/Endpoint";
//ENDPOINT

const Signup = () => {
    const steps = ['1. Enter Details', '2. Complete'] //state
    const [activeStep, setActiveStep] = useState(0);
    //States
    const [name, setname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')
    //Button Disable
    const [buttonActive, setbuttonActive] = useState(true)


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    //PASSWORD...
    const validatePassword = (password) => {
        return password.length >= 7;
      };

    // Validation EMAIL
    const validateEmail = (email) => {
        // Basic email validation
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };
    //  Handle SUBMIT.....
    const HandleSubmit = async (e) => {
        e.preventDefault();
    }
    return (
        <>

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
                            <InputProps Change={(e) => setemail(e.target.value)} title="E-mail" type="Email" />
                            <div className="input_flex_signup">
                                <InputProps onChange={(e) => setname(e.target.value)} title="First name" type="text" />
                                <InputProps onChange={(e) => setlastname(e.target.value)} title="Last name" type="text" />
                            </div>
                            <InputProps Change={(e) => setpassword(e.target.value)} title="Password" type="password" />
                            <InputProps Change={(e) => setcpassword(e.target.value)} title="Confirm password" type="password" />
                            {/* Country & Number */}
                            <InputProps title="Phone Number" type="number" />
                            <div className="btn_next">
                                <MDBBtn disabled={buttonActive} onClick={handleNext} style={{ backgroundColor: "#4BB497" }} className="next_action">Create my account</MDBBtn>
                            </div>
                        </div>
                    </Fade>
                    {/* 2 */}

                    {/* 3 */}


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

        </>
    )
};

export default Signup;
