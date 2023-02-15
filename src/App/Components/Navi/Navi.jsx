import React, { useState } from "react";

const Navi = ({ homeRef, galleryRef, contactRef }) => {
  const [page, setPage] = useState(2);

  const handleScroll = (el, page) => {
    window.scrollTo({ top: el.offsetTop, left: 0, behavior: "smooth" });
    setPage(page);
  };
  return (
    <div className="Navi">
      <div className="Menu">
        <img src="/icons/LOGO.svg" alt="logo" className="Logo" />
        <img
          src="/icons/Home.svg"
          alt="home"
          className={page === 1 ? "Home active" : "Home"}
          onClick={() => handleScroll(homeRef.current, 1)}
        />
        <p>HOME</p>
        <img
          src="/icons/Galery.svg"
          alt="gallery"
          className={page === 2 ? "Gallery active" : "Gallery"}
          onClick={() => handleScroll(galleryRef.current, 2)}
        />
        <p>GALERIA</p>
        <img
          src="/icons/Contact.svg"
          alt="contact"
          className={page === 3 ? "Contact active" : "Contact"}
          onClick={() => handleScroll(contactRef.current, 3)}
        />
        <p>KONTAKT</p>
        {page > 1 && (
          <img
            src="/icons/arrowcircleup.svg"
            alt="arrowUp"
            className="ArrowUp"
            onClick={() => handleScroll(homeRef.current, 1)}
          />
        )}
      </div>
    </div>
  );
};

export default Navi;
