import { useContext } from "react";
import { FormAddOpinionContext } from "../../helpers/formHelper";

import {
  hoverChangeAddOpinionStars,
  mouseOutAddOpinion,
  handleChangeAddOpinionStars,
  IconsForStars,
} from "./hooks/hooks";

const Stars = () => {
  const { setFormValid, setFormValues, formValues } = useContext(
    FormAddOpinionContext
  );

  const starsMap = IconsForStars.map((el, index) => (
    <img
      src={el.src}
      alt={el.src}
      key={el.src + index}
      width="20"
      height="20"
      className={el.class}
      onClick={() =>
        handleChangeAddOpinionStars(el.id, setFormValid, setFormValues)
      }
      onMouseOver={() => hoverChangeAddOpinionStars(el.id)}
    />
  ));

  return (
    <label>
      <h2>Ocena usługi</h2>
      <div
        className="starsBox"
        onMouseOut={() => mouseOutAddOpinion(formValues)}
      >
        {starsMap}
      </div>
      <div className="starInfoBox">
        <span className="info"></span>
      </div>
    </label>
  );
};

export default Stars;
