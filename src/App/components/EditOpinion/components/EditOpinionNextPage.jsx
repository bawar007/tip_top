import { useContext, useState } from "react";

import EditOpinionStars from "./EditOpinionStars";

import {
  handleOpinionUpdate,
  handleDeleteOpinion,
} from "../../../helpers/opinionsHelpers";
import { AppContext } from "../../../provider/AppProvider";
import InputGroup from "../../InputGroup/InputGroup";
import ButtonsBox from "../../ButtonsBox/ButtonsBox";
import Form from "../../Form/Form";

const EditOpinionNextPage = ({
  editOpinion,
  setNextEditPage,
  resetFormOpinionEdit,
  setToggleEditOpinionModal,
}) => {
  const { HOST } = useContext(AppContext);

  const { id, email, text, stars, public_data, imie } = editOpinion;

  const [textO, setText] = useState(text);
  const [starsO, setStars] = useState(stars);

  const [textValid, setTextValid] = useState(true);

  const saveOpinion = (e) => {
    e.preventDefault();

    if (textValid) {
      handleOpinionUpdate(id, textO, starsO, HOST);
      handleCloseAddOpinion();
      setToggleEditOpinionModal(false);
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
    setNextEditPage(false);
    resetFormOpinionEdit();
    setToggleEditOpinionModal(false);
  };

  return (
    <>
      <Form onSubmit={saveOpinion}>
        <InputGroup type="text" value={imie} name="imie" disabled={true} />

        <InputGroup type="email" value={email} name="email" disabled={true} />

        <InputGroup
          type="text"
          value={textO}
          onChange={handleChangeText}
          name="opinion"
          placeholder="Opinia"
        >
          <span className="omrs-input-helper">
            Minimum 50 znaków. Ilość znaków {textO.length}
          </span>
        </InputGroup>

        <InputGroup type="date" value={public_data} disabled={true} name="date">
          <span className="omrs-input-helper">Data ukończenia projektu</span>
        </InputGroup>

        <EditOpinionStars setStars={setStars} starsO={starsO} />

        <ButtonsBox
          textOne="Aktualizuj"
          textTwo="Usuń"
          onClick={() => {
            handleDeleteOpinion(id, HOST);
            handleCloseAddOpinion();
          }}
        >
          <button
            onClick={() => handleCloseAddOpinion()}
            className="btn_send"
            type="button"
          >
            Anuluj
          </button>
        </ButtonsBox>
      </Form>
    </>
  );
};

export default EditOpinionNextPage;
