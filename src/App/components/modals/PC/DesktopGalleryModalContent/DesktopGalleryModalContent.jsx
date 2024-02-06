import { useContext } from "react";

import { AppContext } from "../../../../provider/AppProvider";

import { clickBack, clickNext } from "../helpers/clickMove";

const DesktopGalleryModalContent = () => {
  const {
    allPicGalleryPop,
    setPicIndex,
    picIndex,
    handleClickCloseGalleryModal,
    HOST,
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
      <div className="Group_Photos_From_Project--Photos_Box">
        {allPicGalleryPop[0].all.map((el, index) => (
          <div className="Photos_Box--SinglePhoto" key={index + index + el}>
            <img
              src={`${HOST}/images/${el}`}
              alt={el}
              className={picIndex === index ? "pic_img active" : "pic_img"}
              onClick={() => setPicIndex(index)}
              loading="lazy"
              height="150"
              width="150"
            />
          </div>
        ))}
      </div>
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

export default DesktopGalleryModalContent;

//component małych zdjęć
