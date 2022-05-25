import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

ReactDOM.render(
<BrowserRouter>
{/* <ErrorBoundary>  */}
    <App />
    {/* </ErrorBoundary> */}
  </BrowserRouter>,

  document.getElementById('root')
);

reportWebVitals();
