import { useContext, useState } from "react";

import { AppContext } from "../../../../../Provider/Provider";
import { FormAddOpinionContext } from "../../../helpers/formHelper";
import EditOpinionStars from "./helpers/EditOpinionStars/stars";
import { OpinionUpdate } from "./helpers/OpinionUpdate/OpinionUpdate";
import { handleDeleteOpinion } from "./helpers/DeleteOpinion/DeleteOpinion";

const EditOpinionContent = ({ editOpinion, setNextEditPage }) => {
  const { imie, nazwisko, email, text, stars, public_data, phone } =
    editOpinion[0];

  const { getUsers } = useContext(AppContext);
  const { resetForm } = useContext(FormAddOpinionContext);

  const [textO, setText] = useState(text);
  const [starsO, setStars] = useState(stars);

  const [textValid, setTextValid] = useState(true);
  const [starsValid, setStarsValid] = useState(true);

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  const validation = () => {
    if (textValid && starsValid) {
      OpinionUpdate(email, textO, starsO);
      handleCloseAddOpinion();
      resetForm();
    } else {
      alert("Formularz zawiera błędy");
    }
    getUsers();
  };

  const handleChangeText = (e) => {
    const value = e.target.value;
    setText(value);
    if (value <= 50) {
      setTextValid(false);
    } else {
      setTextValid(true);
    }
  };

  const handleCloseAddOpinion = () => {
    const opinion_box = document.querySelector(".edit_opinion_box");
    const opinionAdd = document.querySelector(".edit_opinion");
    opinionAdd.classList.remove("openModalOpinion");
    opinion_box.classList.remove("openModalBg");
    setNextEditPage(false);
  };

  return (
    <>
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
              value={textO}
              onChange={handleChangeText}
              className="opinion_form"
              required
            />
            <span className="omrs-input-label">Opinia</span>
            <span className="omrs-input-helper">
              Minimum 50 znaków. Ilość znaków {textO.length}
            </span>
          </label>
        </div>

        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              type="date"
              value={public_data}
              className="date_form"
              min="2020-01-01"
              required
              disabled
            />
            <span className="omrs-input-helper">Data ukończenia projektu</span>
          </label>
        </div>

        <EditOpinionStars
          setStars={setStars}
          setStarsValid={setStarsValid}
          starsO={starsO}
        />

        <div className="btnBox">
          <button type="submit" className="btn_send">
            Aktualizuj
          </button>
          <button
            onClick={() => handleDeleteOpinion(email)}
            className="btn_send"
          >
            Usuń
          </button>
          <button
            onClick={() => {
              handleCloseAddOpinion();
              resetForm();
            }}
            className="btn_send"
          >
            Anuluj
          </button>
        </div>
      </form>
    </>
  );
};

export default EditOpinionContent;
