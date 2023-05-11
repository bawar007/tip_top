import OnePicFromGallery from "./OnePicFromGallery/OnePicFromGallery";
import AllPics from "./SubComponents/allPics";

const AllPicsPopUp = () => {
  return (
    <div className="Selected_Pics_Modal--Bg">
      <div className="Selected_Pics_Modal--BOX">
        <div className="Selected_Pics_Modal--Main_Photo">
          <OnePicFromGallery />
        </div>
        <AllPics />
      </div>
    </div>
  );
};

export default AllPicsPopUp;
