import React, { useEffect } from "react";
import MyMap from "./subcomponents/MyMap/MyMap";

import { listContactData } from "./helper/contactData/contactData";

const ContactPage = () => {
  useEffect(() => {});

  return (
    <>
      <div className="contactPage" id="contact">
        <h1 className="title_page">KONTAKT</h1>
        <div className="con">
          <div className="contact">
            <ul className="tested">{listContactData}</ul>
          </div>
          <div className="picture">
            <MyMap />
          </div>
        </div>
        <footer className="footer">
          <p>Copyright © 2023 Tip-Top</p>
          <p>Wszelkie prawa zastrzeżone</p>
          <p>Powered By Kamil Barski</p>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
