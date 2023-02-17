import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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
      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} />
    </div>
  );
};

export default GalleryPicture;
