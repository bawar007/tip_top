import { useEffect, useRef, useState } from "react";

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
  const winWF = useRef(window.innerWidth);
  const winHF = useRef(window.innerHeight);

  const [winH, setWinH] = useState(winHF.current);
  const [winW, setWinW] = useState(winWF.current);

  useEffect(() => {
    const GetSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setWinW(w);
      setWinH(h);
    };
    window.addEventListener("resize", () => GetSize());
    return window.removeEventListener("resize", () => GetSize());
  }, []);

  return (
    <AppProvider>
      <div className="App">
        <HomePage />
        <GalleryPage />
        <Opinions />
        <Ofert />
        <ContactPage />
        {winW > 700 && winH > 370 ? <Navi /> : <NaviMobile />}
        <Modal />
        <Social />
      </div>
    </AppProvider>
  );
}

export default App;
