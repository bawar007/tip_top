const TestResponsiveNavi = () => {
  return (
    <div className="testResponsiveMenu">
      <input type="checkbox" id="menu-toggle" />
      <label htmlFor="menu-toggle" className="menuToggle">
        <span className="navicon"></span>
      </label>
      <div className="menu-content">
        <ul className="testMenu">
          <li>
            <a href="#home" className="Home--NaviItem">
              <img
                src="/icons/Home.svg"
                alt="home"
                className="HomeNavi--logo activeNaviLogo"
              />
            </a>
            <span className="tool">Strona Główna</span>
          </li>
          <li>
            <a href="#gallery" className="Projects--NaviItem">
              <img
                src="/icons/projects.svg"
                alt="ofert"
                className="OfertNavitest realizations"
                width="40"
                height="40"
              />
            </a>
            <span className="tool">Realizacje</span>
          </li>

          {/* <li>
              <a href="#opinions" className="Opinions-NaviItem">
                <img
                  src="/icons/medalstar.svg"
                  alt="opinion"
                  className="OfertNavitest realizations"
                  width="40"
                  height="40"
                />
              </a>
              <span className="tool">Opinie</span>
            </li> */}
          <li>
            <a href="#ofert" className="Ofert-NaviItem">
              <img
                src="/icons/offert.svg"
                alt="ofert"
                className="OfertNavi"
                width="40"
                height="40"
              />
            </a>
            <span className="tool">OFERTA</span>
          </li>
          <li>
            <a href="#whyUs" className="WhyUs-NaviItem">
              <img
                src="/icons/whyus.svg"
                alt="ofert"
                className="OfertNavi realizations"
                width="40"
                height="40"
              />
            </a>
            <span className="tool">Dlaczego My?</span>
          </li>
          <li>
            <a href="#contact" className="Contact-NaviItem">
              <img
                src="/icons/Contact.svg"
                alt="contact"
                className="Contact"
                width="40"
                height="40"
              />
            </a>
            <span className="tool">KONTAKT</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TestResponsiveNavi;
