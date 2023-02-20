import { useEffect } from "react";

const Ofert = ({ ofertRef }) => {
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

  return (
    <div className="Ofert" ref={ofertRef} id="ofert">
      <section className="container">
        <section className="containerDouble">
          <div className="infoOfert">
            <h1>Oferta 1</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              laudantium deserunt fuga possimus nostrum, doloremque commodi
              cupiditate eum perferendis. Nihil atque laudantium quos ipsum
              possimus id tempore animi. Expedita, veritatis!
            </p>
          </div>
          <div className="infoOfert" /*data-aos="fade-up-left"*/>
            <h1>Oferta 2</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              laudantium deserunt fuga possimus nostrum, doloremque commodi
              cupiditate eum perferendis. Nihil atque laudantium quos ipsum
              possimus id tempore animi. Expedita, veritatis!
            </p>
          </div>
        </section>
        <section className="containerDouble">
          <div className="infoOfert" /*data-aos="fade-up-right"*/>
            <h1>Oferta 3</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              laudantium deserunt fuga possimus nostrum, doloremque commodi
              cupiditate eum perferendis. Nihil atque laudantium quos ipsum
              possimus id tempore animi. Expedita, veritatis!
            </p>
          </div>
          <div className="infoOfert" /*data-aos="fade-up-left"}*/>
            <h1>Oferta 4</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              laudantium deserunt fuga possimus nostrum, doloremque commodi
              cupiditate eum perferendis. Nihil atque laudantium quos ipsum
              possimus id tempore animi. Expedita, veritatis!
            </p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Ofert;
