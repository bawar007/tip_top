import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../Provider/Provider";

const NaviMobile = () => {
  const [check, setCheck] = useState(false);

  const { tip } = useContext(AppContext);

  const ofertAnimation = () => {
    const ofertItems = document.querySelectorAll(".infoOfert");
    ofertItems.forEach((el) => {
      el.classList.remove("animate__animated", "animate__fadeInBottomLeft");

      setTimeout(() => {
        el.classList.add("animate__animated", "animate__fadeInBottomLeft");
      }, 500);
    });
  };

  const contactAnimation = () => {
    const ofertItems = document.querySelectorAll(".tested");
    const logoItem = document.querySelector("#logoContact");

    logoItem.classList.remove("animate__rollIn", "animate__animated");
    setTimeout(
      () => logoItem.classList.add("animate__rollIn", "animate__animated"),
      500
    );

    ofertItems.forEach((el) => {
      el.classList.remove("animate__animated", "animate__jackInTheBox");
      setTimeout(() => {
        el.classList.add("animate__animated", "animate__jackInTheBox");
      }, 500);
    });
  };

  useEffect(() => {
    const el = document.querySelector(".footer");
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          document.querySelector(".ArrowUpTest").classList.add("white");
          console.log(el.classList);
        } else {
          document.querySelector(".ArrowUpTest").classList.remove("white");
        }
      });
    });

    observer.observe(el);
  });

  return (
    <>
      <label>
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
              Home
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
            <a href="#gallery" onClick={() => setCheck(false)}>
              <img
                src={`${tip}/icons/Galery.svg`}
                alt="ofert"
                className="OfertNavitest"
              />
              Galeria
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setCheck(false);
                contactAnimation();
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
