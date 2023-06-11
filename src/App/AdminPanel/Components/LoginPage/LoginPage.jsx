import { useContext, useState } from "react";
import axios from "axios";
import { verifyPassword } from "../../Helper/PasswordEncryption";
import { AppContext } from "../../../Provider/Provider";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
  const { HOST } = useContext(AppContext);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [admin, setAdmin] = useState(false);

  const handleLogin = async (encryptedPassword) => {
    const response = await axios.get(`${HOST}/adminpanel`);
    if (response.error) {
      console.error(response.error);
    }
    const passwordDB = response.data.map((el) => el.password);
    const loginDB = response.data.map((el) => el.login);

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
      alert("Błędne dane!!!");
      setAdmin(false);
    }
  };

  const setPassCookie = (pass, id) => {
    // Ustawienie daty wygaśnięcia cookie na 30 dni od teraz
    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);

    // Utworzenie ciasteczka
    var cookie =
      "password=" + pass + "; expires=" + expirationDate.toUTCString();

    var cookietwo =
      "isMatch=" + id + "; expires=" + expirationDate.toUTCString();

    // Ustawienie ciasteczka w przeglądarce
    document.cookie = cookie;
    document.cookie = cookietwo;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "login") {
      setLogin(value);
    }
    if (name === "password") {
      setPassword(value);
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
            <input type="text" name="login" onChange={handleChange} />
          </label>
          <label>
            Hasło
            <input type="password" name="password" onChange={handleChange} />
          </label>
          <button type="submit">Zaloguj</button>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
