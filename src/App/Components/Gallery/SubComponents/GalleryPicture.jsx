import { useEffect, useRef } from "react";

const GalleryPicture = ({ src, id }) => {
  const picRef = useRef();
  useEffect(() => {
    if (picRef.current.id === "pic2") {
      picRef.current.classList.add("activePic");
    }
  });
  return (
    <div className="gallery_pic">
      <img
        src={`/gallery/pic_${src}.jpg`}
        alt={`pic_${src}`}
        className="pic"
        ref={picRef}
        id={id}
      />
    </div>
  );
};

export default GalleryPicture;
