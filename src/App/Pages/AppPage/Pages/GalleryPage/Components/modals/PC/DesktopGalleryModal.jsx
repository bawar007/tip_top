import { useContext, useEffect } from "react";

import { AppContext } from "../../../../../AppPageProvider/AppPageProvider";
import DesktopGalleryModalContent from "./DesktopGalleryModalContent/DesktopGalleryModalContent";

const DesktopGalleryModal = () => {
  const {
    setAllPics,
    setAllPicsFromOpinion,
    allPicGalleryPop,
    picIndex,
    windowW,
  } = useContext(AppContext);
  useEffect(() => {
    const c = document.querySelector(".Selected_Pics_Modal--Bg");
    window.onclick = (e) => {
      if (e.srcElement === c) {
        setAllPics(false);
        setAllPicsFromOpinion(false);
      }
    };
  });
  return (
    <div className="Selected_Pics_Modal--Bg">
      <div className="Selected_Pics_Modal--BOX">
        <div className="Selected_Pics_Modal--Main_Photo">
          {allPicGalleryPop[0].all
            .filter((el, index) => index === picIndex)
            .map((el, index) => (
              <div className="Main_Photo--Content" key={index + el}>
                <img
                  src={`http://localhost:5000/images/${el}`}
                  alt={el}
                  className="Main_Photo--Content_img"
                  id="myImg"
                  loading="lazy"
                  onClick={() => {
                    if (windowW) {
                      const modalEl = document.querySelector(".modal");
                      const modalImg = document.querySelector("#img01");
                      modalEl.style.display = "block";
                      modalImg.src = `http://localhost:5000/images/${el}`;
                    }
                  }}
                />
              </div>
            ))}
        </div>
        <DesktopGalleryModalContent />
      </div>
    </div>
  );
};

export default DesktopGalleryModal;
