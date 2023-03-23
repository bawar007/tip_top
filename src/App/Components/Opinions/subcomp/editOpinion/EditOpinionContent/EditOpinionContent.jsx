import { useContext, useState } from "react";

import { AppContext } from "../../../../../Provider/Provider";
import { FormAddOpinionContext } from "../../../helpers/formHelper";
import EditOpinionStars from "./subcomponents/EditOpinionStars/stars";
import { OpinionUpdate } from "./helpers/OpinionUpdate/OpinionUpdate";
import ButtonsBox from "./subcomponents/ButtonsBox/ButtonsBox";
import StaticElementsFromForm from "./subcomponents/StaticElementsFromForm/StaticElementsFromForm";
import DynamicElementsFromForm from "./subcomponents/DynamicElementsFromForm/DynamicElementsFromForm";

const EditOpinionContent = ({
  editOpinion,
  setNextEditPage,
  resetFormOpinionEdit,
}) => {
  const { email, text, stars, public_data } = editOpinion[0];

  const { getUsers } = useContext(AppContext);
  const { resetForm } = useContext(FormAddOpinionContext);

  const [textO, setText] = useState(text);
  const [starsO, setStars] = useState(stars);

  const [textValid, setTextValid] = useState(true);
  const [starsValid, setStarsValid] = useState(true);

  const saveOpinion = (e) => {
    e.preventDefault();
    if (textValid && starsValid) {
      OpinionUpdate(email, textO, starsO);
      handleCloseAddOpinion();
    } else {
      alert("Formularz zawiera błędy");
    }
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
    resetFormOpinionEdit();
    resetForm();
    getUsers();
  };

  return (
    <>
      <form onSubmit={saveOpinion} className="opinion_form ">
        <StaticElementsFromForm editOpinion={editOpinion} />

        <DynamicElementsFromForm
          handleChangeText={handleChangeText}
          textO={textO}
          public_data={public_data}
        />

        <EditOpinionStars
          setStars={setStars}
          setStarsValid={setStarsValid}
          starsO={starsO}
        />

        <ButtonsBox
          email={email}
          handleCloseAddOpinion={handleCloseAddOpinion}
        />
      </form>
    </>
  );
};

export default EditOpinionContent;
