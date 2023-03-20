import { useContext } from "react";
import { AppContext } from "../../../../Provider/Provider";

import { images } from "../../data/image-data";

const GalleryPics = () => {
  const { handleClick, tip, windowW } = useContext(AppContext);

  const gallery = images.map((image, index) => (
    <div className="pic test animate__fadeInUp animate__animated" key={index}>
      <img
        src={`${tip}${image.first}`}
        alt={image.id}
        className="pic_img "
        onClick={() => (!windowW ? handleClick(image.id) : null)}
      />
      <h3>Projekt {index + 1}</h3>
      {windowW && (
        <button
          className="btnShowProject"
          onClick={() => handleClick(image.id)}
        >
          sprawdz galerię
        </button>
      )}
    </div>
  ));

  return <section className="pics">{gallery}</section>;
};

export default GalleryPics;
