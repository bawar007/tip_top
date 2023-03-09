import axios from "axios";
import { useState } from "react";

import validator from "validator";

const AddNewOpinion = ({ getUsers, phoneNumber }) => {
  const [imie, setImie] = useState();
  const [nazwisko, setNazwisko] = useState();
  const [email, setEmail] = useState("");

  const [text, setText] = useState("");
  const [textLenght, setTextLenght] = useState(0);
  const [stars, setStars] = useState();
  const [public_data, setPublic_data] = useState();
  const [phone, setPhone] = useState();

  const [phoneValid, setPhoneValid] = useState(false);
  const [imieValid, setImieValid] = useState(false);
  const [nazwiskoValid, setNazwiskoValid] = useState(false);
  const [textValid, setTextValid] = useState(false);
  const [starsValid, setStarsValid] = useState(false);

  const info = document.querySelectorAll(".omrs-input-helper");

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };
  const validation = () => {
    const phones = phoneNumber.map((el) => el.phone_number);
    const findPhone = phones.findIndex((el) => el === Number(phone));

    if (findPhone === -1 || phone.length !== 9) {
      alert("Nie możesz dodać opini ponieważ nie jesteś naszym klientem");
      setPhoneValid(false);
    } else {
      setPhoneValid(true);
    }

    if (validator.isDate(public_data)) {
    } else {
      alert("Podaj datę !");
    }
    if (imieValid && nazwiskoValid && phoneValid && textValid && starsValid) {
      opinionPost();
    } else {
      alert("Formularz zawiera błędy");
    }
  };

  const opinionPost = async () => {
    const projekt_id = 1;
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
      setText("");
      setStars(0);
      setPublic_data("");
      setPhone("");
      setTextLenght(0);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeImie = (e) => {
    setImie(e.target.value);
    if (!e.target.value.match(/^[a-zA-Z]+$/)) {
      info[0].innerHTML = "Imię nie może zawierać cyfr";
      setImieValid(false);
    } else {
      info[0].innerHTML = "";
      setImieValid(true);
    }
  };
  const handleChangeNazwisko = (e) => {
    setNazwisko(e.target.value);
    if (!e.target.value.match(/^[a-zA-Z]+$/)) {
      info[1].innerHTML = "Nazwisko nie może zawierać cyfr";
      setNazwiskoValid(false);
    } else {
      info[1].innerHTML = "";
      setNazwiskoValid(true);
    }
  };
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeText = (e) => {
    const value = e.target.value;
    setText(value);
    setTextLenght(value.length);
    if (value <= 50) {
      setTextValid(false);
    } else {
      setTextValid(true);
    }
  };
  const handleChangeStars = (star) => {
    setStars(star);
    const starsEl = document.querySelectorAll(".checkedAdd");
    const numbers = document.querySelector(".starInfoBox > .info");
    setStarsValid(true);
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

  const handleCloseAddOpinion = () => {
    const opinion_box = document.querySelector(".add_opinion_box");
    const opinionAdd = document.querySelector(".add_opinion");
    opinionAdd.classList.remove("openModalOpinion");
    opinion_box.classList.remove("openModalBg");
  };

  return (
    <div className="add_opinion_box">
      <div className="add_opinion">
        <form onSubmit={saveOpinion}>
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
              <span className="omrs-input-helper"></span>
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
              <span className="omrs-input-helper"></span>
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
              <span className="omrs-input-helper">
                Data ukończenia projektu
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

          <div className="btnBox">
            <button onSubmit={saveOpinion} className="btn_send">
              Dodaj Opinię
            </button>
            <button onClick={handleCloseAddOpinion} className="btn_send">
              Odrzuć
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewOpinion;
