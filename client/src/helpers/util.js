import {jwtDecode  as jwt_decode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const getToken = () => {
  const token = Cookies.get('token'); // Get the token from the cookies
  if (!token) return null;
  
  try {
    const decodedToken = jwt_decode(token);
    return decodedToken;  // Return the decoded token
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; // Return null if decoding fails
  }
};

export const isTokenExpired = () => {
    const token = getToken();
    if (!token) return true;
  
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decodedToken.exp < currentTime;  // Check if token is expired
  };
  