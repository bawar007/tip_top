import React, { useEffect, useContext, useRef } from "react";
import { AppContext } from "../../Provider/Provider";

const Navi = ({ homeRef, galleryRef, contactRef, ofertRef }) => {
  const { setPage, page } = useContext(AppContext);

  const windowWidth = useRef(window.innerWidth);

  const handleScroll = (el, pageEl) => {
    window.scrollTo({ top: el.offsetTop, left: 0 });
    setPage(pageEl);
  };

  const SetPageScroll = () => {
    const scrollTopEl = document.documentElement.scrollTop;
    const elHeight = Math.round(document.documentElement.offsetHeight / 4);
    if (elHeight > scrollTopEl - 300) {
      setPage(1);
    }
    if (scrollTopEl > elHeight - 50) {
      setPage(2);
    }
    if (scrollTopEl > elHeight * 2 - 50) {
      setPage(3);
    }
    if (scrollTopEl > elHeight * 3 - 50) {
      setPage(4);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", () => SetPageScroll());
    return document.removeEventListener("scroll", () => SetPageScroll());
  });

  const animationOfertPage = () => {
    if (page === 2) {
      document.querySelectorAll(".infoOfert").forEach((el) => {
        if (!el.classList.contains("animationOfert")) {
          el.classList.toggle("animationOfert");
          el.style.visibility = "visible";
        }
      });
    }
  };

  useEffect(() => {
    animationOfertPage();
  });

  return (
    <div className="Navi">
      <div className="Menu">
        <img src="/icons/LogoTipTopCss.svg" alt="logo" className="logoItem" />
        <section>
          <img
            src="/icons/Home.svg"
            alt="home"
            className={page === 1 ? "Home active" : "Home"}
            onClick={() => handleScroll(homeRef.current, 1)}
          />
          <p>HOME</p>
        </section>
        <section>
          <img
            src="/icons/offert.svg"
            alt="ofert"
            className={page === 2 ? "OfertNavi active" : "OfertNavi"}
            onClick={() => handleScroll(ofertRef.current, 2)}
          />
          <p>OFERTA</p>
        </section>
        <section>
          <img
            src="/icons/Galery.svg"
            alt="gallery"
            className={page === 3 ? "Gallery active" : "Gallery"}
            onClick={() => handleScroll(galleryRef.current, 3)}
          />
          <p>GALERIA</p>
        </section>
        <section>
          <img
            src="/icons/Contact.svg"
            alt="contact"
            className={page === 4 ? "Contact active" : "Contact"}
            onClick={() => handleScroll(contactRef.current, 4)}
          />
          <p>KONTAKT</p>
        </section>

        {windowWidth > 700 ? (
          page > 1 ? (
            <img
              src="/icons/arrowcircleup.svg"
              alt="arrowUp"
              className="ArrowUp"
              onClick={() => handleScroll(homeRef.current, 1)}
            />
          ) : (
            <img
              src="/icons/arrowcircledown.svg"
              alt="arrowUp"
              className="ArrowUp"
              onClick={() => handleScroll(contactRef.current, 4)}
            />
          )
        ) : null}
      </div>
    </div>
  );
};

export default Navi;
