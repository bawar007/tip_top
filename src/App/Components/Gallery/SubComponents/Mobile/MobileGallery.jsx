import { useContext, useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { AppContext } from "../../../../Provider/Provider";

const MobileGallery = () => {
  const { allPicGalleryPop, handleClickCloseGalleryModal } =
    useContext(AppContext);

  const GalleryMobilePics = allPicGalleryPop[0].all.map((image, index) => (
    <a href={`/tip_top/${image}`} key={index} target="_blank" rel="noreferrer">
      <img src={`/tip_top/${image}`} alt={image} height="155" width="150" />
    </a>
  ));

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-galleryMobile",
      children: "a",
      loop: false,
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  });

  return (
    <div className="Mobile_Gallery--Pop">
      <span className="close" onClick={handleClickCloseGalleryModal}>
        &times;
      </span>
      <div className="pswp-gallery" id="my-galleryMobile">
        {GalleryMobilePics}
      </div>
    </div>
  );
};

export default MobileGallery;
