import React, { useEffect, useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const Navi = () => {
  const { setPage, page, windowW } = useContext(AppContext);

  let home = false;
  let gallery = false;
  let contact = false;
  let ofert = false;

  const handleScroll = (pageEl) => {
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
            onClick={() => handleScroll(1)}
          />
          <a href="#home">
            <p>HOME</p>
          </a>
        </section>
        <section>
          <img
            src="/icons/offert.svg"
            alt="ofert"
            className={ofert ? "OfertNavi active" : "OfertNavi"}
            onClick={() => handleScroll(2)}
          />
          <a href="#ofert">
            <p>OFERTA</p>
          </a>
        </section>
        <section>
          <img
            src="/icons/Galery.svg"
            alt="gallery"
            className={gallery ? "Gallery active" : "Gallery"}
            onClick={() => handleScroll(3)}
          />
          <a href="#gallery">
            <p>GALERIA</p>
          </a>
        </section>
        <section>
          <img
            src="/icons/Contact.svg"
            alt="contact"
            className={contact ? "Contact active" : "Contact"}
            onClick={() => handleScroll(4)}
          />
          <a href="#contact">
            <p>KONTAKT</p>
          </a>
        </section>

        {windowW ? (
          page > 1 ? (
            <img
              src="/icons/arrowcircleup.svg"
              alt="arrowUp"
              className="ArrowUp"
              onClick={() => handleScroll(1)}
            />
          ) : (
            <img
              src="/icons/arrowcircledown.svg"
              alt="arrowUp"
              className="ArrowUp"
              onClick={() => handleScroll(4)}
            />
          )
        ) : null}
      </div>
    </div>
  );
};

export default Navi;
