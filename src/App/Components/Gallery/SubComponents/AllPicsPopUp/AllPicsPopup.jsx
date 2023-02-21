import OnePicFromGallery from "./OnePicFromGallery/OnePicFromGallery";
import AllPics from "./SubComponents/allPics";

const AllPicsPopUp = ({
  allPicGalleryPop,
  picIndex,
  modal,
  setAllPics,
  setPicIndex,
}) => {
  return (
    <section className="selectedPics" style={{ position: "fixed", top: 0 }}>
      <div className="selectPic">
        <OnePicFromGallery
          allPicGalleryPop={allPicGalleryPop}
          picIndex={picIndex}
          modal={modal}
          setPicIndex={setPicIndex}
        />
      </div>
      <AllPics
        setAllPics={setAllPics}
        setPicIndex={setPicIndex}
        picIndex={picIndex}
        allPicGalleryPop={allPicGalleryPop}
      />
    </section>
  );
};

export default AllPicsPopUp;
