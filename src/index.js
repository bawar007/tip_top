import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./Index.scss";
import AppProvider from "./App/provider/AppProvider";

import { Routes, Route, HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="*" element={<App />} />
          <Route exact path="/" element={<App />} />
        </Routes>
      </HashRouter>
    </AppProvider>
  </React.StrictMode>
);
