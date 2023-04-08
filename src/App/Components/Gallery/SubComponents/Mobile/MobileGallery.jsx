import { useContext, useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { AppContext } from "../../../../Provider/Provider";

const MobileGallery = () => {
  const { setAllPics, allPicGalleryPop, setAllPicsFromOpinion } =
    useContext(AppContext);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-galleryMobile",
      children: "a",
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
      <span
        className="close"
        onClick={() => {
          setAllPics(false);
          setAllPicsFromOpinion(false);
        }}
      >
        &times;
      </span>
      <div className="pswp-gallery" id="my-galleryMobile">
        {allPicGalleryPop[0].all.map((image, index) => (
          <a
            href={`/tip_top/${image}`}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={`/tip_top/${image}`} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;
