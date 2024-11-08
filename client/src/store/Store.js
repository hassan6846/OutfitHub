import { configureStore } from "@reduxjs/toolkit";
//Slices.
import CartSlice from "../Slices/CartSlice";
import LikedSlice from "../Slices/LikedSlice"
const store = configureStore({
  reducer: {
    cart: CartSlice,
    like:LikedSlice
  }
})


export default store;
