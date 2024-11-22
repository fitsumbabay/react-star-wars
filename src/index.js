import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Import BrowserRouter and rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

// Create a root element for the React application
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
// Wrap the App component with the Router component to enable the router features.
root.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
