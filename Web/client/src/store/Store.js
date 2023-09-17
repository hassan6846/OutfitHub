import { configureStore, combineReducers } from "@reduxjs/toolkit";

// Import your reducer files here
// import userReducer from "./userReducer";
// import productReducer from "./productReducer";

const rootReducer = combineReducers({
//   user: userReducer,
//   products: productReducer,
  // Add more reducers if you have them
});

export const store = configureStore({
  reducer: rootReducer,
  // Add middleware or other store configurations as needed
});

export default store;
