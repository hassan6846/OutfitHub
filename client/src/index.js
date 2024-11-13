import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';


//components entry.
import App from './App';
//css
import './index.css';

//store And State
import { Provider } from 'react-redux';
import { store, persistor } from './store/Store'
import { PersistGate } from 'redux-persist/integration/react';



const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(

    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>
);
reportWebVitals();
