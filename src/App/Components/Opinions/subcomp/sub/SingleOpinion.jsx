import { useContext } from "react";
import { AppContext } from "../../../../Provider/Provider";

const SingleOpinion = () => {
  const { handleClick, opinionsEl } = useContext(AppContext);

  const opinion = opinionsEl.map((opinion) => (
    <div className="opinion" key={opinion.id}>
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
        <h3 onClick={handleClick.bind(this, opinion.projekt_id)}>
          Link do projektu
        </h3>
      </div>
      <span>DATA PUBLIKACJI</span>
      <span>{opinion.public_data}</span>
    </div>
  ));

  return <>{opinion}</>;
};

export default SingleOpinion;
