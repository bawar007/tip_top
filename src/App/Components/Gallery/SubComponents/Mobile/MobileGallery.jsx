import { useContext, useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { AppContext } from "../../../../Provider/Provider";

const GalleryTest = () => {
  const { setAllPics, allPicGalleryPop } = useContext(AppContext);

  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#my-gallerytest",
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
    <div className="galleryPop">
      <span
        className="close"
        style={{ color: "black" }}
        onClick={() => setAllPics(false)}
      >
        &times;
      </span>
      <div className="pswp-gallery" id="my-gallerytest">
        <h2>Galeria projektu</h2>
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

export default GalleryTest;
