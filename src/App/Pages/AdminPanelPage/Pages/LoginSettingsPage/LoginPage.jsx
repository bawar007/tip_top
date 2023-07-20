import { useContext, useRef, useState } from "react";
import { AppContext } from "../../../AppPage/AppPageProvider/AppPageProvider";
import { useNavigate } from "react-router-dom";

import { deletePassCookie, setPassCookie } from "./helpers/SetCookie";
import { WrongHandler } from "./helpers/Wrong/WrongHelpers";
import axios from "axios";

const USER_ADMIN = Number(process.env.REACT_APP_USER_ADMIN);
const API_KEY = process.env.REACT_APP_API_KEY;

const LoginPage = () => {
  const { HOST } = useContext(AppContext);
  const [USER_HOST, setUserHost] = useState({
    password: "",
    login: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const wrongSpan = useRef(null);
  const inputs = document.querySelectorAll(".adminInput");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!USER_HOST.login && !USER_HOST.password) {
      WrongHandler(wrongSpan, inputs, "NO_DATE");
      return;
    }
    setLoading(true);
    const headers = {
      Authorization: `Bearer ${API_KEY}`,
    };
    try {
      await axios
        .post(`${HOST}/login`, USER_HOST, {
          headers,
        })
        .then((response) => {
          const userRole = response.data.file.role;
          if (userRole === USER_ADMIN) {
            const SESION_TOKEN = response.data.file.accesToken;
            return SESION_TOKEN;
          }
        })
        .then((token) => {
          const ACCESS_TOKEN = token;
          navigate("/adminpanel");
          sessionStorage.setItem("accessToken", ACCESS_TOKEN);
          setPassCookie(ACCESS_TOKEN);
        });
    } catch (error) {
      if (error.response && error.response.status === 401) {
        WrongHandler(wrongSpan, inputs, "BAD_L_P");
        deletePassCookie();
      } else {
        console.error("Wystąpił błąd podczas logowania:", error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "login") {
      setUserHost((prev) => {
        return {
          ...prev,
          login: e.target.value,
        };
      });
    }
    if (e.target.name === "password") {
      setUserHost((prev) => {
        return {
          ...prev,
          password: e.target.value,
        };
      });
    }
  };

  return (
    <section className="LoginPage">
      <div className="login">
        <h1>Panel Administratora</h1>
        <form className="LoginPage--form" onSubmit={handleLogin}>
          <label>
            <input
              type="text"
              name="login"
              onChange={handleChange}
              className="adminInput admin-login"
            />
            <span
              className="login-span"
              style={
                USER_HOST.login.length > 1
                  ? { left: " 10px", top: "-15px", color: "white" }
                  : null
              }
            >
              Login
            </span>
          </label>
          <label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="adminInput admin-pass"
            />
            <span
              className="pass-span"
              style={
                USER_HOST.password.length > 1
                  ? { left: " 10px", top: "-15px", color: "white" }
                  : null
              }
            >
              Hasło
            </span>
          </label>
          <span ref={wrongSpan}></span>

          {loading ? (
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <button className="btn draw-border" type="submit">
              Zaloguj
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
