import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the new way to create root in React 18+
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create a root using createRoot
root.render(
  <Router>
    <App />
  </Router>
);
