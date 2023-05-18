import { useContext } from "react";
import { AppContext } from "../../../../Provider/Provider";

const SingleOpinion = () => {
  const { opinionsEl, setPicId, setPicIndex, setAllPicsFromOpinion } =
    useContext(AppContext);

  const handleClick = (id) => {
    setPicId(id);
    setPicIndex(0);
    setAllPicsFromOpinion(true);
  };

  const opinion = opinionsEl.map((opinion) => (
    <div className="opinion" key={opinion.id + "a"}>
      <h2>
        {opinion.imie}
        {" " + opinion.nazwisko}
      </h2>
      <p>{opinion.text}</p>
      <div className="stars">
        <span
          className={opinion.stars >= 1 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars >= 2 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars >= 3 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars >= 4 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars === 5 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
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
