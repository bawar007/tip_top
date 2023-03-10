import React, { useContext } from "react";
import { AppContext } from "../../Provider/Provider";

const Navi = () => {
  const { windowW, windowH, tip } = useContext(AppContext);

  return (
    <div className="Navi">
      <div className="Menu">
        {windowW && windowH ? (
          <img
            src={`${tip}/icons/LogoTipTopCss.svg`}
            alt="logo"
            className="logoItem"
          />
        ) : null}

        <nav>
          <ul>
            <li>
              <a href="#home" className="Home">
                <img src={`${tip}/icons/Home.svg`} alt="home" />
              </a>
              <span className="tool">HOME</span>
            </li>
            <li>
              <a href="#gallery">
                <img
                  src={`${tip}/icons/projects.svg`}
                  alt="ofert"
                  className="OfertNavitest realizations"
                />
              </a>
              <span className="tool">Realizacje</span>
            </li>

            <li>
              <a href="#opinions">
                <img
                  src={`${tip}/icons/medalstar.svg`}
                  alt="opinion"
                  className="OfertNavitest realizations"
                />
              </a>
              <span className="tool">Opinie</span>
            </li>
            <li>
              <a href="#ofert">
                <img
                  src={`${tip}/icons/offert.svg`}
                  alt="ofert"
                  className="OfertNavi"
                />
              </a>
              <span className="tool">OFERTA</span>
            </li>
            <li>
              <a href="#contact">
                <img
                  src={`${tip}/icons/Contact.svg`}
                  alt="contact"
                  className="Contact"
                />
              </a>
              <span className="tool">KONTAKT</span>
            </li>
          </ul>
        </nav>

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
