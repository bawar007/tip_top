import { useState } from "react";

const NaviMobile = () => {
  const [check, setCheck] = useState(false);
  return (
    <>
      <label>
        <input type="checkbox" checked={check} readOnly />
        <span className="menu" onClick={() => setCheck((prev) => !prev)}>
          <span className="hamburger"></span>
        </span>
        <ul>
          <li>
            <a href="/#home" onClick={() => setCheck(false)}>
              <img
                src="/icons/Home.svg"
                alt="ofert"
                className="OfertNavitest"
              />
              Home
            </a>
          </li>
          <li>
            <a href="/#ofert" onClick={() => setCheck(false)}>
              <img
                src="/icons/offert.svg"
                alt="ofert"
                className="OfertNavitest"
              />
              Oferta
            </a>
          </li>
          <li>
            <a href="/#gallery" onClick={() => setCheck(false)}>
              <img
                src="/icons/Galery.svg"
                alt="ofert"
                className="OfertNavitest"
              />
              Galeria
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={() => setCheck(false)}>
              <img
                src="/icons/Contact.svg"
                alt="ofert"
                className="OfertNavitest"
              />
              Kontakt
            </a>
          </li>
        </ul>
      </label>
      <a
        href="/#home"
        className="ArrowUpTestLink"
        onClick={() => setCheck(false)}
      >
        <img
          src="/icons/arrowcircleup.svg"
          alt="arrowUp"
          className={check ? "ArrowUpTest black" : "ArrowUpTest"}
        />
      </a>
    </>
  );
};

export default NaviMobile;
