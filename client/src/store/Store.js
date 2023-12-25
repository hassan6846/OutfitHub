import { configureStore } from "@reduxjs/toolkit";
//Slices.
import CartSlice from "../Slices/CartSlice";
const store = configureStore({
  reducer: {
    cart: CartSlice

  }
})


export default store;
