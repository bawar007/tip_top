import "animate.css";

const Ofert = ({ ofertRef }) => {
  return (
    <div className="Ofert" ref={ofertRef} id="ofert">
      <section className="container">
        <section className="containerDouble">
          <div className="infoOfert animate__animated animate__fadeInTopLeft">
            <h1>Oferta 1</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias
              laudantium deserunt fuga possimus nostrum, doloremque commodi
              cupiditate eum perferendis. Nihil atque laudantium quos ipsum
              possimus id tempore animi. Expedita, veritatis!
            </p>
          </div>
          <div
            className="infoOfert animate__animated animate__fadeInTopLeft" /*data-aos="fade-up-left"*/
          >
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
