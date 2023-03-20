import React, { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

import AllPicsPopUp from "./SubComponents/AllPicsPopUp/AllPicsPopup";

import MobileGallery from "./SubComponents/Mobile/MobileGallery";
import GalleryPics from "./SubComponents/GalleryPics/GalleryPics";

const GalleryPage = () => {
  const { windowW, windowH, allPics } = useContext(AppContext);

  return (
    <div className="galleryPage" id="gallery">
      <h1 className="title_page">REALIZACJE</h1>
      <GalleryPics />
      {allPics ? (
        windowW && windowH ? (
          <AllPicsPopUp />
        ) : (
          <MobileGallery />
        )
      ) : null}
    </div>
  );
};

export default GalleryPage;
