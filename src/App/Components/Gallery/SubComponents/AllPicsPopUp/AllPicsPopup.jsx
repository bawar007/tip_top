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
    <section className="selectedPics">
      <div className="selectPic">
        <OnePicFromGallery
          allPicGalleryPop={allPicGalleryPop}
          picIndex={picIndex}
          modal={modal}
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
