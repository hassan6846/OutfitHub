//modules and libray or framework maybe
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
// import {Provider} from "react-redux"
import App from './App';
import reportWebVitals from './reportWebVitals';
// other imports
// import Store from "./store"
const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>
 {/* <Provider store={Store}> */}
  <App />
  {/* </Provider> */}
  </React.StrictMode>
);
reportWebVitals();
