/**
 * © 2025 Little Shilling, Inc.
 * Shon Little
 * Created: 2025-05-05
 */

// Add third-party dependencies.
import React from "react";
import ReactDOM from "react-dom/client";

// Add local dependencies.
import "./assets/styles/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import ErrorBoundary from "./components/common/ErrorBoundary";

// Create the root.
const root = ReactDOM.createRoot(document.getElementById("root"));
// Render the root.
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
if (process.env.NODE_ENV === "production") {
  reportWebVitals();
}
