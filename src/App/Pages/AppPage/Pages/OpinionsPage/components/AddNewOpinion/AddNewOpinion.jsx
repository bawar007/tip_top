import { useContext, useState } from "react";
import Select from "react-select";

import makeAnimated from "react-select/animated";
import {
  hoverChangeAddOpinionStars,
  mouseOutAddOpinion,
  handleChangeAddOpinionStars,
  handleCloseAddOpinion,
  IconsForStars,
} from "../../helpers/feedbackService";
import { OpinionsAlert } from "../OpinionsAlert/OpinionsAlert";

import useGetAllPics from "../../../../hooks/useGetAllPics";

import axios from "axios";
import { postNewOpinion } from "../../../../helpers/ApiHooks";
import { AppContext } from "../../../../AppPageProvider/AppPageProvider";

const API_KEY = process.env.REACT_APP_API_KEY;

const AddNewOpinion = () => {
  const { HOST } = useContext(AppContext);

  const [newOpinionFormValues, setNewOpinionFormValues] = useState({
    imie: "",
    email: "",
    opinion_text: "",
    date: "",
    selected_project: "",
    rate: null,
  });

  const { data, loading, error } = useGetAllPics(HOST, API_KEY);

  if (loading || error) return;

  const checkEmailFetch = async (email) => {
    const result = await axios.get(`${HOST}/opinions/${email}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    if (result.data !== null) return false;

    return true;
  };

  const validation = async () => {
    const checkEmailIsExist = await checkEmailFetch(newOpinionFormValues.email);

    if (!checkEmailIsExist) {
      OpinionsAlert("Możesz dodać tylko jedną opinię");
      return;
    }

    if (newOpinionFormValues.rate === null) {
      OpinionsAlert("Nie oceniłeś usługi");
      return;
    }

    if (newOpinionFormValues.opinion_text.length < 50) {
      OpinionsAlert("Opinia jest za krótka");
      return;
    }
    if (newOpinionFormValues.selected_project === "") {
      OpinionsAlert("Wybierz projekt");
      return;
    }
    postNewOpinion(newOpinionFormValues);
    setNewOpinionFormValues({
      imie: "",
      email: "",
      opinion_text: "",
      date: "",
      selected_project: "",
      rate: null,
    });
    handleCloseAddOpinion();
  };

  const animatedComponents = makeAnimated();
  const saveOpinion = (e) => {
    e.preventDefault();

    validation();
  };

  const fileNameReducer = (tekst) => {
    const startIdx = tekst.indexOf("/");
    if (startIdx === -1) {
      return null;
    }

    const startIdxOffset = startIdx + 1;
    const endIdx = tekst.indexOf("/", startIdxOffset);
    if (endIdx === -1) {
      return null;
    }

    return tekst.slice(startIdxOffset, endIdx);
  };

  const test = data.map((item) => {
    let filename = fileNameReducer(item.first);
    filename = filename.slice(2);

    return {
      value: filename,
      label: (
        <img
          src={`${HOST}/images/${item.first}`}
          alt={item.first}
          width={40}
          height={40}
        />
      ),
    };
  });

  return (
    <div className="add_opinion_box opinion_form_box">
      <div className="add_opinion opinion_form_content">
        <form onSubmit={saveOpinion} className="opinion_form ">
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="text"
                value={newOpinionFormValues.imie}
                className="imie_form"
                name="imie"
                required
                onChange={(e) =>
                  setNewOpinionFormValues((prev) => ({
                    ...prev,
                    imie: e.target.value,
                  }))
                }
              />
              <span className="omrs-input-label">Imie</span>
            </label>
          </div>

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="email"
                value={newOpinionFormValues.email}
                onChange={(e) =>
                  setNewOpinionFormValues((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
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
                type="text"
                value={newOpinionFormValues.opinion_text}
                onChange={(e) =>
                  setNewOpinionFormValues((prev) => ({
                    ...prev,
                    opinion_text: e.target.value,
                  }))
                }
                className="opinion_form"
                name="text"
                required
              />
              <span className="omrs-input-label">Opinia</span>
              <span className="omrs-input-helper">
                Minimum 50 znaków. Ilość znaków{" "}
                {newOpinionFormValues.opinion_text.length}
              </span>
            </label>
          </div>

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="date"
                value={newOpinionFormValues.date}
                onChange={(e) =>
                  setNewOpinionFormValues((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
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

          <Select
            value={test.value}
            options={test}
            placeholder={"Wybierz projekt do oceny"}
            className="select-form-files"
            classNamePrefix="form-files"
            components={animatedComponents}
            onChange={(e) =>
              setNewOpinionFormValues((prev) => ({
                ...prev,
                selected_project: e.value,
              }))
            }
          />

          <label>
            <h2>Ocena usługi</h2>
            <div
              className="starsBox"
              onMouseOut={() => mouseOutAddOpinion(newOpinionFormValues)}
            >
              {IconsForStars.map((el, index) => (
                <img
                  src={el.src}
                  alt={el.src}
                  key={el.src + index}
                  width="20"
                  height="20"
                  className={el.class}
                  onClick={() =>
                    handleChangeAddOpinionStars(el.id, setNewOpinionFormValues)
                  }
                  onMouseOver={() => hoverChangeAddOpinionStars(el.id)}
                />
              ))}
            </div>
            <div className="starInfoBox">
              <span className="info"></span>
            </div>
          </label>

          <div className="btnBox">
            <button type="submit" className="btn_send">
              Dodaj Opinię
            </button>
            <button
              onClick={() => {
                handleCloseAddOpinion();
                setNewOpinionFormValues({
                  imie: "",
                  email: "",
                  opinion_text: "",
                  date: "",
                  selected_project: "",
                  rate: null,
                });
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
