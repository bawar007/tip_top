import { useState } from "react";

import EditOpinionStars from "./EditOpinionStars/EditOpinionStars";

import {
  handleOpinionUpdate,
  handleDeleteOpinion,
} from "../../../helpers/opinionsHelpers";

const EditOpinionContent = ({
  editOpinion,
  setNextEditPage,
  resetFormOpinionEdit,
}) => {
  const { id, email, text, stars, public_data, imie } = editOpinion;

  const [textO, setText] = useState(text);
  const [starsO, setStars] = useState(stars);

  const [textValid, setTextValid] = useState(true);

  const saveOpinion = (e) => {
    e.preventDefault();

    if (textValid) {
      handleOpinionUpdate(id, textO, starsO);
      handleCloseAddOpinion();
    } else {
      alert("Opinia jest za krótka");
    }
  };

  const handleChangeText = (e) => {
    const value = e.target.value;
    setText(value);

    if (value.length <= 50) {
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
    resetFormOpinionEdit();
  };

  return (
    <>
      <form onSubmit={saveOpinion} className="opinion_form ">
        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              type="text"
              value={imie}
              className="imie_form"
              name="imie"
              required
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

        <EditOpinionStars setStars={setStars} starsO={starsO} />

        <div className="btnBox">
          <button type="submit" className="btn_send">
            Aktualizuj
          </button>
          <button
            onClick={() => {
              handleDeleteOpinion(id);
              handleCloseAddOpinion();
            }}
            className="btn_send"
            type="button"
          >
            Usuń
          </button>
          <button
            onClick={() => handleCloseAddOpinion()}
            className="btn_send"
            type="button"
          >
            Anuluj
          </button>
        </div>
      </form>
    </>
  );
};

export default EditOpinionContent;
