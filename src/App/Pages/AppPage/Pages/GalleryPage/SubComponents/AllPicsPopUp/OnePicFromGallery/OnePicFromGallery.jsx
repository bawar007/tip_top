import { useContext } from "react";
import { AppContext } from "../../../../../AppPageProvider/AppPageProvider";

const OnePicFromGallery = () => {
  const { windowW, allPicGalleryPop, picIndex } = useContext(AppContext);

  return (
    <>
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
    </>
  );
};

export default OnePicFromGallery;
