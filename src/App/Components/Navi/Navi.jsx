import React, { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const Navi = () => {
  const { setPage, page, windowW, tip } = useContext(AppContext);

  let home = false;
  let gallery = false;
  let contact = false;
  let ofert = false;

  const handleScroll = (pageEl) => {
    setPage(pageEl);
  };

  return (
    <div className="Navi">
      <div className="Menu">
        {windowW && (
          <img
            src={`${tip}/icons/LogoTipTopCss.svg`}
            alt="logo"
            className="logoItem"
          />
        )}

        <a href="#home">
          <img
            src={`${tip}/icons/Home.svg`}
            alt="home"
            className={home ? "Home active" : "Home"}
            onClick={() => handleScroll(1)}
          />
          <p>HOME</p>
        </a>

        <a href="#ofert">
          <img
            src={`${tip}/icons/offert.svg`}
            alt="ofert"
            className={ofert ? "OfertNavi active" : "OfertNavi"}
            onClick={() => handleScroll(2)}
          />
          <p>OFERTA</p>
        </a>

        <a href="#gallery">
          <img
            src={`${tip}/icons/Galery.svg`}
            alt="gallery"
            className={gallery ? "Gallery active" : "Gallery"}
            onClick={() => handleScroll(3)}
          />
          <p>GALERIA</p>
        </a>

        <a href="#contact">
          <img
            src={`${tip}/icons/Contact.svg`}
            alt="contact"
            className={contact ? "Contact active" : "Contact"}
            onClick={() => handleScroll(4)}
          />
          <p>KONTAKT</p>
        </a>

        {windowW && (
          <>
            {page >= 1 && page < 4 && (
              <a href="#contact">
                <img
                  src={`${tip}/icons/arrowcircledown.svg`}
                  alt="arrowUp"
                  className="ArrowUp"
                  onClick={() => handleScroll(4)}
                />
              </a>
            )}
            {page === 4 && (
              <a href="#home">
                <img
                  src={`${tip}/icons/arrowcircleup.svg`}
                  alt="arrowUp"
                  className="ArrowUp"
                  onClick={() => handleScroll(1)}
                />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navi;
