import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import ReactGA from 'react-ga4';

// ✅ Initialize Google Analytics with your Measurement ID
ReactGA.initialize('G-XXXXXXXXXX'); // Replace with your GA4 Measurement ID

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Track performance metrics with Google Analytics
reportWebVitals((metric) => {
  ReactGA.send({
    hitType: 'web-vital',
    eventCategory: 'Web Vitals',
    eventAction: metric.name,
    eventLabel: metric.id,
    value: Math.round(metric.value),
    nonInteraction: true,
  });
});
