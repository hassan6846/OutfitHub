import React from 'react';
import './Alert.css';

function Alert() {
  return (
    <div className='Alert'>
      <div className='wrapper'>
        {/* 1 */}
        <div><p>+1 408 666 7812</p></div>
        {/* 1 */}

        {/* 2 */}
        <div>
          <p>
            Sign up today and <span>GET 20% OFF</span> on your first order{' '}
            <span>| Sign Up Now</span>{' '}
          </p>
        </div>
        {/* 2 */}

        {/* 3 */}
        <div className='closebtn'>
          <img src='/close.svg' alt='Close button'  className='svg' />
        </div>
        {/* 3 */}
      </div>
    </div>
  );
}

export default Alert;
