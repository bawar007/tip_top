import { useContext } from "react";
import { AppContext } from "../../../../../../Provider/Provider";

const AllSelectedPicsFromGallery = () => {
  const { tip, allPicGalleryPop, picIndex, setPicIndex } =
    useContext(AppContext);

  const AllSelectedPicsFromGallery = allPicGalleryPop[0].all.map(
    (el, index) => (
      <div className="Photos_Box--SinglePhoto" key={index}>
        <img
          src={`${tip}${el}`}
          alt={el}
          className={picIndex === index ? "pic_img active" : "pic_img"}
          onClick={() => setPicIndex(index)}
        />
      </div>
    )
  );

  return (
    <div className="Group_Photos_From_Project--Photos_Box">
      {AllSelectedPicsFromGallery}
    </div>
  );
};

export default AllSelectedPicsFromGallery;

// małe zdjęcia w popUpie
