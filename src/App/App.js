import { useRef } from "react";

import AppProvider from "./Provider/Provider";

import ContactPage from "./Components/ContactPage/ContactPage";
import GalleryPage from "./Components/Gallery/GalleryPage";
import HomePage from "./Components/HomePage/HomePage";
import Navi from "./Components/Navi/Navi";
import Ofert from "./Components/Oferta/Oferta";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const homeRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();
  const ofertRef = useRef();
  return (
    <AppProvider>
      <div className="App">
        <HomePage homeRef={homeRef} />
        <Ofert ofertRef={ofertRef} />
        <GalleryPage galleryRef={galleryRef} />
        <ContactPage contactRef={contactRef} />
        <Navi
          homeRef={homeRef}
          galleryRef={galleryRef}
          contactRef={contactRef}
          ofertRef={ofertRef}
        />
      </div>
    </AppProvider>
  );
}

export default App;
