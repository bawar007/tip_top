import React, { useState } from "react";

const GalleryPage = ({ galleryRef }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className="galleryPage" ref={galleryRef}>
      {visible && (
        <div className="focusPic">
          <button onClick={() => setVisible(false)}>X</button>
        </div>
      )}
      <div className="pics">
        <div className="pic" onClick={handleClick}>
          <p>Galeria 1</p>
        </div>
        <div className="pic">
          <p>Galeria 2</p>
        </div>
        <div className="pic">
          <p>Galeria 3</p>
        </div>
        <div className="pic"></div>
        <div className="pic"></div>
        <div className="pic"></div>
        <div className="pic"></div>
        <div className="pic"></div>
      </div>
    </div>
  );
};

export default GalleryPage;
