import React, { useContext } from "react";
import useGetAllPics from "../../../hooks/useGetAllPics";
import { AppContext } from "../../provider/AppProvider";
import "./GalleryPage.scss";
import Section from "../../components/Section/Section";
import GalleryPicFromDefaultPage from "../../components/GalleryPicFromDefaultPage/GalleryPicFromDefaultPage";
import Modal from "../../components/Modal/Modal";

const API_KEY = process.env.REACT_APP_API_KEY;

const Settings = {
  className: "galleryPage",
  id: "gallery",
  title: "REALIZACJE",
  boxFlip: true,
};

const GalleryPage = React.memo(() => {
  const { handleClick, HOST, allPics } = useContext(AppContext);

  const { data, loading, error } = useGetAllPics(HOST, API_KEY);

  if (loading || error) return;

  return (
    <Section {...Settings}>
      <div className="GalleryPicOnPage_box">
        {data.map((image, index) => (
          <GalleryPicFromDefaultPage
            image={image}
            HOST={HOST}
            onClick={() => handleClick(image.id)}
            key={`image-${index}`}
          />
        ))}
      </div>
      {allPics && <Modal />}
    </Section>
  );
});

export default GalleryPage;
