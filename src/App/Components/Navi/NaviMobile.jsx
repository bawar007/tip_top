import { useState } from "react";

const NaviMobile = () => {
  const [check, setCheck] = useState(false);

  const ofertAnimation = () => {
    const ofertItems = document.querySelectorAll(".multi-container--infoBox");
    ofertItems.forEach((el) => {
      el.classList.remove("animate__animated", "animate__fadeInBottomLeft");

      setTimeout(() => {
        el.classList.add("animate__animated", "animate__fadeInBottomLeft");
      }, 500);
    });
  };

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
                src="/icons/Home.svg"
                alt="ofert"
                className="OfertNavitest"
                width="40"
                height="40"
              />
              Strona Główna
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setCheck(false)}>
              <img
                src="/icons/projects.svg"
                alt="ofert"
                className="OfertNavitest"
                width="40"
                height="40"
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
                src="/icons/medalstar.svg"
                alt="opinion"
                className="OfertNavitest"
                width="40"
                height="40"
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
                src="/icons/offert.svg"
                alt="ofert"
                className="OfertNavitest"
                width="40"
                height="40"
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
                src="/icons/whyus.svg"
                alt="ofert"
                className="OfertNavitest"
                width="40"
                height="40"
              />
              Dlaczego My?
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
                src="/icons/Contact.svg"
                alt="ofert"
                className="OfertNavitest"
                width="40"
                height="40"
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
          src="/icons/arrowcircleup.svg"
          alt="arrowUp"
          className="ArrowUpTest"
          width="40"
          height="40"
        />
      </a>
    </>
  );
};

export default NaviMobile;
