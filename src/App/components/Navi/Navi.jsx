import { useState, useEffect } from "react";
import "./Navi.scss";
import NavigationItem from "../NavigationItem/NavigationItem";

const Navi = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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

  const handleUp = () => {
    document.querySelector(".arrowUp").addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  };

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
            }}
            className="Home--NaviItem"
            name=""
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
        <button to="home" onClick={handleUp}>
          <img
            src="/icons/arrowcircleup.svg"
            alt="arrowUp"
            className="ArrowUp"
            width="40"
            height="40"
          />
        </button>
      </div>
    </header>
  );
};

export default Navi;
