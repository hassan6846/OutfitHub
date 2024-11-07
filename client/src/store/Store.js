import { configureStore } from "@reduxjs/toolkit";
//Slices.
import CartSlice from "../Slices/CartSlice";
import LikedSlice from "../Slices/LikedSlice"
import UserSlice from "../Slices/UserSlices"
const store = configureStore({
  reducer: {
    cart: CartSlice,
    like:LikedSlice,
    user:UserSlice,
  }
})


export default store;
