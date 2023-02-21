import { useContext } from "react";
import AllSelectedPicsFromGallery from "../SubComponents/AllSelectedPicsFromGallery/AllSelectedPicsFromGallery";
import { AppContext } from "../../../../../Provider/Provider";

const AllPics = ({ setAllPics, setPicIndex, allPicGalleryPop, picIndex }) => {
  const { tip } = useContext(AppContext);
  return (
    <div className="allPics">
      <span
        className="close"
        style={{ color: "black" }}
        onClick={() => setAllPics(false)}
      >
        &times;
      </span>
      <div
        className="back"
        onClick={() =>
          setPicIndex((prev) => {
            if (prev > 0) {
              return prev - 1;
            } else {
              return allPicGalleryPop[0].all.length - 1;
            }
          })
        }
      >
        <img
          src={`${tip}/icons/arrowcircleleft.svg`}
          alt="arrright"
          className="arrow_gallery"
        />
      </div>
      <AllSelectedPicsFromGallery
        allPicGalleryPop={allPicGalleryPop}
        picIndex={picIndex}
        setPicIndex={setPicIndex}
      />
      <div
        className="next"
        onClick={() =>
          setPicIndex((prev) => {
            if (prev < allPicGalleryPop[0].all.length - 1) {
              return prev + 1;
            } else {
              return 0;
            }
          })
        }
      >
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
