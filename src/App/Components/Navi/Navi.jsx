import React, { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const Navi = () => {
  const { setPage, page, windowW, tip } = useContext(AppContext);

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

        <a href="#home" onClick={() => handleScroll(1)}>
          <img src={`${tip}/icons/Home.svg`} alt="home" className="Home" />
          <p>HOME</p>
        </a>

        <a href="#ofert" onClick={() => handleScroll(2)}>
          <img
            src={`${tip}/icons/offert.svg`}
            alt="ofert"
            className="OfertNavi"
          />
          <p>OFERTA</p>
        </a>

        <a href="#gallery" onClick={() => handleScroll(3)}>
          <img
            src={`${tip}/icons/Galery.svg`}
            alt="gallery"
            className="Gallery"
          />
          <p>GALERIA</p>
        </a>

        <a href="#contact" onClick={() => handleScroll(4)}>
          <img
            src={`${tip}/icons/Contact.svg`}
            alt="contact"
            className="Contact"
          />
          <p>KONTAKT</p>
        </a>

        {windowW && (
          <>
            {page >= 1 && page < 4 && (
              <a href="#contact" onClick={() => handleScroll(4)}>
                <img
                  src={`${tip}/icons/arrowcircledown.svg`}
                  alt="arrowUp"
                  className="ArrowUp"
                />
              </a>
            )}
            {page === 4 && (
              <a href="#home" onClick={() => handleScroll(1)}>
                <img
                  src={`${tip}/icons/arrowcircleup.svg`}
                  alt="arrowUp"
                  className="ArrowUp"
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
