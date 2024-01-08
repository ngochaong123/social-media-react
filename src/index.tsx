import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from "./Components/Login";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);

reportWebVitals();
