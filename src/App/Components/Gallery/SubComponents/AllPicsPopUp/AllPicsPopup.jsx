import OnePicFromGallery from "./OnePicFromGallery/OnePicFromGallery";
import AllPics from "./SubComponents/allPics";

const AllPicsPopUp = () => {
  return (
    <section className="selectedPics" style={{ position: "fixed", top: 0 }}>
      <div className="selectPic">
        <OnePicFromGallery />
      </div>
      <AllPics />
    </section>
  );
};

export default AllPicsPopUp;
