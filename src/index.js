import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./Index.scss";
import AppProvider from "./App/provider/AppProvider";

import { BrowserRouter } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
