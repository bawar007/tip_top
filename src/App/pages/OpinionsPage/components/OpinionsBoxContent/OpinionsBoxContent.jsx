import { useContext } from "react";
import { AppContext } from "../../../../provider/AppProvider";
import useGetOpinions from "../../../../../hooks/useGetOpinions";
import Star from "../../../../components/Star/Star";
import OpinionBox from "../OpinionBox/OpinionBox";
const API_KEY = process.env.REACT_APP_API_KEY;

const OpinionsBoxContent = () => {
  const { setPicId, setPicIndex, setAllPicsFromOpinion, HOST } =
    useContext(AppContext);

  const handleClick = (id) => {
    setPicId(id);
    setPicIndex(0);
    setAllPicsFromOpinion(true);
  };

  const { data, loading, error } = useGetOpinions(HOST, API_KEY);

  if (loading || error) return;

  const opinion = data.accepted.map((opinion) => (
    <OpinionBox className="opinion" key={opinion.id + "a"}>
      <h2>{opinion.imie}</h2>
      <h3>
        {opinion.text}
        {opinion.answerFromAdmin.length > 0 && (
          <p style={{ marginTop: 5, width: 100, textAlign: "left" }}>
            Odp: {opinion.answerFromAdmin}
          </p>
        )}
      </h3>

      <div className="stars">
        <Star className={opinion.stars >= 1 ? "checked" : null} />
        <Star className={opinion.stars >= 2 ? "checked" : null} />
        <Star className={opinion.stars >= 3 ? "checked" : null} />
        <Star className={opinion.stars >= 4 ? "checked" : null} />
        <Star className={opinion.stars >= 5 ? "checked" : null} />
      </div>
      <div className="projectLink">
        <h3 onClick={() => handleClick(opinion.project_id)}>
          Link do projektu
        </h3>
      </div>
      <div className="datePublic">
        <span>DATA PUBLIKACJI</span>
        <span>{opinion.public_data}</span>
      </div>
    </OpinionBox>
  ));

  return <>{opinion}</>;
};

export default OpinionsBoxContent;
