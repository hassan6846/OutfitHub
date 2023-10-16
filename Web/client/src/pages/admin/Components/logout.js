import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
const Logout = () => {
  const navigate = useNavigate();

  // This useEffect will execute when the component mounts.
  useEffect(() => {

    // Set up an interval to periodically perform the logout and navigation.
    const intervalId = setInterval(() => {
      // Perform logout actions here, e.g., clear authentication tokens, session data, etc.
      // You can use localStorage, sessionStorage, or make API calls to log the user out.

      // After logout, navigate the user to the login page (or any other page you prefer).
      navigate('/');
    }, 4010); // Interval of 3000 milliseconds (3 seconds)

    // This cleanup function will clear the interval when the component unmounts.
    return () => {
      clearInterval(intervalId);
    };
  }, [navigate]);

  return (
    <div style={{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <CircularProgress color='info'/>
      {/* You can also display a message or loading spinner here */}
    </div>
  );
};

export default Logout;
