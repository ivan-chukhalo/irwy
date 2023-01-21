import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import data from "./verbs.json"

ReactDOM.render(
  <React.StrictMode>
    <App 
      data={data}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

