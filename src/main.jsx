import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from "react-dom/client" instead of "react-dom"
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
