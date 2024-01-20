import { useState, useEffect, useContext } from "react";
import { obliczProcentWidocznosci } from "../../helpers/HowPercentsIsVisibled";
import { AppContext } from "../../AppPageProvider/AppPageProvider";
import { HashLink } from "react-router-hash-link";

const Navi = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { windowW } = useContext(AppContext);

  useEffect(() => {
    if (windowW) {
      const sections = document.querySelectorAll("section");
      sections.forEach((el, index) => {
        const i = document.querySelector(`${el.dataset.naviitem} > img`);
        if (index !== 0) {
          i.parentElement.parentElement.classList.remove("active");
          i.classList.remove("activeNaviLogo");
        }
        window.addEventListener("scroll", () => obliczProcentWidocznosci(el));
      });
    }
  }, [windowW]);

  const handleToggleList = (e) => {
    const liEl = document.querySelectorAll(".testMenu > li");
    const imgEl = document.querySelectorAll(".testMenu > li > a > img");

    const liToActive = document.querySelector(`#${e}`);
    const liImgToActive = liToActive.lastElementChild.children[0];
    liEl.forEach((el) => el !== e && el.classList.remove("active"));
    imgEl.forEach((el) => el.classList.remove("activeNaviLogo"));
    liToActive.classList.add("active");
    liImgToActive.classList.add("activeNaviLogo");
  };

  return (
    <header className="ResponsiveMenu">
      <input type="checkbox" id="menu-toggle" checked={toggleMenu} readOnly />
      <label
        htmlFor="menu-toggle"
        className="menuToggle"
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        <span className="navicon"></span>
      </label>
      <nav className="menu-content">
        <div className="imgBox">
          <img src="/icons/LogoTipTopCss.svg" alt="logo" />
        </div>

        <ul className="testMenu">
          <li
            onClick={(e) => {
              setToggleMenu(false);
              handleToggleList("home-li");
            }}
            className="active"
            id="home-li"
          >
            <HashLink to="#home" className="Home--NaviItem">
              <img
                src="/icons/Home.svg"
                alt="home"
                className="HomeNavi--logo activeNaviLogo list-img"
              />
              <span className="tool">Strona Główna</span>
            </HashLink>
          </li>

          <li
            onClick={(e) => {
              setToggleMenu(false);
              handleToggleList("whyus-li");
            }}
            id="whyus-li"
          >
            <HashLink to="#whyUs" className="WhyUs-NaviItem">
              <img
                src="/icons/whyus.svg"
                alt="ofert"
                className="OfertNavi list-img"
                width="40"
                height="40"
              />
              <span className="tool">Dlaczego My?</span>
            </HashLink>
          </li>
          <li
            onClick={(e) => {
              setToggleMenu(false);
              handleToggleList("gallery-li");
            }}
            id="gallery-li"
          >
            <HashLink to="#gallery" className="Projects--NaviItem">
              <img
                src="/icons/projects.svg"
                alt="ofert"
                className="OfertNavitest list-img"
                width="40"
                height="40"
              />
              <span className="tool">Realizacje</span>
            </HashLink>
          </li>
          <li
            onClick={(e) => {
              setToggleMenu(false);
              handleToggleList("offert-li");
            }}
            id="offert-li"
          >
            <HashLink to="#ofert" className="Ofert-NaviItem">
              <img
                src="/icons/offert.svg"
                alt="ofert"
                className="OfertNavi-img list-img"
                width="40"
                height="40"
              />
              <span className="tool">OFERTA</span>
            </HashLink>
          </li>
          <li
            onClick={(e) => {
              setToggleMenu(false);
              handleToggleList("opinions-li");
            }}
            id="opinions-li"
          >
            <HashLink to="#opinions" className="Opinions-NaviItem">
              <img
                src="/icons/medalstar.svg"
                alt="opinion"
                className="OfertNavitest list-img"
                width="40"
                height="40"
              />
              <span className="tool">Opinie</span>
            </HashLink>
          </li>
          <li
            onClick={(e) => {
              setToggleMenu(false);
              handleToggleList("contact-li");
            }}
            id="contact-li"
          >
            <HashLink to="#contact" className="Contact-NaviItem">
              <img
                src="/icons/Contact.svg"
                alt="contact"
                className="Contact list-img"
                width="40"
                height="40"
              />
              <span className="tool">KONTAKT</span>
            </HashLink>
          </li>
        </ul>
      </nav>
      <div className="arrowUp">
        <HashLink to="#home">
          <img
            src="/icons/arrowcircleup.svg"
            alt="arrowUp"
            className="ArrowUp"
            width="40"
            height="40"
          />
        </HashLink>
      </div>
    </header>
  );
};

export default Navi;
