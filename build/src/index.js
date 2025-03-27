import "./styles.css"; // Ensure this line is not missing
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log("App:", App); // Debugging log

const rootElement = document.getElementById("root");
if (!rootElement) {
  console.error("Root element not found!");
} else {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}
