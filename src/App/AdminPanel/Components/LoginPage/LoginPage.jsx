import { useContext, useRef, useState } from "react";
import axios from "axios";
import { verifyPassword } from "../../Helper/PasswordEncryption";
import { AppContext } from "../../../Provider/Provider";
import { Navigate } from "react-router-dom";

import { setPassCookie } from "./helpers/SetCookie";

const LoginPage = () => {
  const { HOST } = useContext(AppContext);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [admin, setAdmin] = useState(false);

  const wrongSpan = useRef(null);
  const wrongButton = useRef(null);

  const handleLogin = async (encryptedPassword) => {
    const response = await axios.get(`${HOST}/adminpanel`);
    if (response.error) {
      console.error(response.error);
    }
    const passwordDB = response.data.map((el) => el.password);
    const loginDB = response.data.map((el) => el.login);

    const spanEl = wrongSpan.current;
    const btnEl = wrongButton.current;

    const wrongClassBtn = "btn-wrong";
    const wrongClassBtnAnimation = "wrongAnimation";
    const wrongClassSpan = "wrong";

    const inputs = document.querySelectorAll(".adminInput");

    const clearWrongSpan = () =>
      setTimeout(() => {
        spanEl.innerHTML = "";
        spanEl.classList.remove(wrongClassSpan);
        btnEl.classList.remove(wrongClassBtn);
        btnEl.classList.remove(wrongClassBtnAnimation);
        inputs.forEach((input) => input.classList.remove("adminInputWrong"));
      }, 3000);

    const addWrongClass = () => {
      spanEl.classList.add(wrongClassSpan);

      btnEl.classList.add(wrongClassBtn);
      btnEl.classList.add(wrongClassBtnAnimation);

      inputs.forEach((input) => input.classList.add("adminInputWrong"));
    };

    if (login && password) {
      // Weryfikacja hasła
      const passwordIsMatch = await verifyPassword(
        encryptedPassword,
        passwordDB[0]
      );
      const loginIsMatch = login === loginDB[0];

      if (passwordIsMatch && loginIsMatch) {
        setPassCookie(passwordDB[0], true);
        setAdmin(true);
      } else {
        spanEl.innerHTML = "Błędny login lub hasło";

        addWrongClass();
        clearWrongSpan();

        setPassCookie(null, false);
        setAdmin(false);
      }
    } else {
      spanEl.innerHTML = "wprowadz dane";

      addWrongClass();
      clearWrongSpan();

      setPassCookie(null, false);
      setAdmin(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(password);
  };

  return (
    <section className="LoginPage">
      {admin && <Navigate to="/adminpanel" />}
      <div className="login">
        <h1>Panel Administratora</h1>
        <form className="LoginPage--form" onSubmit={handleSubmit}>
          <label>
            Login
            <input
              type="text"
              name="login"
              onChange={(e) => setLogin(e.target.value)}
              className="adminInput"
            />
          </label>
          <label>
            Hasło
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
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
