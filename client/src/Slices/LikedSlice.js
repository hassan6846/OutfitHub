import { createSlice } from "@reduxjs/toolkit";

const LikedSlice = createSlice({
  name: "like",
  initialState: {
    products: [],
  },
  reducers: {
     ///sync the liked
        // clear like
        //add to like 
        //remove item from likes

    addtoLiked: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.products.find((item) => item._id === newItem._id);

      if (!existingItem) {
        // If the item doesn't exist, add it to the products array
        state.products.push({ ...newItem });
      }
      console.log(state)
    },
    // Optional: Remove item from liked products (you can implement it based on your requirements)
    removeFromLiked: (state, action) => {
      state.products = state.products.filter((product) => product._id !== action.payload._id);
    },
    ClearLikes:(state)=>{
        state.products = [];
    },
    setLikedItems:(state,action)=>{
      state.products=action.payload
    }
  },
});

export const { addtoLiked, removeFromLiked } = LikedSlice.actions;
export default LikedSlice.reducer;
