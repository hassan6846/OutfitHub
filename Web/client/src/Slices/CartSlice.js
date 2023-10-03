// createSlice
//InitialState
// OTHER SUB REDUCERS
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    message:""
}
const CartSlice=createSlice({
reducers:{
    //ADD
   ADD_CART_ITEM:(state,actions)=>{

   },
// REMOVE
   REMOVE_CART_ITEM:()=>{

   }
}
})

export const {AddToCart}=CartSlice.actions
export default CartSlice.reducer