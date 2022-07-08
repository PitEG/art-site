import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // add strict mode back before putting in production 
  // <React.StrictMode>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  // </React.StrictMode>
);
