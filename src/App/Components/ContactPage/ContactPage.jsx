import React from "react";

const ContactPage = ({ contactRef }) => {
  return (
    <>
      <div className="contactPage" ref={contactRef} id="contact">
        <div className="con">
          <div className="contact">
            <img
              src="/icons/LogoTipTopCss.svg"
              alt="logo"
              className="logoItem"
            />

            <h1>DANE KONTAKTOWE</h1>
            <ul>
              <li>
                Właściciel: <span>Artur Barski</span>
              </li>
              <li>
                Mail: <span>tiptopglazura@gmail.com</span>
              </li>
              <li>
                Nr. tel.: <span>508-531-655</span>
              </li>
              <li>
                Adres: <span>Kowalewko, 06-445 Strzegowo</span>
              </li>
            </ul>
          </div>
          <div className="picture">
            <img src="/gallery/budowlaniec.jpg" alt="" />
          </div>
        </div>
        <footer>
          <p>Powered By Kamil Barski 2023</p>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
