import { useContext } from "react";
import AllSelectedPicsFromGallery from "../SubComponents/AllSelectedPicsFromGallery/AllSelectedPicsFromGallery";
import { AppContext } from "../../../../../Provider/Provider";

const AllPics = () => {
  const {
    tip,
    allPicGalleryPop,
    setPicIndex,
    setAllPics,
    picIndex,
    setAllPicsFromOpinion,
  } = useContext(AppContext);

  const handleNextPic = () => {
    setPicIndex((prev) => {
      if (prev < allPicGalleryPop[0].all.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });

    clickNext();
  };

  const handleBackPic = () => {
    setPicIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return allPicGalleryPop[0].all.length - 1;
      }
    });
    clickBack();
  };

  const clickNext = () => {
    const elements = document.querySelectorAll(".Photos_Box--SinglePhoto");
    const ScrollIndexMove = picIndex + 1;
    const scrollElementsLength = allPicGalleryPop[0].all.length - 1;
    if (scrollElementsLength <= picIndex) {
      elements[0].scrollIntoView();
    } else {
      elements[ScrollIndexMove].scrollIntoView();
    }
  };

  const clickBack = () => {
    const elements = document.querySelectorAll(".Photos_Box--SinglePhoto");
    const ScrollIndexMove = picIndex - 1;
    const lastScrollElement = allPicGalleryPop[0].all.length - 1;
    if (picIndex === 0) {
      elements[lastScrollElement].scrollIntoView();
    } else {
      elements[ScrollIndexMove].scrollIntoView();
    }
  };

  return (
    <div className="Selected_Pics_Modal--Group_Photos_From_Project">
      <span
        className="close"
        onClick={() => {
          setAllPics(false);
          setAllPicsFromOpinion(false);
        }}
      >
        &times;
      </span>
      <div className="back" onClick={handleBackPic}>
        <img
          src={`${tip}/icons/arrowcircleleft.svg`}
          alt="arrright"
          className="arrow_gallery"
        />
      </div>
      <AllSelectedPicsFromGallery />
      <div className="next" onClick={handleNextPic}>
        <img
          src={`${tip}/icons/arrowcircleright.svg`}
          alt="arrright"
          className="arrow_gallery"
        />
      </div>
    </div>
  );
};

export default AllPics;

//component małych zdjęć
