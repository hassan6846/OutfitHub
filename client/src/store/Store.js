import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slices/CartSlice";
import LikedSlice from "../Slices/LikedSlice";
import UserSlice from "../Slices/UserSlices";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // default storage (localStorage for web)

const persistConfig = {
  key: "root", // key to store the root state
  storage, // specifies that we want to use localStorage
};

const rootReducer = {
  cart: persistReducer(persistConfig, CartSlice),
  like: persistReducer(persistConfig, LikedSlice),
  user: UserSlice
};

const store = configureStore({
  reducer: rootReducer,
});

const persistor = persistStore(store); // Create the persistor

export { store, persistor }; // Export both store and persistor
