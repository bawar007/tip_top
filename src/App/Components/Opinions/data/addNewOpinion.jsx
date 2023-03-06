import axios from "axios";
import { useState } from "react";

import validator from "validator";

const AddNewOpinion = ({ getUsers, phoneNumber }) => {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [email, setEmail] = useState("");
  const [projekt_id, setProjectId] = useState();
  const [text, setText] = useState("");
  const [textLenght, setTextLenght] = useState(0);
  const [stars, setStars] = useState();
  const [public_data, setPublic_data] = useState();
  const [phone, setPhone] = useState();

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  const validation = () => {
    const phones = phoneNumber.map((el) => el.phone_number);
    const findPhone = phones.findIndex((el) => el === Number(phone));
    if (findPhone === -1 || phone.length !== 9) {
      alert("Nie możesz dodać opini ponieważ nie jesteś naszym klientem");
      return;
    }
    if (imie.length <= 5) {
      const el = document.querySelector(".imie_form");
      el.placeholder = "Podane imie jest za krótkie";
      return;
    }
    if (nazwisko.length <= 4) {
      const el = document.querySelector(".nazwisko_form");
      el.placeholder = "Podane nazwisko jest za krótkie";
      return;
    }
    if (text.length <= 50) {
      const el = document.querySelector(".opinion_form");
      el.placeholder = "Twoja opinia musi zawierać więcej niż 150 znaków";
      return;
    }
    if (validator.isDate(public_data)) {
    } else {
      alert("Podaj datę !");
      return;
    }
    opinionPost();
  };

  const opinionPost = async () => {
    try {
      await axios.post("http://localhost:5000/opinions", {
        imie,
        nazwisko,
        email,
        projekt_id,
        text,
        stars,
        public_data,
      });

      setImie("");
      setNazwisko("");
      setEmail("");
      setProjectId(1);
      setText("");
      setStars(5);
      setPublic_data("");
      setPhone("");
      setTextLenght(0);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImie = (e) => setImie(e.target.value.toUpperCase());
  const handleChangeNazwisko = (e) => setNazwisko(e.target.value.toUpperCase());
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeProjektId = (e) => setProjectId(e.target.value);
  const handleChangeText = (e) => {
    setText(e.target.value.toUpperCase());
    setTextLenght(e.target.value.length);
  };
  const handleChangeStars = (star) => {
    setStars(star);
    const starsEl = document.querySelectorAll(".checkedAdd");
    const numbers = document.querySelector(".starInfoBox > .info");
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.style.color = "orange";
      } else {
        el.style.color = "";
      }
    });
    numbers.innerHTML = `Twoja ocena: ${star}/5`;
  };
  const handleChangePublicData = (e) => setPublic_data(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);

  return (
    <div className="add_opinion_box">
      <div className="add_opinion">
        <form onSubmit={saveOpinion}>
          <h3>DODAJ SWOJĄ OPINIĘ</h3>
          <label>
            <h2>Imię</h2>
            <input
              type="text"
              value={imie}
              onChange={handleChangeImie}
              className="imie_form"
              placeholder="Twoje Imie. Minimum 5 znaków"
            />
          </label>
          <label>
            <h2>Nazwisko</h2>
            <input
              type="text"
              value={nazwisko}
              onChange={handleChangeNazwisko}
              className="nazwisko_form"
              placeholder="Twoje Nazwisko. Minimum 4 znaki"
            />
          </label>
          <label>
            <h2>Email</h2>
            <input
              type="email"
              value={email}
              onChange={handleChangeEmail}
              className="email_form"
              placeholder="Twój email"
            />
          </label>
          <label>
            <h2>Numer telefonu</h2>
            <input
              type="number"
              value={phone}
              onChange={handleChangePhone}
              className="phone_form"
              placeholder="Twój nr tel. XXXXXXXXX"
            />
          </label>
          <label>
            <h2>Wybierz swój projekt:</h2>
            <select value={projekt_id} onChange={handleChangeProjektId}>
              <option value="0">1</option>
              <option value="1">2</option>
              <option value="2">3</option>
              <option value="3">4</option>
              <option value="4">5</option>
              <option value="5">6</option>
            </select>
          </label>
          <label>
            <h2>Opinia:</h2>
            <input
              type="text"
              value={text}
              onChange={handleChangeText}
              className="opinion_form"
              placeholder="Twoja opinia. Minimum 50 znaków"
            />
          </label>
          <p>Ilość znaków {textLenght}</p>
          <label>
            <h2>Ocena usługi</h2>
            <div className="starsBox">
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(1);
                }}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(2);
                }}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(3);
                }}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(4);
                }}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(5);
                }}
              ></span>
            </div>
            <div className="starInfoBox">
              <span className="info"></span>
            </div>
          </label>
          <label>
            <h2> Data ukończenia projektu</h2>
            <input
              type="date"
              value={public_data}
              onChange={handleChangePublicData}
              className="date_form"
              min="2020-01-01"
            />
          </label>

          <button onSubmit={saveOpinion}>Dodaj Opinię</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewOpinion;
