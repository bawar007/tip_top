import { Navigate, Outlet } from "react-router-dom";
import Navigation from "./Navigation/Navigation";

const AdminPanel = () => {
  const getPassCookie = () => {
    var name = "isMatch=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookieArray = decodedCookie.split(";");

    // Przeszukiwanie wszystkich ciasteczek w poszukiwaniu wartości username
    for (var i = 0; i < cookieArray.length; i++) {
      var cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  };

  const userIsMatch = getPassCookie();
  return (
    <>
      {userIsMatch ? (
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
