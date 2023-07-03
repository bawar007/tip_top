import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import {
  deletePassCookie,
  getSesionPasCookie,
} from "./Pages/LoginSettingsPage/helpers/SetCookie";
import { useCallback, useContext, useEffect, useState } from "react";
import { verifyPassword } from "./Helper/PasswordEncryption";
import { AppContext } from "../AppPage/AppPageProvider/AppPageProvider";
import SettingsProvider from "./AdminPanelProvider/SettingsProvider";

const AdminPanel = () => {
  const [isMatch, setIsMatch] = useState(true);
  const location = useLocation();
  const SESION_TOKEN = location.state?.SESION_TOKEN;
  const cookie = getSesionPasCookie("SESION_TOKEN=");
  const { phoneNumberFromZleceniodawcy } = useContext(AppContext);

  const deleteCookie = useCallback(() => deletePassCookie(), []);

  const checkSesionToken = useCallback(async () => {
    if (SESION_TOKEN) {
      setIsMatch(true);
    } else if (cookie) {
      let usersDB = phoneNumberFromZleceniodawcy;
      usersDB = usersDB.map((user) => user.password);
      const verifyCookie = await verifyPassword(usersDB[0], cookie);
      if (verifyCookie) {
        setIsMatch(true);
      } else {
        setIsMatch(false);
        deleteCookie();
      }
    } else {
      setIsMatch(false);
      deleteCookie();
    }
  }, [SESION_TOKEN, cookie, deleteCookie, phoneNumberFromZleceniodawcy]);

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
