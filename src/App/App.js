import { lazy, useEffect } from "react";

import ContactPage from "./Pages/AppPage/Pages/ContactPage/ContactPage";
import HomePage from "./Pages/AppPage/Pages/HomePage/HomePage";
import Ofert from "./Pages/AppPage/Pages/OfertPage/Oferta";
import Opinions from "./Pages/AppPage/Pages/OpinionsPage/Opinions";
import WhyThis from "./Pages/AppPage/Pages/WhyUsPage/WhyThis";
import Social from "./Pages/AppPage/components/Social/Social";

import Modal from "./Pages/AppPage/Pages/GalleryPage/SubComponents/Modal/Modal";
import { ObserverSections } from "./Pages/AppPage/AppPageProvider/helpers/ObserverSections";
import Navi from "./Pages/AppPage/components/Navi/Navi";

const GalleryPage = lazy(() =>
  import("./Pages/AppPage/Pages/GalleryPage/GalleryPage")
);

function App() {
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
      <HomePage />
      <GalleryPage />
      <Opinions />
      <Ofert />
      <WhyThis />
      <ContactPage />
      <Navi />
      <Modal />
      <Social />
    </div>
  );
}

export default App;
