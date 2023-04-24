import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Provider/Provider";

const NaviMobile = () => {
  const [check, setCheck] = useState(false);

  const { tip } = useContext(AppContext);

  const ofertAnimation = () => {
    const ofertItems = document.querySelectorAll(".multi-container--infoBox");
    ofertItems.forEach((el) => {
      el.classList.remove("animate__animated", "animate__fadeInBottomLeft");

      setTimeout(() => {
        el.classList.add("animate__animated", "animate__fadeInBottomLeft");
      }, 500);
    });
  };

  useEffect(() => {
    const el = document.querySelector(".footer");
    const ArrowUp = document.querySelector(".ArrowUpTest");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (ArrowUp) {
          if (entry.isIntersecting) {
            console.log("entry: " + entry.isIntersecting);
            ArrowUp.classList.add("white");
          } else {
            ArrowUp.classList.remove("white");
          }
        }
      });
    });

    observer.observe(el);
  });

  return (
    <>
      <label className="navi-mobile-label">
        <input type="checkbox" checked={check} readOnly />
        <span className="menu" onClick={() => setCheck((prev) => !prev)}>
          <span className="hamburger"></span>
        </span>
        <ul>
          <li>
            <a href="#home" onClick={() => setCheck(false)}>
              <img
                src={`${tip}/icons/Home.svg`}
                alt="ofert"
                className="OfertNavitest"
              />
              Strona Główna
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setCheck(false)}>
              <img
                src={`${tip}/icons/projects.svg`}
                alt="ofert"
                className="OfertNavitest"
              />
              Realizacje
            </a>
          </li>

          <li>
            <a
              href="#opinions"
              onClick={() => {
                setCheck(false);
              }}
            >
              <img
                src={`${tip}/icons/medalstar.svg`}
                alt="opinion"
                className="OfertNavitest"
              />
              Opinie
            </a>
          </li>
          <li>
            <a
              href="#ofert"
              onClick={() => {
                setCheck(false);
                ofertAnimation();
              }}
            >
              <img
                src={`${tip}/icons/offert.svg`}
                alt="ofert"
                className="OfertNavitest"
              />
              Oferta
            </a>
          </li>
          <li>
            <a
              href="#whyUs"
              onClick={() => {
                setCheck(false);
              }}
            >
              <img
                src={`${tip}/icons/whyus.svg`}
                alt="ofert"
                className="OfertNavitest"
              />
              DLACZEGO MY?
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setCheck(false);
              }}
            >
              <img
                src={`${tip}/icons/Contact.svg`}
                alt="ofert"
                className="OfertNavitest"
              />
              Kontakt
            </a>
          </li>
        </ul>
      </label>
      <a
        href="#home"
        className="ArrowUpTestLink"
        onClick={() => setCheck(false)}
      >
        <img
          src={`${tip}/icons/arrowcircleup.svg`}
          alt="arrowUp"
          className="ArrowUpTest"
        />
      </a>
    </>
  );
};

export default NaviMobile;
