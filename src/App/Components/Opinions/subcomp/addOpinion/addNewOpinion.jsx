import { useContext } from "react";

import Stars from "../sub/Stars";

import { FormAddOpinionContext } from "../../helpers/formHelper";

const AddNewOpinion = () => {
  const {
    validation,
    handleChange,
    email,
    text,
    textLenght,
    public_data,
    handleCloseAddOpinion,
    resetForm,
    phone,
    imie,
    nazwisko,
  } = useContext(FormAddOpinionContext);

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <div className="add_opinion_box">
      <div className="add_opinion">
        <form onSubmit={saveOpinion}>
          {imie && (
            <>
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
                  <span className="omrs-input-helper">Imię</span>
                </label>
              </div>
              <div className="omrs-input-group">
                <label className="omrs-input-underlined">
                  <input
                    type="text"
                    value={nazwisko}
                    className="nazwisko_form"
                    name="nazwisko"
                    required
                    disabled
                  />
                  <span className="omrs-input-helper">Nazwisko</span>
                </label>
              </div>
            </>
          )}

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                className="email_form"
                name="email"
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
                onChange={handleChange}
                className="phone_form"
                name="phone"
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
                onChange={handleChange}
                className="opinion_form"
                name="text"
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
                onChange={handleChange}
                className="date_form"
                min="2020-01-01"
                name="public_data"
                required
              />
              <span className="omrs-input-helper">
                Data ukończenia projektu
              </span>
            </label>
          </div>

          <Stars />

          <div className="btnBox">
            <button onSubmit={saveOpinion} className="btn_send">
              Dodaj Opinię
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
      </div>
    </div>
  );
};

export default AddNewOpinion;
