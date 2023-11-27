import { lazy, useEffect } from "react";

import ContactPage from "./Pages/AppPage/Pages/ContactPage/ContactPage";
import HomePage from "./Pages/AppPage/Pages/HomePage/HomePage";
import Ofert from "./Pages/AppPage/Pages/OfertPage/Oferta";
import Opinions from "./Pages/AppPage/Pages/OpinionsPage/Opinions";
import WhyThis from "./Pages/AppPage/Pages/WhyUsPage/WhyThis";
import Social from "./Pages/AppPage/components/Social/Social";

import Modal from "./Pages/AppPage/Pages/GalleryPage/Components/modals/PC/Modal/Modal";

import { ObserverSections } from "./Pages/AppPage/helpers/ObserverSections";
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
    ObserverSections.observe(homePageObserverEl);

    const contactPageObserverEl = document.querySelector(".contactPage");
    ObserverSections.observe(contactPageObserverEl);

    const footerObserverEl = document.querySelector(".footer");
    ObserverSections.observe(footerObserverEl);

    const infoFromOfertsEl = document.querySelectorAll(
      ".multi-container--infoBox"
    );
    infoFromOfertsEl.forEach((el) => ObserverSections.observe(el));

    const whyUsEl = document.querySelectorAll(".whyUs--item");
    whyUsEl.forEach((el) => ObserverSections.observe(el));
  });
  /////////////////////////////////
  /////////////////////////////////
  /////////////////////////////////

  return (
    <div className="App">
      <HomePage />
      <WhyThis />
      <GalleryPage />
      <Ofert />
      <Opinions />
      <ContactPage />
      <Navi />
      <Modal />
      <Social />
    </div>
  );
}

export default App;
