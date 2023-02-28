import { useContext } from "react";

import MobileGallery from "../Gallery/SubComponents/Mobile/MobileGallery";

import { opinions } from "./data/opinions_data";
import { AppContext } from "../../Provider/Provider";

import AllPicsPopUp from "../Gallery/SubComponents/AllPicsPopUp/AllPicsPopMenu/AllPicsPopup";

const Opinions = () => {
  const { windowW, handleClick, allPics } = useContext(AppContext);

  const opinion = opinions.map((opinion) => (
    <div className="opinion" key={opinion.id}>
      <h2>{opinion.author}</h2>
      <p>{opinion.opinion}</p>
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
        <h3 onClick={handleClick.bind(this, opinion.project_id)}>
          Link do projektu
        </h3>
      </div>
    </div>
  ));

  return (
    <>
      <section className="opinionsPage" id="opinions">
        <h1>opinie</h1>
        <div className="opinionsBox">{opinion}</div>
      </section>
      {allPics ? !windowW ? <MobileGallery /> : <AllPicsPopUp /> : null}
    </>
  );
};

export default Opinions;
