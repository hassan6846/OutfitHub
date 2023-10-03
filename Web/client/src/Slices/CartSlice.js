// createSlice
//InitialState
// OTHER SUB REDUCERS
import { createSlice } from "@reduxjs/toolkit";
const initialState={
    message:""
}
const CartSlice=createSlice({
reducers:{
   AddToCart:(state,actions)=>{

   }
}
})

export const {AddToCart}=CartSlice.actions
export default CartSlice.reducer