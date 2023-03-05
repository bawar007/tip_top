import { useRef } from "react";

import AppProvider from "./Provider/Provider";

import ContactPage from "./Components/ContactPage/ContactPage";
import GalleryPage from "./Components/Gallery/GalleryPage";
import HomePage from "./Components/HomePage/HomePage";
import Navi from "./Components/Navi/Navi";
import Ofert from "./Components/Oferta/Oferta";
import NaviMobile from "./Components/Navi/NaviMobile";
import Opinions from "./Components/Opinions/Opinions";
import Modal from "./Components/Gallery/SubComponents/Modal/Modal";
import Social from "./Components/Social/Social";

function App() {
  const winW = useRef(window.innerWidth);
  const winH = useRef(window.innerHeight);
  return (
    <AppProvider>
      <div className="App">
        <HomePage />
        <GalleryPage />
        <Opinions />
        <Ofert />
        <ContactPage />
        {winW.current > 700 && winH.current > 370 ? <Navi /> : <NaviMobile />}
        <Modal />
        <Social />
      </div>
    </AppProvider>
  );
}

export default App;
