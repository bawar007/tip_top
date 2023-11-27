import { useContext } from "react";
import { AppContext } from "../../../../AppPageProvider/AppPageProvider";
import useGetAllPics from "../../../../hooks/useGetAllPics";

const API_KEY = process.env.REACT_APP_API_KEY;

const FirstGalleryList = () => {
  const { handleClick, HOST } = useContext(AppContext);

  const { data, loading, error } = useGetAllPics(HOST, API_KEY);

  if (loading || error) return;

  return (
    <div className="GalleryPicOnPage_box">
      {data.map((image, index) => (
        <div className="GalleryPicOnPage_content" key={index * 3 + image}>
          <img
            src={`${HOST}/images${image.first}`}
            alt={image.id}
            className="GalleryPicOnPage_content--img"
            onClick={() => handleClick(image.id)}
            width="250"
            height="250"
          />
        </div>
      ))}
    </div>
  );
};
export default FirstGalleryList;
