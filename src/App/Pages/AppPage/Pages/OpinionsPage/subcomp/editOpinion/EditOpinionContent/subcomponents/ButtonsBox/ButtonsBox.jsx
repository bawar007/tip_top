import { handleDeleteOpinion } from "../../helpers/DeleteOpinion/DeleteOpinion";

const ButtonsBox = ({ id, handleCloseAddOpinion }) => {
  return (
    <div className="btnBox">
      <button type="submit" className="btn_send">
        Aktualizuj
      </button>
      <button
        onClick={() => {
          handleDeleteOpinion(id);
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
