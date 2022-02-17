import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Imagepreview from './Imagepreview';
import reportWebVitals from './reportWebVitals';
import App2 from './App2';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <React.StrictMode>
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
