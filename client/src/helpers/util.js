import {jwtDecode  as jwt_decode } from 'jwt-decode';
import Cookies from 'js-cookie';

export const getToken = () => {
  const token = Cookies.get('token'); 
  if (!token) return null;
  
  try {
    const decodedToken = jwt_decode(token);
    return decodedToken;  
  } catch (error) {
    console.error("Error decoding token:", error);
    return null; 
  }
};

export const isTokenExpired = () => {
    const token = getToken();
    if (!token) return true;
  
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000; 
    return decodedToken.exp < currentTime;  
  };
  