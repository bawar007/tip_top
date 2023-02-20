import React, { useEffect } from "react";

const ContactPage = ({ contactRef }) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // Loop over the entries
      entries.forEach((entry, index) => {
        // If the element is visible
        if (entry.isIntersecting) {
          // Add the animation class

          entry.target.classList.add("animate__rollIn", "animate__animated");
          document
            .querySelectorAll(".tested")
            .forEach((el) =>
              el.classList.add("animate__animated", "animate__jackInTheBox")
            );
        }
      });
    });
    const el = document.querySelector("#logoContact");
    observer.observe(el);
  });
  return (
    <>
      <div className="contactPage" ref={contactRef} id="contact">
        <div className="con">
          <div className="contact">
            <img
              src="/icons/LogoTipTopCss.svg"
              alt="logo"
              className="logoItem"
              id="logoContact"
            />

            <h1 className="tested">DANE KONTAKTOWE</h1>
            <ul className="tested">
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
        <footer className="footer">
          <p>Powered By Kamil Barski 2023</p>
        </footer>
      </div>
    </>
  );
};

export default ContactPage;
