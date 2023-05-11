import React from 'react'
import './Log.css';
import './Log2.css';



// import Logo from '../components/Logo'
const Log = () => {
    return (
        <section className='log_wrapper'>
            <section className='log_child1'>
                <div className='logo-flow-wrapper'><div className='logo__element'  > <img src='/logo.svg' alt='DESIGN' className='logo-svg' /> </div></div>
{/* add more navs here */}
<div className='form_wrapper'>
<div className='form__centered'>
{/* add items  form   here */}
<p className='form_heading'> Create Account</p>
<button className='auth_google   '  > SIGNUP WITH GOOGLE</button>
<p className='or' >or</p>
<div className='inputs_wrapper'>
   <div className='inputs__items'> <input  placeholder='Email'  className='input_form'></input></div>
   <div className='inputs__items'> <input   placeholder='Password' className='input_form'></input></div>
</div>
<button className='google_btn login_BTN '  > Create Account </button>
</div>
</div>
{/* end more navs here */}
            </section>
            <section className='log_child2'>
                <div className='log_content'>
                    <div className='div_txt'>
                        <p className='log-txt'>Shop everything you need, from fashion to electronics, beauty to home decor - all in one convenient place. Your ultimate online shopping destination</p> <br />

                    </div>
                    <div className='Name_and_link'>
                        <div className='CEO'><p className='review_name'>EDDIE HALL</p>  </div>
                        <div className='btns_wrappers' >   <div className='btn_1'></div>  <div className='btn_2'></div>     </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Log