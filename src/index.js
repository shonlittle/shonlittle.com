/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-05
 */

// Add third-party dependencies.
import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Sentry from '@sentry/react';

// Add local dependencies.
import reportWebVitals from './reportWebVitals';
import App from './components/App';
import ErrorBoundary from './components/Common/ErrorBoundary';

// Add sentry configuration.
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});

// Create the root.
const root = ReactDOM.createRoot(document.getElementById('root'));
// Render the root.
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<p>Something went wrong.</p>}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === 'production') {
  reportWebVitals();
}
