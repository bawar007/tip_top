import { useState } from "react";

import axios from "axios";
import validator from "validator";

const EditOpinionContent = ({ editOpinion, setNextEditPage }) => {
  const [imie, setImie] = useState(editOpinion[0].imie);
  const [nazwisko, setNazwisko] = useState(editOpinion[0].nazwisko);
  const [email, setEmail] = useState(editOpinion[0].email);

  const [text, setText] = useState(editOpinion[0].text);
  const [textLenght, setTextLenght] = useState(editOpinion[0].text.length);
  const [stars, setStars] = useState(editOpinion[0].stars);
  const [public_data, setPublic_data] = useState(editOpinion[0].public_data);
  const [phone, setPhone] = useState(editOpinion[0].phone);

  const [textValid, setTextValid] = useState(false);
  const [starsValid, setStarsValid] = useState(false);

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  const validation = () => {
    if (validator.isDate(public_data)) {
    } else {
      alert("Podaj datę !");
    }
    if (textValid && starsValid) {
      opinionPost();
      resetForm();
    } else {
      alert("Formularz zawiera błędy");
    }
  };

  const opinionPost = async () => {
    try {
      await axios.patch(`http://localhost:5000/opinions/${email}`, {
        text,
        stars,
        public_data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const resetForm = () => {
    setImie("");
    setNazwisko("");
    setEmail("");
    setText("");
    setStars(0);
    setPublic_data("");
    setPhone("");
    setTextLenght(0);
    handleCloseAddOpinion();
    setNextEditPage(false);
  };

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
  const handleChangePublicData = (e) => setPublic_data(e.target.value);

  const handleCloseAddOpinion = () => {
    // const opinion_box = document.querySelector(".edit_opinion_box");
    // const opinionAdd = document.querySelector(".edit_opinion");
    // opinionAdd.classList.remove("openModalOpinion");
    // opinion_box.classList.remove("openModalBg");
    setNextEditPage(false);
  };

  const handleChangeStars = (star) => {
    setStars(star);
    const starsEl = document.querySelectorAll(".editStar");
    const numbers = document.querySelector(".stars > .info");
    setStarsValid(true);
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.classList.add("checked");
      } else {
        el.classList.remove("checked");
      }
    });
    numbers.innerHTML = `Twoja ocena: ${star}/5`;
    numbers.style.visibility = "visible";
  };

  const hoverChangeStars = (star) => {
    const starsEl = document.querySelectorAll(".editStar");
    starsEl.forEach((el, index) => {
      if (index < star) {
        el.classList.add("checked");
      } else {
        el.classList.remove("checked");
      }
    });
  };
  const mouseOut = () => {
    const starsEl = document.querySelectorAll(".editStar");
    starsEl.forEach((el, index) => {
      if (index < stars) {
        el.classList.add("checked");
      } else {
        el.classList.remove("checked");
      }
    });
  };

  return (
    <form onSubmit={saveOpinion}>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input type="text" value={imie} className="imie_form" disabled />
        </label>
      </div>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="text"
            value={nazwisko}
            className="nazwisko_form"
            disabled
          />
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input type="email" value={email} className="email_form" disabled />
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="number"
            value={phone}
            className="phone_form"
            required
            disabled
          />
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
          <span className="omrs-input-helper">Data ukończenia projektu</span>
        </label>
      </div>

      <div className="stars">
        <span
          className={
            editOpinion[0].stars >= 1
              ? "fa fa-star checked editStar"
              : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(1);
          }}
          onMouseOver={() => hoverChangeStars(1)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            editOpinion[0].stars >= 2
              ? "fa fa-star checked editStar"
              : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(2);
          }}
          onMouseOver={() => hoverChangeStars(2)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            editOpinion[0].stars >= 3
              ? "fa fa-star checked editStar"
              : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(3);
          }}
          onMouseOver={() => hoverChangeStars(3)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            editOpinion[0].stars >= 4
              ? "fa fa-star checked editStar"
              : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(4);
          }}
          onMouseOver={() => hoverChangeStars(4)}
          onMouseOut={() => mouseOut()}
        ></span>
        <span
          className={
            editOpinion[0].stars === 5
              ? "fa fa-star checked editStar"
              : "fa fa-star editStar"
          }
          onClick={() => {
            handleChangeStars(5);
          }}
          onMouseOver={() => hoverChangeStars(5)}
          onMouseOut={() => mouseOut()}
        ></span>
      </div>
      <div className="btnBox">
        <button onSubmit={saveOpinion} className="btn_send">
          Aktualizuj
        </button>
        <button
          onClick={() => {
            handleCloseAddOpinion();
            resetForm();
          }}
          className="btn_send"
        >
          Odrzuć
        </button>
      </div>
    </form>
  );
};

export default EditOpinionContent;
