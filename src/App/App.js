import ContactPage from "./pages/ContactPage/ContactPage";
import HomePage from "./pages/HomePage/HomePage";
import Ofert from "./pages/OfertPage/Oferta";
import WhyThis from "./pages/WhyUsPage/WhyThis";

import { Route, Routes } from "react-router";
import MainLayout from "./Layouts/MainLayout";

import GalleryPage from "./pages/GalleryPage/GalleryPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <WhyThis />
            </>
          }
        />
        <Route path="contact" element={<ContactPage />} />
        <Route path="ofert" element={<Ofert />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
