import React, { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const Navi = () => {
  const { windowW, tip } = useContext(AppContext);

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
          <img src={`${tip}/icons/Home.svg`} alt="home" className="Home" />
          <p>HOME</p>
        </a>

        <a href="#ofert">
          <img
            src={`${tip}/icons/offert.svg`}
            alt="ofert"
            className="OfertNavi"
          />
          <p>OFERTA</p>
        </a>

        <a href="#gallery">
          <img
            src={`${tip}/icons/projects.svg`}
            alt="ofert"
            className="OfertNavitest realizations"
          />
          Realizacje
        </a>
        <a href="#opinions">
          <img
            src={`${tip}/icons/medalstar.svg`}
            alt="opinion"
            className="OfertNavitest"
          />
          Opinie
        </a>
        <a href="#contact">
          <img
            src={`${tip}/icons/Contact.svg`}
            alt="contact"
            className="Contact"
          />
          <p>KONTAKT</p>
        </a>

        {windowW && (
          <>
            <a href="#home" className="ArrowUpPC">
              <img
                src={`${tip}/icons/arrowcircleup.svg`}
                alt="arrowUp"
                className="ArrowUp"
              />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default Navi;
