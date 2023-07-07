import { Suspense, lazy, useEffect, useContext } from "react";

import ContactPage from "./Pages/AppPage/Pages/ContactPage/ContactPage";
import HomePage from "./Pages/AppPage/Pages/HomePage/HomePage";
import Ofert from "./Pages/AppPage/Pages/OfertPage/Oferta";
import WhyThis from "./Pages/AppPage/Pages/WhyUsPage/WhyThis";

// import Navi from "./Pages/AppPage/components/Navi/Navi";
// import NaviMobile from "./Pages/AppPage/components/Navi/NaviMobile";
import Social from "./Pages/AppPage/components/Social/Social";
import LogoLoadPage from "./Pages/AppPage/components/LogoLoad/LogoLoadPage";

import Modal from "./Pages/AppPage/Pages/GalleryPage/SubComponents/Modal/Modal";

import { AppContext } from "./Pages/AppPage/AppPageProvider/AppPageProvider";
import { ObserverSections } from "./Pages/AppPage/AppPageProvider/hooks/ObserverSections";
import TestResponsiveNavi from "./Pages/AppPage/components/Navi/_test_/_test_Navi";

const GalleryPage = lazy(() =>
  import("./Pages/AppPage/Pages/GalleryPage/GalleryPage")
);

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
        {/* {!windowW ? <LogoLoadPage /> : null} */}
      </Suspense>
      <HomePage />
      <GalleryPage />
      {/* <Opinions /> */}
      <Ofert />
      <WhyThis />
      <ContactPage />
      {/* {windowW && windowH ? <Navi /> : <NaviMobile />} */}
      <TestResponsiveNavi />
      <Modal />
      <Social />
    </div>
  );
}

export default App;
