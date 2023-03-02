import React, { createContext, useState, useRef } from "react";

import { images } from "../Components/Gallery/data/image-data";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const windowWidth = useRef(window.innerWidth);
  const windowHeight = useRef(window.innerHeight);
  const windowW = windowWidth.current > 700;
  const windowH = windowHeight.current > 370;
  const tip = "/tip_top";

  const [allPics, setAllPics] = useState(false);
  const [picId, setPicId] = useState(1);
  const [picIndex, setPicIndex] = useState(0);

  const allPicGalleryPop = [...images].filter((el) => el.id === picId);

  const handleClick = (id) => {
    setPicId(id);
    setAllPics(true);
    setPicIndex(0);
  };

  return (
    <AppContext.Provider
      value={{
        page,
        setPage,
        windowW,
        windowH,
        tip,
        setAllPics,
        allPics,
        picId,
        setPicId,
        allPicGalleryPop,
        handleClick,
        picIndex,
        setPicIndex,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
