import React, { useContext } from "react";
import { AppContext } from "../../provider/AppProvider";

import DesktopGalleryModal from "../../components/modals/PC/DesktopGalleryModal";
import MobileGalleryModal from "../../components/modals/Mobile/MobileGalleryModal";
import FirstGalleryList from "../../components/FirstGalleryList/FirstGalleryList";

import "./GalleryPage.scss";

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
