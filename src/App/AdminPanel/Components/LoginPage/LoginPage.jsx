import { useContext, useRef, useState } from "react";
import { encryptPassword } from "../../Helper/PasswordEncryption";
import { AppContext } from "../../../Provider/Provider";
import { useNavigate } from "react-router-dom";

import { deletePassCookie, setPassCookie } from "./helpers/SetCookie";
import { WrongHandler } from "./Wrong/WrongHelpers";

const USER_ADMIN = Number(process.env.REACT_APP_USER_ADMIN);

const LoginPage = () => {
  const { phoneNumberFromZleceniodawcy } = useContext(AppContext);
  const [USER_HOST, setUserHost] = useState({
    password: "",
    login: "",
  });

  const navigate = useNavigate();

  const wrongSpan = useRef(null);
  const wrongButton = useRef(null);
  const inputs = document.querySelectorAll(".adminInput");

  const handleLogin = async () => {
    if (USER_HOST.login && USER_HOST.password) {
      VerifyLogin();
    } else {
      WrongHandler(wrongSpan, wrongButton, inputs, "NO_DATE");
      deletePassCookie();
    }
  };

  const VerifyLogin = async () => {
    let usersDB = phoneNumberFromZleceniodawcy;
    usersDB = usersDB.filter(
      (user) =>
        user.login === USER_HOST.login && user.password === USER_HOST.password
    );
    if (usersDB.length > 0) {
      if (usersDB[0].role === USER_ADMIN) {
        const SESION_TOKEN = await encryptPassword(usersDB[0].password);
        navigate("/adminpanel", { state: { SESION_TOKEN } });
        setPassCookie(SESION_TOKEN);
      } else {
        console.error("error no such user");
      }
    } else {
      WrongHandler(wrongSpan, wrongButton, inputs, "BAD_L_P");
      setPassCookie(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
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
        <form className="LoginPage--form" onSubmit={handleSubmit}>
          <label>
            Login
            <input
              type="text"
              name="login"
              onChange={handleChange}
              className="adminInput"
            />
          </label>
          <label>
            Hasło
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="adminInput"
            />
          </label>
          <span ref={wrongSpan}></span>
          <button className="btn draw-border" type="submit" ref={wrongButton}>
            Zaloguj
          </button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
