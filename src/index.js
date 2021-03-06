import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import './fonts/Refita.ttf';
import './fonts/LucianoDisplay-Light.ttf';
import './fonts/LucianoDisplay-Regular.ttf';

import App from './components/App';
import Cv from './components/Cv'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="" element={<App/>}/>
        <Route path="/cv" element={<Cv/>}/>

    </Routes>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
