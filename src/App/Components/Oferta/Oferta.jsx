import { useContext, useEffect } from "react";

import { oferts } from "./Oferts/oferts";
import { AppContext } from "../../Provider/Provider";

const Ofert = () => {
  const { windowW } = useContext(AppContext);
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

  const handleClickOfert = (id) => {
    const infoOfert = document.querySelectorAll(".infoOfert");
    infoOfert.forEach((el) => {
      const ul = el.childNodes[2];
      if (el.id === id) {
        ul.style.display = "block";
        el.childNodes[3].style.display = "none";
      } else {
        ul.style.display = "none";
        el.childNodes[3].style.display = "flex";
      }
    });
  };

  const handleRestart = () => {
    const items = document.querySelectorAll(".list_Ofert");
    const itemsClose = document.querySelectorAll(".show");
    items.forEach((el) => {
      el.style.display = "none";
    });
    itemsClose.forEach((el) => (el.style.display = "flex"));
  };

  const spanElementShow = (id) => (
    <span
      className="click show"
      onClick={handleClickOfert.bind(this, `io${id}`)}
    >
      <img src="/tip_top/icons/arrowvisibility2.svg" alt="d" />
    </span>
  );

  const spanElementHidden = (
    <span className="click hover" onClick={handleRestart}>
      <img src="/tip_top/icons/arrowvisibility.svg" alt="d" />
    </span>
  );

  const ofertLeft = oferts
    .filter((el) => el.id <= 2)
    .map((el) => (
      <div className="infoOfert" key={el.id} id={`io${el.id}`}>
        <h2>{el.title}</h2>
        <p>{el.text}</p>
        <ul
          className="list_Ofert"
          style={windowW ? { display: "flex", flexDirection: "column" } : null}
        >
          {el.items.map((el) => (
            <li key={el} className="list_Ofert_item">
              {el}
            </li>
          ))}
          {!windowW && spanElementHidden}
        </ul>
        {!windowW && spanElementShow(el.id)}
      </div>
    ));

  const ofertRight = oferts
    .filter((el) => el.id > 2)
    .map((el) => (
      <div className="infoOfert" key={el.id} id={`io${el.id}`}>
        <h2>{el.title}</h2>
        <p>{el.text}</p>
        <ul
          className="list_Ofert"
          style={windowW ? { display: "flex", flexDirection: "column" } : null}
        >
          {el.items.map((el) => (
            <li key={el} className="list_Ofert_item">
              {el}
            </li>
          ))}
          {!windowW && spanElementHidden}
        </ul>
        {!windowW && spanElementShow(el.id)}
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
