import OpinionBox from "../OpinionBox/OpinionBox";
import Star from "../../../../components/Star/Star";

const OpinionInformation = ({
  setToggleAddOpinionModal,
  setToggleEditOpinionModal,
}) => {
  return (
    <OpinionBox className="">
      <h2>Jesteś naszym klientem?</h2>
      <p>Jeżeli tak to zapraszamy do dodania opinii na temat naszych usług</p>
      <div className="stars">
        <Star className="checked" />
        <Star className="checked" />
        <Star className="checked" />
        <Star className="checked" />
        <Star className="checked" />
      </div>

      <button
        onClick={() => setToggleAddOpinionModal(true)}
        className="btn_Accept"
      >
        DODAJ OPINIĘ
      </button>
      <button
        className="btn_Accept"
        onClick={() => setToggleEditOpinionModal(true)}
      >
        EDYTUJ OPINIĘ
      </button>
    </OpinionBox>
  );
};

export default OpinionInformation;
