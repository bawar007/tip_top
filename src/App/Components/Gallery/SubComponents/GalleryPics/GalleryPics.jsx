import { useContext } from "react";
import { AppContext } from "../../../../Provider/Provider";

import { images } from "../../data/image-data";

const GalleryPics = () => {
  const { handleClick, tip, windowW } = useContext(AppContext);

  const gallery = images.map((image, index) => (
    <div className="GalleryPicOnPage_content" key={index}>
      <img
        src={`${tip}${image.first}`}
        alt={image.id}
        className="GalleryPicOnPage_content--img"
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

  return <section className="GalleryPicOnPage_box">{gallery}</section>;
};

export default GalleryPics;
