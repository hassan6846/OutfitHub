import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // You can store user information here, like username, email, etc.
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Log in action
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },

    // Log out action
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
