// src/store.js
import { legacy_createStore } from "redux"; // Import the legacy_createStore function
import CartReducer from "./reducers/UserReducer"; // Assuming UserReducer is the default export

const store = legacy_createStore(CartReducer); // Create the store using the legacy_createStore function

export default store;
