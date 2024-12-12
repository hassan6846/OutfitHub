import React, { useState, useEffect } from "react";
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
import axios from "axios";


const Signup = () => {


    const steps = ['1. Enter Details', '2. Complete'];
    const [activeStep, setActiveStep] = useState(0);

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    const [buttonActive, setButtonActive] = useState(true);

    // useEffect for validation and enabling/disabling the button
    useEffect(() => {
        const isFormValid = name && lastname && validateEmail(email) && phone && validatePassword(password) && password === cpassword;
        setButtonActive(!isFormValid); // disable if form is not valid
    }, [name, lastname, email, phone, password, cpassword]);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const validatePassword = (password) => {
        return password.length >= 7;
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();
        
        const username = `${name}${lastname}`;

        try {
            const response = await axios.post(`${ENDPOINT}/register`, {
                username,
                email,
                phone,
                password,
            });
            if (response.data.success) {
                toast.success("Account created successfully");
                handleNext();
             
            }
        
        } catch (error) {
            console.error(error);
            toast.error(error.response.data.message);
        }
    };

    return (
        <section className="signup_container">
            <div className="signup_form_wrapper">
                <h1 className="signup_head">Sign up for an account</h1>
                <p className="para_signup">
                    No credit card required. Already have an account? <Link to="/login" className="Link_login">Log in.</Link>
                </p>

                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>

                <Fade in={activeStep === 0}>
                    <div className="stepper_1" style={{ display: activeStep === 0 ? 'block' : 'none' }}>
                        <InputProps onChange={(e) => setEmail(e.target.value)} title="E-mail" type="email" />
                        <div className="input_flex_signup">
                            <InputProps onChange={(e) => setName(e.target.value)} title="First name" type="text" />
                            <InputProps onChange={(e) => setLastname(e.target.value)} title="Last name" type="text" />
                        </div>
                        <InputProps onChange={(e) => setPassword(e.target.value)} title="Password" type="password" />
                        <InputProps onChange={(e) => setCpassword(e.target.value)} title="Confirm password" type="password" />
                        <InputProps onChange={(e) => setPhone(e.target.value)} title="Phone Number" type="number" />
                        <div className="btn_next">
                            <MDBBtn disabled={buttonActive} onClick={HandleSubmit} style={{ backgroundColor: "#4BB497" }} className="next_action">
                                Create my account
                            </MDBBtn>
                        </div>
                    </div>
                </Fade>

                {activeStep === steps.length && (
                    <>
                        <p style={{ marginBottom: "0" }} className="email_head">Account created successfully</p>
                        <p className="para_signup">You'll be redirected in a few seconds.</p>
                        <div className="animation_frame">
                            <iframe title="animation" src="https://lottie.host/embed/d47526ca-363e-4b36-aca8-d9f655b05ae8/p7PkPstxRx.json"></iframe>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default Signup;
