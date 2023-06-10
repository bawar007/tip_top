import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Provider/Provider";
import { obliczProcentWidocznosci } from "../../Provider/SomeFunctions/HowPercentsIsVisibled";

const Navi = () => {
  const { windowW, windowH } = useContext(AppContext);

  useEffect(() => {
    if (windowW) {
      const sections = document.querySelectorAll("section");
      sections.forEach((el) => {
        const i = document.querySelector(`${el.dataset.naviitem} > img`);
        i.classList.remove("activeNaviItem");
        window.addEventListener("scroll", () => obliczProcentWidocznosci(el));
      });
    }
  }, [windowW]);

  return (
    <div className="Navi">
      <div className="Menu">
        {windowW && windowH ? (
          <img src="/icons/LogoTipTopCss.svg" alt="logo" className="logoItem" />
        ) : null}

        <nav>
          <ul>
            <li>
              <a href="#home" className="Home--NaviItem">
                <img
                  src="/icons/Home.svg"
                  alt="home"
                  className="HomeNavi--logo activeNaviLogo"
                />
              </a>
              <span className="tool">Strona Główna</span>
            </li>
            <li>
              <a href="#gallery" className="Projects--NaviItem">
                <img
                  src="/icons/projects.svg"
                  alt="ofert"
                  className="OfertNavitest realizations"
                  width="40"
                  height="40"
                />
              </a>
              <span className="tool">Realizacje</span>
            </li>

            <li>
              <a href="#opinions" className="Opinions-NaviItem">
                <img
                  src="/icons/medalstar.svg"
                  alt="opinion"
                  className="OfertNavitest realizations"
                  width="40"
                  height="40"
                />
              </a>
              <span className="tool">Opinie</span>
            </li>
            <li>
              <a href="#ofert" className="Ofert-NaviItem">
                <img
                  src="/icons/offert.svg"
                  alt="ofert"
                  className="OfertNavi"
                  width="40"
                  height="40"
                />
              </a>
              <span className="tool">OFERTA</span>
            </li>
            <li>
              <a href="#whyUs" className="WhyUs-NaviItem">
                <img
                  src="/icons/whyus.svg"
                  alt="ofert"
                  className="OfertNavi realizations"
                  width="40"
                  height="40"
                />
              </a>
              <span className="tool">Dlaczego My?</span>
            </li>
            <li>
              <a href="#contact" className="Contact-NaviItem">
                <img
                  src="/icons/Contact.svg"
                  alt="contact"
                  className="Contact"
                  width="40"
                  height="40"
                />
              </a>
              <span className="tool">KONTAKT</span>
            </li>
          </ul>
        </nav>

        {windowW && (
          <a href="#home" className="ArrowUpPC">
            <img
              src="/icons/arrowcircleup.svg"
              alt="arrowUp"
              className="ArrowUp"
            />
          </a>
        )}
      </div>
    </div>
  );
};

export default Navi;
