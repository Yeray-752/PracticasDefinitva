import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProviderWrapper } from './context/theme.context';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
      
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();