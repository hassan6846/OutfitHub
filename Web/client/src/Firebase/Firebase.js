import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import {getAuth,GoogleAuthProvider,signInWithPopup,PhoneAuthProvider} from "firebase/auth"
// Keys 
const firebaseConfig = {
    apiKey:"AIzaSyA26rm_4VBUQmfwpFw5zheNaMIi41jZPK8",
    authDomain:"ecommerce-57083.firebaseapp.com",
    projectId:"ecommerce-57083",
    storageBucket: "ecommerce-57083.appspot.com",
    messagingSenderId: "178749879926",
    appId:"1:178749879926:web:377710d6fd6ebcdacb9157",
    measurementId:"G-MBSY3M7DEH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// App Configs Props..
const auth=getAuth(app)
const analytics = getAnalytics(app);
// Auth Provider
const provider=new GoogleAuthProvider()
export const signInWithGoogle=()=>{
signInWithPopup(auth,provider)
.then((result)=>{
console.log(result)
}).catch((error)=>{
    alert(error)
})
}
