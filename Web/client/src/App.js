import React, { useReducer } from 'react';
import { UserContext } from './context/UserContext';
import AllRoutes from './Routing';

/**
 * Pages
 */

// Define your initialState and reducer functions here
const initialState = {}; // Replace with your initial state
const reducer = (state, action) => {
  // Define your reducer logic here
  return state;
};
const init = (initialState) => {
  // Define your init logic here if needed
  return initialState;
};

function App() {
  /**
   * // benefits of loading fonts in app.js
   *  we need context api
   */

  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <AllRoutes />
    </UserContext.Provider>
  );
}

export default App;
