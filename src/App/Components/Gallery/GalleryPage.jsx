import React, { useRef, useState } from "react";

import { images } from "./SubComponents/image-data";

const GalleryPage = ({ galleryRef }) => {
  const [allPics, setAllPics] = useState(null);
  const [picId, setPicId] = useState(1);
  const [picIndex, setPicIndex] = useState(0);

  const modal = useRef();

  const handleClick = (id) => {
    setAllPics(true);
    setPicId(id);
  };

  const gallery = images.map((image, index) => (
    <div
      className="pic"
      key={index}
      data-aos="flip-down"
      onClick={() => handleClick(image.id)}
    >
      <img src={image.first} alt={image} className="pic_img" />
      <h3>Galeria {index + 1}</h3>
    </div>
  ));

  const allPicGalleryPop = [...images].filter((el) => el.id === picId);

  const AllSelectedPicsFromGallery = allPicGalleryPop[0].all.map(
    (el, index) => (
      <div className="picPopUp" key={index}>
        <img
          src={`${el}`}
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
          src={`${el}`}
          alt={el}
          className="solo_pic_img"
          id="myImg"
          onClick={() => {
            const modalEl = modal.current;
            const modalImg = document.querySelector("#img01");
            modalEl.style.display = "block";
            modalImg.src = `${el}`;
          }}
        />
      </div>
    ));

  return (
    <div className="galleryPage" ref={galleryRef}>
      <section className="pics">{gallery}</section>
      {allPics && (
        <section className="selectedPics" data-aos="flip-down">
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
                    return 2;
                  }
                })
              }
            >
              <img
                src="/icons/arrowcircleleft.svg"
                alt="arrright"
                className="arrow_gallery"
              />
            </div>
            {AllSelectedPicsFromGallery}
            <div
              className="next"
              onClick={() =>
                setPicIndex((prev) => {
                  if (prev < 2) {
                    return prev + 1;
                  } else {
                    return 0;
                  }
                })
              }
            >
              <img
                src="/icons/arrowcircleright.svg"
                alt="arrright"
                className="arrow_gallery"
              />
            </div>
          </div>
        </section>
      )}
      <div className="modal" ref={modal}>
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
