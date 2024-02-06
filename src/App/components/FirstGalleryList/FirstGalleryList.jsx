import { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";
import useGetAllPics from "../../hooks/useGetAllPics";

import "./FirstGalleryList.scss";

const API_KEY = process.env.REACT_APP_API_KEY;

const FirstGalleryList = () => {
  const { handleClick, HOST, windowW } = useContext(AppContext);

  const { data, loading, error } = useGetAllPics(HOST, API_KEY);

  if (loading || error) return;

  const test = data.length;

  return (
    <div className="GalleryPicOnPage_box">
      {windowW &&
        data.map((image, index) => (
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
      {!windowW && (
        <div className="multi__gallery">
          <div className="multi__first">
            {data.map((image, index) => {
              if (index <= Math.floor(test / 2)) {
                return (
                  <div
                    className="GalleryPicOnPage_content"
                    key={index * 3 + image}
                  >
                    <img
                      src={`${HOST}/images${image.first}`}
                      alt={image.id}
                      className="GalleryPicOnPage_content--img"
                      onClick={() => handleClick(image.id)}
                      width="250"
                      height="250"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
          <div className="multi__second">
            {data.map((image, index) => {
              if (index > Math.floor(test / 2)) {
                return (
                  <div
                    className="GalleryPicOnPage_content"
                    key={index * 3 + image}
                  >
                    <img
                      src={`${HOST}/images${image.first}`}
                      alt={image.id}
                      className="GalleryPicOnPage_content--img"
                      onClick={() => handleClick(image.id)}
                      width="250"
                      height="250"
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
};
export default FirstGalleryList;
