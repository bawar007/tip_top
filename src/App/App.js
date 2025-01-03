import { lazy, useEffect } from "react";

import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import Ofert from "./pages/OfertPage/Oferta";
import WhyThis from "./pages/WhyUsPage/WhyThis";
import Social from "./components/Social/Social";

import { ObserverSections } from "./helpers/ObserverSections";
import Navi from "./components/Navi/Navi";

const GalleryPage = lazy(() => import("./pages/GalleryPage/GalleryPage"));

function App() {
  ///////////////////////////////////
  ///////////OBSERVERS///////////////
  ///////////////////////////////////

  useEffect(() => {
    function handleIntersection(entries, observer) {
      const AppSection = document.querySelector(".App");
      entries.forEach((entry) => {
        if (entry.intersectionRatio < 0.4) {
        } else {
        }
      });
    }

    // Utwórz nowy obiekt Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0.6, 0.5, 0.4], // Określa procent widoczności, który wywoła funkcję obsługi
    });

    // Rozpocznij obserwację elementu
    const sekcjaElement = document.querySelector(".homePage");
    observer.observe(sekcjaElement);

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
      <ContactPage />
      <Navi />
      <Social />
    </div>
  );
}

export default App;
