import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DataProvider} from './dataContext/DataContext'


ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
    <Router>
    <App />
    </Router>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
