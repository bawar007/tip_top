import { useState } from "react";

import { images } from "../../Components/Gallery/SubComponents/image-data";
import GalleryTest from "../Gallery/SubComponents/GalleryTest";

import { opinions } from "./data/opinions_data";

const Opinions = () => {
  const [picId, setPicId] = useState(1);

  const [picFromProject, setPicsFromProject] = useState(false);

  const allPicGalleryPop = [...images].filter((el) => el.id === picId);

  const handleClick = (id) => {
    setPicId(id);
    setPicsFromProject(true);
  };

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
    <section className="opinionsPage" id="opinions">
      <h1>Referencje</h1>
      <div className="opinionsBox">{opinion}</div>
      {picFromProject && (
        <GalleryTest
          allPicGalleryPop={allPicGalleryPop}
          setAllPics={setPicsFromProject}
        />
      )}
    </section>
  );
};

export default Opinions;
