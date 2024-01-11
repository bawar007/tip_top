import { Navigate, Outlet } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import {
  deletePassCookie,
  getSesionPasCookie,
} from "./Pages/LoginSettingsPage/helpers/SetCookie";
import { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";

import SettingsProvider from "./AdminPanelProvider/SettingsProvider";
import { AppContext } from "../AppPage/AppPageProvider/AppPageProvider";
import LogoItem from "../../components/LogoItem";

const AdminPanel = () => {
  const { HOST } = useContext(AppContext);
  const [isMatch, setIsMatch] = useState(null);

  const SESION_TOKEN = sessionStorage.getItem("accessToken");

  const checkSesionToken = useCallback(async () => {
    let accessToken = !SESION_TOKEN
      ? getSesionPasCookie("SESION_TOKEN")
      : SESION_TOKEN;
    console.log(accessToken);
    if (accessToken.length === 0) setIsMatch(false);
    console.log(accessToken);
    await axios
      .get(`${HOST}/verify`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Cache-Control": "no-cache",
        },
      })
      .then((response) => {
        if (response.status === 201) setIsMatch(true);
      })
      .catch((error) => {
        deletePassCookie();
        sessionStorage.clear();
        setIsMatch(false);
        console.error(error.response.data.msg);
      });
  }, [HOST, SESION_TOKEN]);

  useEffect(() => {
    checkSesionToken();
  }, [checkSesionToken, SESION_TOKEN]);

  if (isMatch === null) return <LogoItem color="black" />;

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
