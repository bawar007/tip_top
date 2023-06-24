import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
import {
  deletePassCookie,
  getSesionPasCookie,
} from "../LoginPage/helpers/SetCookie";
import { useCallback, useContext, useEffect, useState } from "react";
import { verifyPassword } from "../../Helper/PasswordEncryption";
import { AppContext } from "../../../Provider/Provider";

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
      const c = await verifyPassword(usersDB[0], cookie);
      console.log(c);
      if (c) {
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
    <>
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
    </>
  );
};

export default AdminPanel;
