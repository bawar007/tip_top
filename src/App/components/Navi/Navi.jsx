import { useState, useEffect, useContext } from "react";
import { obliczProcentWidocznosci } from "../../../utils/HowPercentsIsVisibled";
import { AppContext } from "../../provider/AppProvider";
import { HashLink } from "react-router-hash-link";

import "./Navi.scss";
import NavigationItem from "../NavigationItem/NavigationItem";

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
    const liEl = document.querySelectorAll(".menu > li");
    const imgEl = document.querySelectorAll(".menu > li > a > img");

    const liToActive = document.querySelector(`#${e}`);
    const liImgToActive = liToActive.lastElementChild.children[0];
    liEl.forEach((el) => el !== e && el.classList.remove("active"));
    imgEl.forEach((el) => el.classList.remove("activeNaviLogo"));
    liToActive.classList.add("active");
    liImgToActive.classList.add("activeNaviLogo");
  };

  useEffect(() => {
    const item = document.querySelector(".ResponsiveMenu");

    if (toggleMenu) {
      item.style.top = "10px";
      item.style.bottom = "";
    } else {
      item.style.top = "";
      item.style.bottom = "90px";
    }
  }, [toggleMenu]);

  return (
    <header className="ResponsiveMenu">
      <input type="checkbox" id="menu-toggle" checked={toggleMenu} readOnly />
      <label
        htmlFor="menu-toggle"
        className="menuToggle"
        onClick={() => {
          setToggleMenu((prev) => !prev);
        }}
      >
        <span className="navicon"></span>
      </label>
      <nav className="menu-content">
        <div className="imgBox">
          <img src="/icons/LogoTipTopCss.svg" alt="logo" />
        </div>

        <ul className="menu">
          <NavigationItem
            onClick={() => {
              setToggleMenu(false);
              handleToggleList("home-li");
            }}
            className="Home--NaviItem"
            name="home"
          >
            <img
              src="/icons/Home.svg"
              alt="home"
              className="HomeNavi--logo activeNaviLogo list-img"
            />
            <span className="tool">Strona Główna</span>
          </NavigationItem>
          <NavigationItem
            onClick={() => {
              setToggleMenu(false);
              handleToggleList("whyus-li");
            }}
            className="WhyUs-NaviItem"
            name="whyUs"
          >
            <img
              src="/icons/whyus.svg"
              alt="ofert"
              className="OfertNavi list-img"
              width="40"
              height="40"
            />
            <span className="tool">Dlaczego My?</span>
          </NavigationItem>

          <NavigationItem
            onClick={() => {
              setToggleMenu(false);
              handleToggleList("gallery-li");
            }}
            className="Projects--NaviItem"
            name="gallery"
          >
            <img
              src="/icons/projects.svg"
              alt="ofert"
              className="OfertNavitest list-img"
              width="40"
              height="40"
            />
            <span className="tool">Realizacje</span>
          </NavigationItem>

          <NavigationItem
            onClick={() => {
              setToggleMenu(false);
              handleToggleList("ofert-li");
            }}
            className="Ofert-NaviItem"
            name="ofert"
          >
            <img
              src="/icons/offert.svg"
              alt="ofert"
              className="OfertNavi-img list-img"
              width="40"
              height="40"
            />
            <span className="tool">OFERTA</span>
          </NavigationItem>

          <NavigationItem
            onClick={() => {
              setToggleMenu(false);
              handleToggleList("contact-li");
            }}
            className="Contact-NaviItem"
            name="contact"
          >
            <img
              src="/icons/Contact.svg"
              alt="contact"
              className="Contact list-img"
              width="40"
              height="40"
            />
            <span className="tool">O NAS</span>
          </NavigationItem>
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
