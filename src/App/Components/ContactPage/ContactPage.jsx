import React, { useEffect } from "react";
import MyMap from "./subcomponents/MyMap/MyMap";

import { listContactData } from "./helper/contactData/contactData";

const ContactPage = () => {
  useEffect(() => {});

  return (
    <>
      <div className="contactPage" id="contact">
        <h1 className="title_page">DANE KONTAKTOWE</h1>
        <div className="con">
          <div className="contact">
            <ul className="tested">{listContactData}</ul>
          </div>
          <div className="picture">
            <MyMap />
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
