import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import { DataProvider } from './context/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DataProvider>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </DataProvider>  
);


