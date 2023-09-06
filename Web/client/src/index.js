//modules and libray or framework maybe idk
import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('main'));
root.render(
  <React.StrictMode>

    <App />

  </React.StrictMode>
);
reportWebVitals();
