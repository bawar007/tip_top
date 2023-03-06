import React, { useContext } from "react";

import { images } from "./data/image-data";

import { AppContext } from "../../Provider/Provider";

import AllPicsPopUp from "./SubComponents/AllPicsPopUp/AllPicsPopMenu/AllPicsPopup";

import MobileGallery from "./SubComponents/Mobile/MobileGallery";

const GalleryPage = () => {
  const { tip, windowW, windowH, allPics, handleClick } =
    useContext(AppContext);

  const gallery = images.map((image, index) => (
    <div className="pic test animate__fadeInUp animate__animated" key={index}>
      <img
        src={`${tip}${image.first}`}
        alt={image.id}
        className="pic_img "
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
      <h1 className="title_page">REALIZACJE</h1>
      <section className="pics">{gallery}</section>
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
