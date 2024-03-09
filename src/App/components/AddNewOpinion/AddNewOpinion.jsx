import { useContext, useState } from "react";
import "./AddNewOpinion.scss";
import Select from "react-select";
import Star from "../Star/Star";

import {
  hoverChangeAddOpinionStars,
  mouseOutAddOpinion,
  handleChangeAddOpinionStars,
  handleCloseAddOpinion,
  IconsForStars,
} from "../../helpers/feedbackService";

import { OpinionsAlert } from "../OpinionsAlert/OpinionsAlert";

import { postNewOpinion } from "../../helpers/ApiHooks";
import { AppContext } from "../../provider/AppProvider";
import useGetOpinions from "../../hooks/useGetOpinions";
import useGetAllPics from "../../hooks/useGetAllPics";

import OpinionBox from "../../pages/OpinionsPage/components/OpinionBox/OpinionBox";
import BackGroundForModals from "../BackGroundForModals/BackGroundForModals";
import ButtonsBox from "../ButtonsBox/ButtonsBox";
import StarsInfoBox from "../StarsInfoBox/StarsInfoBox";
import Form from "../Form/Form";

const API_KEY = process.env.REACT_APP_API_KEY;

const AddNewOpinion = ({ setToggleAddOpinionModal }) => {
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

  const checkEmail = () => {
    const opinions = [...dataOpinions.accepted, ...dataOpinions.queued].filter(
      (item) =>
        item.email === newOpinionFormValues.email &&
        item.imie === newOpinionFormValues.imie
    );
    if (opinions.length === 0) return true;
    return false;
  };

  const validation = async () => {
    const emailAddOpinion = checkEmail();

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

    postNewOpinion(newOpinionFormValues, HOST);
    OpinionsAlert("Twoja opinia została przekazana");

    setNewOpinionFormValues({
      imie: "",
      email: "",
      opinion_text: "",
      date: "",
      selected_project: "",
      rate: null,
    });
    handleCloseAddOpinion();
    setToggleAddOpinionModal(false);
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOpinionFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const selectValues = data.map((item) => {
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
          loading="lazy"
        />
      ),
    };
  });

  return (
    <div className="add_opinion_box">
      <BackGroundForModals>
        <OpinionBox className="opinion_form_content" id="add_opinion">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              validation();
            }}
            valueImie={newOpinionFormValues.imie}
            valueImieCheck={true}
            onChange={handleChange}
            valueEmail={newOpinionFormValues.email}
            valueEmailCheck={true}
            valueOpinionText={newOpinionFormValues.opinion_text}
            valueOpinionTextCheck={true}
            valueDate={newOpinionFormValues.date}
            valueDateCheck={true}
          >
            <Select
              value={selectValues.value}
              options={selectValues}
              placeholder={"Wybierz projekt do oceny"}
              className="select-form-files"
              classNamePrefix="form-files"
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
                  <Star
                    key={el.src + index}
                    className={el.class}
                    onClick={() =>
                      handleChangeAddOpinionStars(
                        el.id,
                        setNewOpinionFormValues
                      )
                    }
                    onMouseOver={() => hoverChangeAddOpinionStars(el.id)}
                  />
                ))}
              </div>
              <StarsInfoBox rate={newOpinionFormValues.rate} />
            </label>

            <ButtonsBox
              onClick={() => {
                handleCloseAddOpinion();
                setToggleAddOpinionModal(false);
                setNewOpinionFormValues({
                  imie: "",
                  email: "",
                  opinion_text: "",
                  date: "",
                  selected_project: "",
                  rate: null,
                });
              }}
              textOne="Dodaj Opinię"
            />
          </Form>
        </OpinionBox>
      </BackGroundForModals>
    </div>
  );
};

export default AddNewOpinion;
