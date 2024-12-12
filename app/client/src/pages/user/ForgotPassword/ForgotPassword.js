import { React, useState } from 'react';
import toast from 'react-hot-toast';
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
//css
import "./ForgotPassword.css";

///main component...
const ForgotPassword = () => {
  const [showMsg, SetshowMsg] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const [showBtn, SetshowBtn] = useState(true);
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      toast.error('Kindly fill all the fields');
      return;
    }

    SetshowMsg(true);
    setShowInput(false);
    SetshowBtn(false);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <section className='Forgot_wrapper'>
        <form onSubmit={handleSubmit} className='forgor-form'>
          <h3 className='forgor-head'>Update Password</h3>

          <div className='alert_wrapper_change_event'>
            <p className='forgor-tag'>No Worries,We'll send you instructions in your email</p>
            <p style={{ color: "#848484", fontWeight: "bold", fontSize: '13px', textAlign: "center" }}>Note You cannot Change Password Again After 20 Days.</p>
            {showInput && (
              <MDBInput
                type='email'
                placeholder='Email'
                className='forgor-inp'
                size="lg"
                label="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
          </div>
          {showMsg && (
            <div className="padding_alert" role="alert">
              We've sent Link to your email {email} Open your <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">Gmail</a> Account.
            </div>
          )}
          {showBtn && (
            <MDBBtn style={{ backgroundColor: "#4BB497", border: "0px" }} className='recover_btn custom-button-color' type="submit" block size="lg">
              Recover Password
            </MDBBtn>
          )}

        </form>
      </section>
    </div>
  );
};

export default ForgotPassword;
