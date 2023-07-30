import { useContext } from "react";
import { AppContext } from "../../../../AppPageProvider/AppPageProvider";
import useGetOpinions from "../../../../hooks/useGetOpinions";

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

  const acceptedOpinions = data.filter((item) => item.status === "accepted");
  const opinion = acceptedOpinions.map((opinion) => (
    <div className="opinion" key={opinion.id + "a"}>
      <h2>{opinion.imie}</h2>
      <p>{opinion.text}</p>
      <div className="stars">
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={opinion.stars >= 1 ? "checked" : null}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={opinion.stars >= 2 ? "checked" : null}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={opinion.stars >= 3 ? "checked" : null}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={opinion.stars >= 4 ? "checked" : null}
        />
        <img
          src="/icons/star.svg"
          alt="star"
          width="20"
          height="20"
          className={opinion.stars >= 5 ? "checked" : null}
        />
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
    </div>
  ));

  return <>{opinion}</>;
};

export default OpinionsBoxContent;
