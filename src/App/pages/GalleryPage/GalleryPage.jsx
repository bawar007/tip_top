import React, { useContext } from "react";
import useGetAllPics from "../../hooks/useGetAllPics";
import { AppContext } from "../../provider/AppProvider";

import "./GalleryPage.scss";
import Section from "../../components/Section/Section";
import GalleryPicFromDefaultPage from "../../components/GalleryPicFromDefaultPage/GalleryPicFromDefaultPage";
import Modal from "../../components/Modal/Modal";

const API_KEY = process.env.REACT_APP_API_KEY;

const Settings = {
  className: "galleryPage",
  id: "gallery",
  dataNaviitem: ".Projects--NaviItem",
  title: "REALIZACJE",
};

const GalleryPage = React.memo(() => {
  const { handleClick, HOST, windowW, allPics } = useContext(AppContext);

  const { data, loading, error } = useGetAllPics(HOST, API_KEY);

  if (loading || error) return;

  const test = data.length;

  return (
    <Section {...Settings}>
      <div className="GalleryPicOnPage_box">
        {windowW &&
          data.map((image) => (
            <GalleryPicFromDefaultPage
              image={image}
              HOST={HOST}
              onClick={() => handleClick(image.id)}
              key={image.id + image.first + 2}
            />
          ))}
        {!windowW && (
          <div className="multi__gallery">
            <div className="multi__first">
              {data.map((image, index) => {
                if (index <= Math.floor(test / 2)) {
                  return (
                    <GalleryPicFromDefaultPage
                      image={image}
                      HOST={HOST}
                      onClick={() => handleClick(image.id)}
                      key={image.id + image.first}
                    />
                  );
                }
                return null;
              })}
            </div>
            <div className="multi__second">
              {data.map((image, index) => {
                if (index > Math.floor(test / 2)) {
                  return (
                    <GalleryPicFromDefaultPage
                      image={image}
                      HOST={HOST}
                      onClick={() => handleClick(image.id)}
                      key={image.id + image.first + 4}
                    />
                  );
                }
                return null;
              })}
            </div>
          </div>
        )}
        {allPics && <Modal />}
      </div>
    </Section>
  );
});

export default GalleryPage;
