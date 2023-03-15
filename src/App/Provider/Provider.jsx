import React, { createContext, useState, useRef, useEffect } from "react";

import { images } from "../Components/Gallery/data/image-data";

import axios from "axios";

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
