import { useContext } from "react";
import { AppContext } from "../../../../../../Provider/Provider";

const AllSelectedPicsFromGallery = () => {
  const { allPicGalleryPop, picIndex, setPicIndex } = useContext(AppContext);

  return (
    <div className="Group_Photos_From_Project--Photos_Box">
      {allPicGalleryPop[0].all.map((el, index) => (
        <div className="Photos_Box--SinglePhoto" key={index + index + el}>
          <img
            src={el}
            alt={el}
            className={picIndex === index ? "pic_img active" : "pic_img"}
            onClick={() => setPicIndex(index)}
            loading="lazy"
            height="150"
            width="150"
          />
        </div>
      ))}
    </div>
  );
};

export default AllSelectedPicsFromGallery;

// małe zdjęcia w popUpie
