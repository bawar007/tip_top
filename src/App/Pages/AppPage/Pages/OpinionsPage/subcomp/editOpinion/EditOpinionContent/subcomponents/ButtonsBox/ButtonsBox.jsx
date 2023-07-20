import { useContext } from "react";
import { handleDeleteOpinion } from "../../helpers/DeleteOpinion/DeleteOpinion";
import { AppContext } from "../../../../../../../AppPageProvider/AppPageProvider";

const ButtonsBox = ({ email, handleCloseAddOpinion }) => {
  const { HOST } = useContext(AppContext);
  return (
    <div className="btnBox">
      <button type="submit" className="btn_send">
        Aktualizuj
      </button>
      <button
        onClick={() => {
          handleDeleteOpinion(email, HOST);
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
  );
};

export default ButtonsBox;
