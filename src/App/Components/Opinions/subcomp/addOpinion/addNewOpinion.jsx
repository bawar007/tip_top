import { useContext } from "react";

import Stars from "../sub/Stars";

import { FormAddOpinionContext } from "../../helpers/formHelper";
import StaticElements from "./subcomponents/StaticElements/StaticElements";
import ButtonsAddOpinion from "./subcomponents/Buttons/ButtonsAddOpinion";
import DynamicElements from "./subcomponents/DynamicElements/DynamicElements";

const AddNewOpinion = () => {
  const { validation, imie, nazwisko } = useContext(FormAddOpinionContext);

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  return (
    <div className="add_opinion_box opinion_form_box">
      <div className="add_opinion opinion_form_content">
        <form onSubmit={saveOpinion} className="opinion_form ">
          {imie && <StaticElements imie={imie} nazwisko={nazwisko} />}

          <DynamicElements />

          <Stars />

          <ButtonsAddOpinion />
        </form>
      </div>
    </div>
  );
};

export default AddNewOpinion;