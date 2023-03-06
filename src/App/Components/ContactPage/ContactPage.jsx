import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Provider/Provider";
import MyMap from "./MyMap";

import { observer } from "./helper/observer";
import { contactData } from "./helper/contactData";

const ContactPage = () => {
  const { tip } = useContext(AppContext);

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
        <h1 className="title_page">DANE KONTAKTOWE</h1>
        <div className="con">
          <div className="contact">
            <ul className="tested">{listContactData}</ul>
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
