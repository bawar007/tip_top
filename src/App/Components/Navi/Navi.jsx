import React, { useEffect, useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const Navi = ({ homeRef, galleryRef, contactRef, ofertRef }) => {
  const { setPage, page, windowW } = useContext(AppContext);

  let home = false;
  let gallery = false;
  let contact = false;
  let ofert = false;

  const handleScroll = (el, pageEl) => {
    window.scrollTo({ top: el.offsetTop - 80, left: 0 });
    setPage(pageEl);
  };

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
    console.log(page);
  });

  return (
    <div className="Navi">
      <div className="Menu">
        {windowW && (
          <img src="/icons/LogoTipTopCss.svg" alt="logo" className="logoItem" />
        )}

        <section>
          <img
            src="/icons/Home.svg"
            alt="home"
            className={home ? "Home active" : "Home"}
            onClick={() => handleScroll(homeRef.current, 1)}
          />
          <p>HOME</p>
        </section>
        <section>
          <img
            src="/icons/offert.svg"
            alt="ofert"
            className={ofert ? "OfertNavi active" : "OfertNavi"}
            onClick={() => handleScroll(ofertRef.current, 2)}
          />
          <p>OFERTA</p>
        </section>
        <section>
          <img
            src="/icons/Galery.svg"
            alt="gallery"
            className={gallery ? "Gallery active" : "Gallery"}
            onClick={() => handleScroll(galleryRef.current, 3)}
          />
          <p>GALERIA</p>
        </section>
        <section>
          <img
            src="/icons/Contact.svg"
            alt="contact"
            className={contact ? "Contact active" : "Contact"}
            onClick={() => handleScroll(contactRef.current, 4)}
          />
          <p>KONTAKT</p>
        </section>

        {windowW ? (
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
