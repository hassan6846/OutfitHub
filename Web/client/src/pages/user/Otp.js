import React from 'react'
import { Link } from "react-router-dom"
// footer
import Footer from "../../Layouts/footer/Footer"
import "./Otp.css"
const Otp = () => {
    return (
        <div>

            <section className='otp-wrapper'>
                <Link to="/" className='otp-logo'> <img alt='company' src="./logo.svg" /> </Link>
                <div className='otp-container'>

                    <p className='otp-heading'>OTP Verification</p>
                    <div class="alert alert-success" role="alert">
                        We've sent a verificaton code to your email-ha *******@gmail.com</div>
                    <input className='otp-input' type="number" placeholder='Enter Verifcation Code' />
                 
                    <button type="submit" className='otp-submit'>Submit</button>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Otp