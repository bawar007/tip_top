import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./Index.scss";
import AppProvider from "./App/Provider/Provider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./App/AdminPanel/AdminPanel";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
