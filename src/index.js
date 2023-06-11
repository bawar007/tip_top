import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./Index.scss";
import AppProvider from "./App/Provider/Provider";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from "./App/AdminPanel/AdminPanel";

import AdminPanelContent from "./App/AdminPanel/Components/AdminPanelContent/AdminPanelContent";
import Gallerysettings from "./App/AdminPanel/Components/AdminPanelContent/Settings/Gallerysettings/Gallerysettings";
import WhyUsSettings from "./App/AdminPanel/Components/AdminPanelContent/Settings/WhyUsSettings/WhyUsSettings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/adminpanel" element={<AdminPanelContent />}>
            <Route path="gallerysettings" element={<Gallerysettings />} />
            <Route path="whyussettings" element={<WhyUsSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
