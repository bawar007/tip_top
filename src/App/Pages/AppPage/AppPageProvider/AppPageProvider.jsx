import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

import { getUserFromApi, getOpinionsFromApi } from "./helpers/ApiHooks";
import useGetAllPics from "../hooks/useGetAllPics";

const API_KEY = process.env.REACT_APP_API_KEY;

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const windowWidthFirst = useRef(window.innerWidth);
  const windowHeightFirst = useRef(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(windowWidthFirst.current);
  const [windowHeight, setWindowHeight] = useState(windowHeightFirst.current);

  const windowW = windowWidth > 700;
  const windowH = windowHeight > 360;

  const SERVER = "https://tip-top-backend-worker.onrender.com";
  const LOCAL = "http://localhost:5000";

  const SETHOST = 1;

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
  const getUserFromMyApi = useCallback(
    async () => getUserFromApi(setPhoneNumberFromZleceniodawcy),
    []
  );

  const [opinionsFromDB, setOpinions] = useState([]);
  const [phoneNumberFromZleceniodawcy, setPhoneNumberFromZleceniodawcy] =
    useState([]);

  const getOpinionsFromMyApi = useCallback(
    async () => await getOpinionsFromApi(setOpinions),
    []
  );

  const GetSize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    setWindowWidth(w);
    setWindowHeight(h);
  };

  useEffect(() => {
    //pobieranie opinni i użytkowników u których były wykonywane prace
    getOpinionsFromMyApi();
    getUserFromMyApi();

    window.addEventListener("resize", () => GetSize());
    return window.removeEventListener("resize", () => GetSize());
  }, [getOpinionsFromMyApi, getUserFromMyApi]);

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
        setAllPics,
        allPics,
        picId,
        setPicId,
        allPicGalleryPop,
        handleClick,
        picIndex,
        setPicIndex,
        getOpinionsFromMyApi,
        opinionsFromDB,
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
