import { useContext, useEffect } from "react";
import { AppContext } from "../../../../../Provider/Provider";

const OnePicFromGallery = ({ allPicGalleryPop, picIndex, modal }) => {
  const { windowW, tip } = useContext(AppContext);

  const OnePicFromGallery = allPicGalleryPop[0].all
    .filter((el, index) => index === picIndex)
    .map((el, index) => (
      <div className="picSolo" key={index}>
        <img
          src={`${tip}${el}`}
          alt={el}
          className="solo_pic_img"
          id="myImg"
          onClick={() => {
            if (windowW) {
              const modalEl = modal.current;
              const modalImg = document.querySelector("#img01");
              modalEl.style.display = "block";
              modalImg.src = `${tip}${el}`;
            }
          }}
        />
      </div>
    ));

  useEffect(() => {
    if (document.querySelector(".solo_pic_img")) {
    }
  });

  return <>{OnePicFromGallery}</>;
};

export default OnePicFromGallery;
