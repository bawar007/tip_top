import React, { createContext, useState, useRef, useEffect } from "react";

import useGetAllPics from "../hooks/useGetAllPics";

const API_KEY = process.env.REACT_APP_API_KEY;

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const windowWidthFirst = useRef(window.innerWidth);
  const windowHeightFirst = useRef(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(windowWidthFirst.current);
  const [windowHeight, setWindowHeight] = useState(windowHeightFirst.current);

  const windowW = windowWidth > 700;
  const windowH = windowHeight > 360;

  const SERVER = "https://api.tiptopglazura.pl";
  const LOCAL = "http://localhost:3000";

  const SETHOST = 0;

  // 0 - SERVER
  // 1 - LOCALSERVER

  const HOST = SETHOST === 1 ? LOCAL : SETHOST === 0 ? SERVER : SERVER;

  const [allPics, setAllPics] = useState(false);
  const [picId, setPicId] = useState(1);
  const [picIndex, setPicIndex] = useState(0);

  const [allPicsFromOpinion, setAllPicsFromOpinion] = useState(false);

  const { data, loading } = useGetAllPics(HOST, API_KEY);
  const allPicGalleryPop =
    !loading && [...data].filter((el) => el.id === picId);

  const handleClick = (id) => {
    setPicId(id);
    setAllPics(true);
    setPicIndex(0);
  };

  //pobieranie opinii

  const GetSize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setWindowWidth(w);
    setWindowHeight(h);
  };

  useEffect(() => {
    window.addEventListener("resize", () => GetSize());
    return window.removeEventListener("resize", () => GetSize());
  }, []);

  const handleClickCloseGalleryModal = () => {
    setAllPics(false);
    setAllPicsFromOpinion(false);
  };

  return (
    <AppContext.Provider
      value={{
        windowW,
        windowWidth,
        windowH,
        setAllPics,
        allPics,
        picId,
        setPicId,
        allPicGalleryPop,
        handleClick,
        picIndex,
        setPicIndex,
        allPicsFromOpinion,
        setAllPicsFromOpinion,
        HOST,
        handleClickCloseGalleryModal,
        API_KEY,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
