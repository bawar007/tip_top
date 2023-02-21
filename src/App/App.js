import { useRef } from "react";

import AppProvider from "./Provider/Provider";

import ContactPage from "./Components/ContactPage/ContactPage";
import GalleryPage from "./Components/Gallery/GalleryPage";
import HomePage from "./Components/HomePage/HomePage";
import Navi from "./Components/Navi/Navi";
import Ofert from "./Components/Oferta/Oferta";
import NaviMobile from "./Components/Navi/NaviMobile";

function App() {
  const winW = useRef(window.innerWidth);
  return (
    <AppProvider>
      <div className="App">
        <HomePage />
        <Ofert />
        <GalleryPage />
        <ContactPage />
        {winW.current > 700 ? <Navi /> : <NaviMobile />}
      </div>
    </AppProvider>
  );
}

export default App;
