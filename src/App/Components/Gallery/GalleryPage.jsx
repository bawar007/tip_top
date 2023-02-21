import React, { useContext, useEffect, useRef, useState } from "react";

import { images } from "./SubComponents/image-data";

import { AppContext } from "../../Provider/Provider";

const GalleryPage = ({ galleryRef }) => {
  const [allPics, setAllPics] = useState(null);
  const [picId, setPicId] = useState(1);
  const [picIndex, setPicIndex] = useState(0);

  const modal = useRef();

  const { windowW, tip } = useContext(AppContext);

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

  const allPicGalleryPop = [...images].filter((el) => el.id === picId);

  const AllSelectedPicsFromGallery = allPicGalleryPop[0].all.map(
    (el, index) => (
      <div className="picPopUp" key={index}>
        <img
          src={`${tip}${el}`}
          alt={el}
          className={picIndex === index ? "pic_img active" : "pic_img"}
          onClick={() => setPicIndex(index)}
        />
      </div>
    )
  );

  const OnePicFromGallery = allPicGalleryPop[0].all
    .filter((el, index) => index === picIndex)
    .map((el, index) => (
      <div className="picSolo" key={index}>
        <img
          src={`${tip}${el}`}
          alt={el}
          className="solo_pic_img"
          id="myImg"
          onClick={() => {
            if (windowW) {
              const modalEl = modal.current;
              const modalImg = document.querySelector("#img01");
              modalEl.style.display = "block";
              modalImg.src = `${el}`;
            }
          }}
        />
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
    <div className="galleryPage" ref={galleryRef} id="gallery">
      <h1
        style={{ textAlign: "center", margin: "20px 0" }}
        className="title_gallery"
      >
        PROJEKTY
      </h1>
      <section className="pics">{gallery}</section>
      {allPics && (
        <section className="selectedPics">
          <div className="selectPic">{OnePicFromGallery}</div>
          <div className="allPics">
            <span
              className="close"
              style={{ color: "black" }}
              onClick={() => setAllPics(false)}
            >
              &times;
            </span>
            <div
              className="back"
              onClick={() =>
                setPicIndex((prev) => {
                  if (prev > 0) {
                    return prev - 1;
                  } else {
                    return allPicGalleryPop[0].all.length - 1;
                  }
                })
              }
            >
              <img
                src={`${tip}/icons/arrowcircleleft.svg`}
                alt="arrright"
                className="arrow_gallery"
              />
            </div>
            {AllSelectedPicsFromGallery}
            <div
              className="next"
              onClick={() =>
                setPicIndex((prev) => {
                  if (prev < allPicGalleryPop[0].all.length - 1) {
                    return prev + 1;
                  } else {
                    return 0;
                  }
                })
              }
            >
              <img
                src={`${tip}/icons/arrowcircleright.svg`}
                alt="arrright"
                className="arrow_gallery"
              />
            </div>
          </div>
        </section>
      )}
      <div className="modal" ref={modal} style={{ display: "none" }}>
        <span
          className="close"
          onClick={() => (modal.current.style.display = "none")}
        >
          &times;
        </span>
        <img className="modal-content" id="img01" alt="img" />
      </div>
    </div>
  );
};

export default GalleryPage;
