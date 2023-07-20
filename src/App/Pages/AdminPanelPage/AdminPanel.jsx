import { Navigate, Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import { deletePassCookie } from "./Pages/LoginSettingsPage/helpers/SetCookie";
import { useCallback, useEffect, useState } from "react";

import SettingsProvider from "./AdminPanelProvider/SettingsProvider";

const AdminPanel = () => {
  const [isMatch, setIsMatch] = useState(true);
  const SESION_TOKEN = sessionStorage.getItem("accessToken");

  const deleteCookie = useCallback(() => deletePassCookie(), []);

  const checkSesionToken = useCallback(async () => {
    if (SESION_TOKEN) {
      setIsMatch(true);
    } else {
      setIsMatch(false);
      deleteCookie();
    }
  }, [SESION_TOKEN, deleteCookie]);

  useEffect(() => {
    checkSesionToken();
  }, [checkSesionToken]);

  return (
    <SettingsProvider>
      {isMatch ? (
        <div className="AdminPanelContent">
          <Navigation />
          <div className="AdminPanelContent--setings">
            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/admin" replace={true} />
      )}
    </SettingsProvider>
  );
};

export default AdminPanel;
