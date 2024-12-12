import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   products: [],
   quantity: 0,
   isLoading: true,
   amount: 0,
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart: (state, action) => {
         const newItem = action.payload;
         const existingItem = state.products.find((item) => item._id === newItem._id);

         if (existingItem) {
            // If item already exists, increase its quantity
            existingItem.quantity += newItem.quantity || 1;
         } else {
            // If item doesn't exist, add it to the products array
            state.products.push({ ...newItem, quantity: 1 });
         }

         // Update overall cart quantity and amount
         state.quantity += 1;
         state.amount += newItem.price * (newItem.quantity || 1);
      },
      removeFromCart: (state, action) => {

         state.products = state.products.filter(product => product._id !== action.payload.id);


      },
      incrementProduct: (state, action) => {
         const productToIncrement = state.products.find(
            (product) => product._id === action.payload.id
         );

         if (productToIncrement) {
            productToIncrement.quantity += 1;
            state.quantity += 1;
           
         }
      },
      decrementProduct: (state, action) => {
         const productToDecrement = state.products.find(
            (product) => product._id === action.payload.id
         );

         if (productToDecrement && productToDecrement.quantity > 1) {
            productToDecrement.quantity -= 1;
            state.quantity -= 1;
            
         } else if (productToDecrement && productToDecrement.quantity === 1) {
            // If quantity is 1, remove the product from the cart
            state.quantity -= 1;
        
            state.products = state.products.filter(
               (product) => product._id !== action.payload.id
            );
         }
      },
      clearCart: (state) => {
         state.products = [];

      },
   },
});

export const { addToCart, removeFromCart, incrementProduct, decrementProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
