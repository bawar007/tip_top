import axios from "axios";
import { useState } from "react";

import validator from "validator";

const AddNewOpinion = ({ getUsers, phoneNumber }) => {
  const [imie, setImie] = useState();
  const [nazwisko, setNazwisko] = useState();
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
    numbers.style.visibility = "visible";
  };
  const handleChangePublicData = (e) => setPublic_data(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);

  const hoverChangeStars = (star) => {
    const starsEl = document.querySelectorAll(".checkedAdd");
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.style.color = "orange";
      } else {
        el.style.color = "";
      }
    });
  };

  const mouseOut = () => {
    const starsEl = document.querySelectorAll(".checkedAdd");
    starsEl.forEach((el, index) => {
      if (index < stars) {
        el.style.color = "orange";
      } else {
        el.style.color = "";
      }
    });
  };

  return (
    <div className="add_opinion_box">
      <div className="add_opinion">
        <form onSubmit={saveOpinion}>
          <h1>DODAJ SWOJĄ OPINIĘ</h1>
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="text"
                value={imie}
                onChange={handleChangeImie}
                className="imie_form"
                required
              />
              <span className="omrs-input-label">Imię</span>
              <span className="omrs-input-helper">Minimum 5 znaków</span>
            </label>
          </div>
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="text"
                value={nazwisko}
                onChange={handleChangeNazwisko}
                className="nazwisko_form"
                required
              />
              <span className="omrs-input-label">Nazwisko</span>
              <span className="omrs-input-helper">Minimum 4 znaki</span>
            </label>
          </div>
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="email"
                value={email}
                onChange={handleChangeEmail}
                className="email_form"
                required
              />
              <span className="omrs-input-label">Email</span>
            </label>
          </div>
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="number"
                value={phone}
                onChange={handleChangePhone}
                className="phone_form"
                required
              />
              <span className="omrs-input-label">Numer telefonu</span>
            </label>
          </div>
          <label className="project_label">
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

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="text"
                value={text}
                onChange={handleChangeText}
                className="opinion_form"
                required
              />
              <span className="omrs-input-label">Opinia</span>
              <span className="omrs-input-helper">
                Minimum 50 znaków. Ilość znaków {textLenght}
              </span>
            </label>
          </div>
          <label>
            <h2>Ocena usługi</h2>
            <div className="starsBox">
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(1);
                }}
                onMouseOver={() => hoverChangeStars(1)}
                onMouseOut={() => mouseOut()}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(2);
                }}
                onMouseOver={() => hoverChangeStars(2)}
                onMouseOut={() => mouseOut()}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(3);
                }}
                onMouseOver={() => hoverChangeStars(3)}
                onMouseOut={() => mouseOut()}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(4);
                }}
                onMouseOver={() => hoverChangeStars(4)}
                onMouseOut={() => mouseOut()}
              ></span>
              <span
                className="fa fa-starfa fa-star checkedAdd"
                onClick={() => {
                  handleChangeStars(5);
                }}
                onMouseOver={() => hoverChangeStars(5)}
                onMouseOut={() => mouseOut()}
              ></span>
            </div>
            <div className="starInfoBox">
              <span className="info"></span>
            </div>
          </label>
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="date"
                value={public_data}
                onChange={handleChangePublicData}
                className="date_form"
                min="2020-01-01"
                required
              />
              <span className="omrs-input-label">Data ukończenia projektu</span>
              <span className="omrs-input-label">Data ukończenia projektu</span>
            </label>
          </div>

          <button onSubmit={saveOpinion}>Dodaj Opinię</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewOpinion;
