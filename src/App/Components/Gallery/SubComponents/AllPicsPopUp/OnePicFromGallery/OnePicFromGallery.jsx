import { useContext, useEffect } from "react";
import { AppContext } from "../../../../../Provider/Provider";

const OnePicFromGallery = () => {
  const { windowW, tip, allPicGalleryPop, picIndex } = useContext(AppContext);

  const OnePicFromGallery = allPicGalleryPop[0].all
    .filter((el, index) => index === picIndex)
    .map((el, index) => (
      <div className="Main_Photo--Content" key={index}>
        <img
          src={`${tip}${el}`}
          alt={el}
          className="Main_Photo--Content_img"
          id="myImg"
          onClick={() => {
            if (windowW) {
              const modalEl = document.querySelector(".modal");
              const modalImg = document.querySelector("#img01");
              modalEl.style.display = "block";
              modalImg.src = `${tip}${el}`;
            }
          }}
        />
      </div>
    ));

  useEffect(() => {
    if (document.querySelector(".Main_Photo--Content_img")) {
    }
  });

  return <>{OnePicFromGallery}</>;
};

export default OnePicFromGallery;
