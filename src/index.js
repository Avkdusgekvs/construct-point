
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Debugging logs
console.log("React is starting...");
const rootElement = document.getElementById("root");
console.log("Root Element:", rootElement);

// Ensure `createRoot()` is called only once
if (!window.__root) {
  window.__root = ReactDOM.createRoot(rootElement);
}

window.__root.render(<App />);
