//modules and libray or framework maybe idk
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './App';
// css
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// Redux Store 
import { Provider } from 'react-redux';
import store from './store/Store'

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(

    <Provider store={store}>
        <App />
    </Provider>
);
reportWebVitals();
