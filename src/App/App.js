import { useRef } from "react";

import AppProvider from "./Provider/Provider";

import ContactPage from "./Components/ContactPage/ContactPage";
import GalleryPage from "./Components/Gallery/GalleryPage";
import HomePage from "./Components/HomePage/HomePage";
import Navi from "./Components/Navi/Navi";
import Ofert from "./Components/Oferta/Oferta";
import Test from "./Components/Navi/Test";

function App() {
  const homeRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();
  const ofertRef = useRef();

  const winW = useRef(window.innerWidth);
  return (
    <AppProvider>
      <div className="App">
        <HomePage homeRef={homeRef} />
        <Ofert ofertRef={ofertRef} />
        <GalleryPage galleryRef={galleryRef} />
        <ContactPage contactRef={contactRef} />
        {winW.current > 700 ? <Navi /> : <Test />}
      </div>
    </AppProvider>
  );
}

export default App;
