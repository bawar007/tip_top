import React, { useContext, useEffect, useRef, useState } from "react";

import { images } from "./SubComponents/image-data";

import { AppContext } from "../../Provider/Provider";

import AllPicsPopUp from "./SubComponents/AllPicsPopUp/AllPicsPopup";

import Modal from "./SubComponents/Modal/Modal";

const GalleryPage = () => {
  const { tip } = useContext(AppContext);

  const [allPics, setAllPics] = useState(null);
  const [picId, setPicId] = useState(1);
  const [picIndex, setPicIndex] = useState(0);
  const modal = useRef();

  const allPicGalleryPop = [...images].filter((el) => el.id === picId);

  const handleClick = (id) => {
    setAllPics(true);
    setPicId(id);
  };

  const gallery = images.map((image, index) => (
    <div className="pic" key={index} onClick={() => handleClick(image.id)}>
      <img src={`${tip}${image.first}`} alt={image} className="pic_img" />
      <h3>Projekt {index + 1}</h3>
    </div>
  ));

  useEffect(() => {
    const galerryElements = document.querySelectorAll(".pic");

    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry, index) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add("animate__animated", "animate__fadeInUp");
          document
            .querySelector(".title_gallery")
            .classList.add("animate__animated", "animate__fadeInUp");
        }
      });
    });
    galerryElements.forEach((el) => observer.observe(el));
  });

  return (
    <div className="galleryPage" id="gallery">
      <h1
        style={{ textAlign: "center", margin: "20px 0" }}
        className="title_gallery"
      >
        PROJEKTY
      </h1>
      <section className="pics">{gallery}</section>
      {allPics && (
        <AllPicsPopUp
          allPicGalleryPop={allPicGalleryPop}
          picIndex={picIndex}
          modal={modal}
          setAllPics={setAllPics}
          setPicIndex={setPicIndex}
        />
      )}
      <Modal modalRef={modal} />
    </div>
  );
};

export default GalleryPage;
