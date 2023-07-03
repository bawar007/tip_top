import { useContext, useEffect } from "react";
import OnePicFromGallery from "./OnePicFromGallery/OnePicFromGallery";
import AllPics from "./SubComponents/allPics";
import { AppContext } from "../../../../AppPageProvider/AppPageProvider";

const AllPicsPopUp = () => {
  const { setAllPics, setAllPicsFromOpinion } = useContext(AppContext);
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
          <OnePicFromGallery />
        </div>
        <AllPics />
      </div>
    </div>
  );
};

export default AllPicsPopUp;
