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
         const { Productname, id, Quantity, price, ProductCategory } = action.payload;
         const existingProduct = state.products.find((product) => product.id === id);

         if (existingProduct) {
            // If product already exists, update its quantity
            existingProduct.quantity += Quantity || 1;
         } else {
            // If product is not in the cart, add it
            state.products.push({
               Productname,
               id,
               quantity: Quantity || 1,
               price,
               ProductCategory,
            });
         }
      },
      removeFromCart: (state, action) => {
         const { id } = action.payload;
         state.products = state.products.filter((product) => product.id !== id);
      },
      incrementProduct: (state, action) => {
         // Your logic for incrementing product quantity
      },
      decrementProduct: (state, action) => {
         // Your logic for decrementing product quantity
      },
      clearCart: (state) => {
         state.products = [];
      },
   },
});

export const { addToCart, removeFromCart, incrementProduct, decrementProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
