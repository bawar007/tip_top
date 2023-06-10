import { useContext } from "react";
import { AppContext } from "../../../../Provider/Provider";

const SingleOpinion = () => {
  const { opinionsFromDB, setPicId, setPicIndex, setAllPicsFromOpinion } =
    useContext(AppContext);

  const handleClick = (id) => {
    setPicId(id);
    setPicIndex(0);
    setAllPicsFromOpinion(true);
  };

  const opinion = opinionsFromDB.map((opinion) => (
    <div className="opinion" key={opinion.id + "a"}>
      <h2>
        {opinion.imie}
        {" " + opinion.nazwisko}
      </h2>
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

export default SingleOpinion;
