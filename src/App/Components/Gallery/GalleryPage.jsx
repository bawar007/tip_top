import React, { useContext } from "react";

import { images } from "./data/image-data";

import { AppContext } from "../../Provider/Provider";

import AllPicsPopUp from "./SubComponents/AllPicsPopUp/AllPicsPopMenu/AllPicsPopup";

import MobileGallery from "./SubComponents/Mobile/MobileGallery";

const GalleryPage = () => {
  const { tip, windowW, allPics, handleClick } = useContext(AppContext);

  const gallery = images.map((image, index) => (
    <div className="pic test" key={index}>
      <img
        src={`${tip}${image.first}`}
        alt={image}
        className="pic_img"
        onClick={() => (!windowW ? handleClick(image.id) : null)}
      />
      <h3>Projekt {index + 1}</h3>
      {windowW && (
        <button
          className="btnShowProject"
          onClick={() => handleClick(image.id)}
        >
          sprawdz galerię
        </button>
      )}
    </div>
  ));

  return (
    <div className="galleryPage" id="gallery">
      <h1 className="title_gallery">REALIZACJE</h1>
      <section className="pics">{gallery}</section>
      {allPics ? !windowW ? <MobileGallery /> : <AllPicsPopUp /> : null}
    </div>
  );
};

export default GalleryPage;
