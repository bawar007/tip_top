import React, { useContext } from "react";
import { AppContext } from "../../AppPageProvider/AppPageProvider";

import FirstGalleryList from "./Components/FirstGalleryList/FirstGalleryList";
import DesktopGalleryModal from "./Components/modals/PC/DesktopGalleryModal";
import MobileGalleryModal from "./Components/modals/Mobile/MobileGalleryModal";

const GalleryPage = React.memo(() => {
  const { windowW, windowH, allPics } = useContext(AppContext);

  return (
    <section
      className="galleryPage"
      id="gallery"
      data-naviitem=".Projects--NaviItem"
    >
      <h1 className="title_page">REALIZACJE</h1>
      <FirstGalleryList />
      {allPics ? (
        windowW && windowH ? (
          <DesktopGalleryModal />
        ) : (
          <MobileGalleryModal />
        )
      ) : null}
    </section>
  );
});

export default GalleryPage;
