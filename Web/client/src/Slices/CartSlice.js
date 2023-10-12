import { createSlice } from "@reduxjs/toolkit"
const initialState = {
   Productname: "",
   id: "",
   Quanitity: 1,
   price: undefined,
   ProductCategory: "",

}
const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, actions) => {

      },
      RemoveFromCart: (state, actions) => {

      },
     IncrementProduct:(state,actions)=>{

     },
     DecrementProduct:(state,actions)=>{

     }

   }
}) 
export const {addToCart,RemoveFromCart,IncrementProduct,DecrementProduct}=cartSlice.actions
export default cartSlice.reducer