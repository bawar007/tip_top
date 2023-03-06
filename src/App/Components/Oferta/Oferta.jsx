import { useContext, useEffect } from "react";

import OfertsMobile from "./Oferts/Mobile/OfertsMobile";
import OfertsDesktop from "./Oferts/Desktop/OfertsDesktop";

import { AppContext } from "../../Provider/Provider";

const Ofert = () => {
  const { windowW } = useContext(AppContext);

  useEffect(() => {
    const infoElements = document.querySelectorAll(".infoOfert");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInBottomLeft"
          );
        }
      });
    });
    infoElements.forEach((el) => observer.observe(el));
  });

  return (
    <div className="Ofert" id="ofert">
      <h1 className="title_page">OFERTY</h1>
      <section className="container">
        {windowW ? <OfertsDesktop /> : <OfertsMobile />}
      </section>
    </div>
  );
};

export default Ofert;
