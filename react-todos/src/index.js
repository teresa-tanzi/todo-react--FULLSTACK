import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Looks in document (HTML file) and find the first element that has the id 'root'
// than replasec it with our React application (App.js)
const root = ReactDOM.createRoot(document.getElementById('root'));
// We hook to the element with id "root" this component
// App is a component: App.js
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
