import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import App from './App';
import AppMain from './AppMain';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

import { Auth0Provider } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading</h1>} persistor={persistor} >
        <Auth0Provider
          domain="https://dev-bbnxpo4o.us.auth0.com"
          clientId="drWkUAB9XLwuRK20Q8nukMLgrdv4EfmI"
          redirectUri="http://localhost:3001/mydash">
          <App/>
        </Auth0Provider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
