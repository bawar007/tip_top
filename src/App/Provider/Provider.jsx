import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

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
  const windowH = windowHeight > 360;
  const tip = "/tip_top";

  const SERVER = "https://tip-top-backend.onrender.com";
  const LOCAL = "http://localhost:5000";

  const SETHOST = 0;

  // 0 - SERVER
  // 1 - LOCALSERVER

  const HOST = SETHOST === 1 ? LOCAL : SETHOST === 0 ? SERVER : SERVER;

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

  const getOpinions = useCallback(async () => {
    const response = await axios.get(`${HOST}/opinions`);
    setOpinions(response.data);
    if (response.error) {
      console.error(response.error);
    }
  }, [HOST]);

  const getUser = useCallback(async () => {
    const response = await axios.get(`${HOST}/user`);
    setPhoneNumberFromZleceniodawcy(response.data);
    if (response.error) {
      console.error(response.error);
    }
  }, [HOST]);

  const [opinionsEl, setOpinions] = useState([]);
  const [phoneNumberFromZleceniodawcy, setPhoneNumberFromZleceniodawcy] =
    useState([]);

  useEffect(() => {
    getOpinions();
    getUser();
    const GetSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setWindowWidth(w);
      setWindowHeight(h);
    };
    window.addEventListener("resize", () => GetSize());
    return window.removeEventListener("resize", () => GetSize());
  }, [getOpinions, getUser]);

  const handleClickCloseGalleryModal = () => {
    setAllPics(false);
    setAllPicsFromOpinion(false);
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
        getUser,
        getOpinions,
        opinionsEl,
        phoneNumberFromZleceniodawcy,
        allPicsFromOpinion,
        setAllPicsFromOpinion,
        HOST,
        handleClickCloseGalleryModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
