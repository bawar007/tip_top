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
import useGetOpinions from "../../../../hooks/useGetOpinions";

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

  const { data: dataOpinions } = useGetOpinions(HOST, API_KEY);

  if (loading || error) return;

  const checkEmail = (email) => {
    const opinions = [...dataOpinions.accepted, ...dataOpinions.queued].filter(
      (item) => item.email === email
    );
    if (opinions.length === 0) return true;
    return false;
  };

  const validation = async () => {
    const emailAddOpinion = checkEmail(newOpinionFormValues.email);

    if (!emailAddOpinion) {
      OpinionsAlert("Dodałeś już opinie, możesz ją edytować");
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

    axios
      .post(`${HOST}/send-email`, {
        data: newOpinionFormValues.opinion_text,
        email: newOpinionFormValues.email,
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });

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

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewOpinionFormValues((prev) => ({ ...prev, [name]: value }));
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            validation();
          }}
          className="opinion_form "
        >
          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="text"
                value={newOpinionFormValues.imie}
                className="imie_form"
                name="imie"
                required
                onChange={(e) => handleChange(e)}
              />
              <span className="omrs-input-label">Imie</span>
            </label>
          </div>

          <div className="omrs-input-group">
            <label className="omrs-input-underlined">
              <input
                type="email"
                value={newOpinionFormValues.email}
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
                className="opinion_form"
                name="opinion_text"
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
                onChange={(e) => handleChange(e)}
                className="date_form"
                min="2020-01-01"
                name="date"
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
              <span className="info">
                {newOpinionFormValues.rate !== null &&
                  `Twoja ocena: ${newOpinionFormValues.rate}/5`}
              </span>
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
