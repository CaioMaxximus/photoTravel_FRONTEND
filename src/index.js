import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import App from './App'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter forceRefresh = {true}>
      <App />
  </BrowserRouter>
,
  document.getElementById('root')
);


