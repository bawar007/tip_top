import { useContext, useRef, useState } from "react";
import { AppContext } from "../../../AppPage/AppPageProvider/AppPageProvider";
import { useNavigate } from "react-router-dom";

import { deletePassCookie, setPassCookie } from "./helpers/SetCookie";
import { WrongHandler } from "./helpers/Wrong/WrongHelpers";
import axios from "axios";

import LogoItem from "../../../../components/LogoItem";

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

  const handleTest = async (response) => {
    const { role, userToken } = response.data;
    console.log(role);
    //uzyć bcrypt do sprawdzania hasła po stronie serwera i zwracania odpowiednich błędów

    if (response === "wrong") {
      WrongHandler(wrongSpan, inputs, "BAD_L_P");
      deletePassCookie();
      return;
    }
    if (role !== USER_ADMIN) return;
    sessionStorage.setItem("accessToken", userToken);
    setPassCookie(userToken);
    navigate("/adminpanel");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!USER_HOST.login && !USER_HOST.password) {
      WrongHandler(wrongSpan, inputs, "NO_DATE");
      return;
    }
    setLoading(true);

    await axios
      .post(
        `${HOST}/login`,
        { login: USER_HOST.login, password: USER_HOST.password },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then((response) => {
        handleTest(response);
      })
      .catch((error) => {
        if (error.response && error.response.status === 404) {
          WrongHandler(wrongSpan, inputs, "BAD_L_P");
          deletePassCookie();
          sessionStorage.clear();
          handleTest("wrong");
        }
      })
      .finally(() => setLoading(false));
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
            <LogoItem />
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
