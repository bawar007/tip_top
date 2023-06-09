import { Suspense, lazy, useEffect } from "react";
import ContactPage from "./Components/ContactPage/ContactPage";

import HomePage from "./Components/HomePage/HomePage";
import Navi from "./Components/Navi/Navi";
import Ofert from "./Components/Oferta/Oferta";
import NaviMobile from "./Components/Navi/NaviMobile";
import Opinions from "./Components/Opinions/Opinions";
import Modal from "./Components/Gallery/SubComponents/Modal/Modal";
import Social from "./Components/Social/Social";
import WhyThis from "./Components/WhyThis/WhyThis";

import LogoLoadPage from "./Components/LogoLoadPage/LogoLoadPage";
import { useContext } from "react";
import { AppContext } from "./Provider/Provider";
import { ObserverSections } from "./Provider/SomeFunctions/ObserverSections";

const GalleryPage = lazy(() => import("./Components/Gallery/GalleryPage"));

function App() {
  const { windowH, windowW } = useContext(AppContext);

  ///////////////////////////////////
  ///////////OBSERVERS///////////////
  ///////////////////////////////////
  useEffect(() => {
    const homePageObserverEl = document.querySelector(".homePage");
    const contactPageObserverEl = document.querySelector(".contactPage");
    const footerObserverEl = document.querySelector(".footer");
    const infoFromOfertsEl = document.querySelectorAll(
      ".multi-container--infoBox"
    );
    const whyUsEl = document.querySelectorAll(".whyUs--item");

    ObserverSections.observe(homePageObserverEl);
    ObserverSections.observe(contactPageObserverEl);
    ObserverSections.observe(footerObserverEl);
    infoFromOfertsEl.forEach((el) => ObserverSections.observe(el));
    whyUsEl.forEach((el) => ObserverSections.observe(el));
  });
  /////////////////////////////////
  /////////////////////////////////
  /////////////////////////////////

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        {!windowW ? <LogoLoadPage /> : null}
      </Suspense>
      <HomePage />
      <GalleryPage />
      <Opinions />
      <Ofert />
      <WhyThis />
      <ContactPage />
      {windowW && windowH ? <Navi /> : <NaviMobile />}
      <Modal />
      <Social />
    </div>
  );
}

export default App;
