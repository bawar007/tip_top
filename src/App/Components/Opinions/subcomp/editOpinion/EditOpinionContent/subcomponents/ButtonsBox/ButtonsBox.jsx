import { handleDeleteOpinion } from "../../helpers/DeleteOpinion/DeleteOpinion";

const ButtonsBox = ({ email, handleCloseAddOpinion }) => {
  return (
    <div className="btnBox">
      <button type="submit" className="btn_send">
        Aktualizuj
      </button>
      <button
        onClick={() => {
          handleDeleteOpinion(email);
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
