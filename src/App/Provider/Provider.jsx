import React, { createContext, useState, useRef, useEffect } from "react";

import { images } from "../Components/Gallery/data/image-data";

import axios from "axios";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const windowWidthFirst = useRef(window.innerWidth);
  const windowHeightFirst = useRef(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(windowWidthFirst.current);
  const [windowHeight, setWindowHeight] = useState(windowHeightFirst.current);

  const windowW = windowWidth > 700;
  const windowH = windowHeight > 370;
  const tip = "/tip_top";

  const [allPics, setAllPics] = useState(false);
  const [picId, setPicId] = useState(1);
  const [picIndex, setPicIndex] = useState(0);

  const [allPicsFromOpinion, setAllPicsFromOpinion] = useState(false);

  const allPicGalleryPop = [...images].filter((el) => el.id === picId);

  const handleClick = (id) => {
    setPicId(id);
    setAllPics(true);
    setPicIndex(0);
  };

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/opinions");
    setOpinions(response.data);
  };

  const getUser = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setPhoneNumber(response.data);
  };

  const [opinionsEl, setOpinions] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);

  useEffect(() => {
    getUser();
    getUsers();
    const GetSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setWindowWidth(w);
      setWindowHeight(h);
    };
    window.addEventListener("resize", () => GetSize());
    return window.removeEventListener("resize", () => GetSize());
  }, []);

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
        getUser,
        getUsers,
        opinionsEl,
        phoneNumber,
        allPicsFromOpinion,
        setAllPicsFromOpinion,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
