import { useContext } from "react";
import { FormAddOpinionContext } from "../../../../helpers/formHelper";
import { handleCloseAddOpinion } from "../../../../helpers/hooks/handlers";

const ButtonsAddOpinion = () => {
  const { resetForm } = useContext(FormAddOpinionContext);
  return (
    <div className="btnBox">
      <button type="submit" className="btn_send">
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
  );
};

export default ButtonsAddOpinion;
