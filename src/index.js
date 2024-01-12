import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App/App";
import "./Index.scss";
import AppProvider from "./App/Pages/AppPage/AppPageProvider/AppPageProvider";

import { HashRouter, Routes, Route } from "react-router-dom";

import AdminPanel from "./App/Pages/AdminPanelPage/AdminPanel";
import Gallerysettings from "./App/Pages/AdminPanelPage/Pages/GallerySettingsPage/Gallerysettings";
import LoginPage from "./App/Pages/AdminPanelPage/Pages/LoginSettingsPage/LoginPage";
import OpinionsSettings from "./App/Pages/AdminPanelPage/Pages/OpinionsSettings/OpinionsSettings";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="*" element={<App />} />
          <Route exact path="/" element={<App />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/adminpanel" element={<AdminPanel />}>
            <Route path="gallerysettings" element={<Gallerysettings />} />
            <Route path="opinionssettings" element={<OpinionsSettings />} />
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  </React.StrictMode>
);
