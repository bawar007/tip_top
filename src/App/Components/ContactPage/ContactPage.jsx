import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Provider/Provider";
import MyMap from "./MyMap";

import { observer } from "./helper/observer";
import { contactData } from "./helper/contactData";

const ContactPage = () => {
  const { tip, windowW } = useContext(AppContext);

  useEffect(() => {
    const el = document.querySelector(".contact");
    if (el) {
      observer.observe(el);
    }
  });

  const listContactData = contactData.map((item) => (
    <li key={item.id}>
      <img
        src={`${tip}${item.imgSrc}`}
        className="OfertNavitest"
        alt={item.td}
      />
      <span>{item.text}</span>
    </li>
  ));

  return (
    <>
      <div className="contactPage" id="contact">
        <div className="con">
          <div className="contact">
            <h1 className="tested">DANE KONTAKTOWE</h1>

            <ul className="tested">
              {!windowW && (
                <img
                  src={`${tip}/icons/LogoTipTopCss.svg`}
                  alt="logo"
                  className="logoItem"
                  id="logoContact"
                />
              )}
              <div className="logoI logoTest"></div>
              <div className="logoII logoTest"></div>
              <div className="logoIII logoTest"></div>
              <div className="logoIIII logoTest"></div>
              {listContactData}
            </ul>
          </div>
          <div className="picture">
            <div id="map">
              <MyMap />
            </div>
          </div>
        </div>
        <footer className="footer">
          <p>Powered By Kamil Barski 2023</p>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
