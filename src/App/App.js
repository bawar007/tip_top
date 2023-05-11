import { lazy } from "react";
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

const GalleryPage = lazy(() => import("./Components/Gallery/GalleryPage"));

function App() {
  const { windowH, windowW } = useContext(AppContext);

  return (
    <div className="App">
      <HomePage />
      <GalleryPage />
      <Opinions />
      <Ofert />
      <WhyThis />
      <ContactPage />
      {windowW && windowH ? <Navi /> : <NaviMobile />}

      <Modal />
      <Social />
      <LogoLoadPage />
    </div>
  );
}

export default App;
