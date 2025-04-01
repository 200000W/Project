import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot
import App from "./App";
import "./styles/main.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Corrected
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
