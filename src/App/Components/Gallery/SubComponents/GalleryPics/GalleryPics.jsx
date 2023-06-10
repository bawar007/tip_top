import { useContext, useState } from "react";
import { AppContext } from "../../../../Provider/Provider";

import { images } from "../../data/image-data";

const GalleryPics = () => {
  const { handleClick, windowW } = useContext(AppContext);

  const [showNumberOfPics, setShowNumberOfPics] = useState(4);

  const gallery = images.map((image, index) => {
    if (index < showNumberOfPics) {
      return (
        <div className="GalleryPicOnPage_content" key={index * 3 + image}>
          <img
            src={image.first}
            alt={image.id}
            className="GalleryPicOnPage_content--img"
            onClick={() => handleClick(image.id)}
            width="250"
            height="250"
          />
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
    }
    if (i === "minus") {
      if (showNumberOfPics - 4 > 0) {
        setShowNumberOfPics((prev) => prev - 4);
      } else {
        setShowNumberOfPics(4);
      }
    }
  };

  return (
    <div className="GalleryPicOnPage_box">
      <>
        {gallery}
        <div className="btnShowMore">
          {showNumberOfPics === 19 ? (
            <>
              <button
                onClick={() => ShowMorePics("minus")}
                className="btnShowMoreProjects"
              >
                Pokaż mniej
              </button>
              <button
                onClick={() => ShowMorePics("first")}
                className="btnShowMoreProjects"
              >
                ukryj wszystko
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => ShowMorePics(4)}
                className="btnShowMoreProjects"
              >
                Pokaż więcej
              </button>
              {showNumberOfPics > 4 ? (
                <button
                  onClick={() => ShowMorePics("minus")}
                  className="btnShowMoreProjects"
                >
                  Pokaż mniej
                </button>
              ) : null}
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
    </div>
  );
};

export default GalleryPics;
