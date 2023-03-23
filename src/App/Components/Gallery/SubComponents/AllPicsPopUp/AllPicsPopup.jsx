import OnePicFromGallery from "./OnePicFromGallery/OnePicFromGallery";
import AllPics from "./SubComponents/allPics";

const AllPicsPopUp = () => {
  return (
    <section className="Selected_Pics_Modal--Bg">
      <section className="Selected_Pics_Modal--BOX">
        <div className="Selected_Pics_Modal--Main_Photo">
          <OnePicFromGallery />
        </div>
        <AllPics />
      </section>
    </section>
  );
};

export default AllPicsPopUp;
