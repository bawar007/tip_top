import { useRef } from "react";
import ContactPage from "./Components/ContactPage/ContactPage";
import GalleryPage from "./Components/Gallery/GalleryPage";
import HomePage from "./Components/HomePage/HomePage";
import Navi from "./Components/Navi/Navi";

function App() {
  const homeRef = useRef();
  const galleryRef = useRef();
  const contactRef = useRef();
  return (
    <div className="App">
      <HomePage homeRef={homeRef} />
      <GalleryPage galleryRef={galleryRef} />
      <ContactPage contactRef={contactRef} />
      <Navi homeRef={homeRef} galleryRef={galleryRef} contactRef={contactRef} />
    </div>
  );
}

export default App;
