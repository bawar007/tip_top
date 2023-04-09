import { useContext, useState } from "react";
import { AppContext } from "../../../../Provider/Provider";

import { images } from "../../data/image-data";

const GalleryPics = () => {
  const { handleClick, tip, windowW } = useContext(AppContext);

  const [showNumberOfPics, setShowNumberOfPics] = useState(4);

  const gallery = images.map((image, index) => {
    if (index < showNumberOfPics) {
      return (
        <div className="GalleryPicOnPage_content" key={index}>
          <img
            src={`${tip}${image.first}`}
            alt={image.id}
            className="GalleryPicOnPage_content--img"
            onClick={() => (!windowW ? handleClick(image.id) : null)}
          />
          {windowW && <h3>Projekt {index + 1}</h3>}
          {windowW && (
            <button
              className="btnShowProject"
              onClick={() => handleClick(image.id)}
            >
              sprawdz galerię
            </button>
          )}
        </div>
      );
    }
    return null;
  });

  const ShowMorePics = (i) => {
    if (i === "first") {
      setShowNumberOfPics(4);
    }
    if (i === "last") {
      setShowNumberOfPics(19);
    }
    if (i === 4) {
      if (showNumberOfPics + 4 < 19) {
        setShowNumberOfPics((prev) => prev + 4);
      } else {
        setShowNumberOfPics(19);
      }
      console.log(showNumberOfPics);
    }
  };

  return (
    <section className="GalleryPicOnPage_box">
      <>
        {gallery}
        <div className="btnShowMore">
          {showNumberOfPics === 19 ? (
            <button
              onClick={() => ShowMorePics("first")}
              className="btnShowMoreProjects"
            >
              ukryj
            </button>
          ) : (
            <>
              <button
                onClick={() => ShowMorePics(4)}
                className="btnShowMoreProjects"
              >
                Pokaż więcej
              </button>

              <button
                onClick={() => ShowMorePics("last")}
                className="btnShowMoreProjects"
              >
                Pokaż wszystko
              </button>
            </>
          )}
        </div>
      </>
    </section>
  );
};

export default GalleryPics;
