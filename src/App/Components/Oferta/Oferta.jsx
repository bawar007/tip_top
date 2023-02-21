import { useEffect } from "react";

import { oferts } from "./Oferts/oferts";

const Ofert = () => {
  useEffect(() => {
    const infoElements = document.querySelectorAll(".infoOfert");

    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry, index) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class
          entry.target.classList.add(
            "animate__animated",
            "animate__fadeInBottomLeft"
          );
        }
      });
    });

    infoElements.forEach((el) => observer.observe(el));
  });

  const ofertLeft = oferts
    .filter((el) => el.id <= 2)
    .map((el) => (
      <div className="infoOfert" key={el.id}>
        <h2>{el.title}</h2>
        <p>{el.text}</p>
      </div>
    ));

  const ofertRight = oferts
    .filter((el) => el.id > 2)
    .map((el) => (
      <div className="infoOfert" key={el.id}>
        <h2>{el.title}</h2>
        <p>{el.text}</p>
      </div>
    ));

  return (
    <div className="Ofert" id="ofert">
      <section className="container">
        <h1>OFERTY</h1>
        <section className="containerDouble">{ofertLeft}</section>
        <section className="containerDouble">{ofertRight}</section>
      </section>
    </div>
  );
};

export default Ofert;
