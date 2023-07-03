import { useContext } from "react";
import AllSelectedPicsFromGallery from "../SubComponents/AllSelectedPicsFromGallery/AllSelectedPicsFromGallery";
import { AppContext } from "../../../../../AppPageProvider/AppPageProvider";

import { clickBack, clickNext } from "./helpers/clickMove";

const AllPics = () => {
  const {
    allPicGalleryPop,
    setPicIndex,
    picIndex,
    handleClickCloseGalleryModal,
  } = useContext(AppContext);

  const handleNextPic = () => {
    setPicIndex((prev) => {
      if (prev < allPicGalleryPop[0].all.length - 1) {
        return prev + 1;
      } else {
        return 0;
      }
    });
    clickNext(picIndex, allPicGalleryPop);
  };

  const handleBackPic = () => {
    setPicIndex((prev) => {
      if (prev > 0) {
        return prev - 1;
      } else {
        return allPicGalleryPop[0].all.length - 1;
      }
    });
    clickBack(picIndex, allPicGalleryPop);
  };

  return (
    <div className="Selected_Pics_Modal--Group_Photos_From_Project">
      <span className="close" onClick={handleClickCloseGalleryModal}>
        &times;
      </span>
      <div className="back" onClick={handleBackPic}>
        <img
          src="/icons/arrowcircleleft.svg"
          alt="arrright"
          className="arrow_gallery"
          loading="lazy"
          height="70"
          width="70"
        />
      </div>
      <AllSelectedPicsFromGallery />
      <div className="next" onClick={handleNextPic}>
        <img
          src="/icons/arrowcircleright.svg"
          alt="arrright"
          className="arrow_gallery"
          loading="lazy"
          height="70"
          width="70"
        />
      </div>
    </div>
  );
};

export default AllPics;

//component małych zdjęć
