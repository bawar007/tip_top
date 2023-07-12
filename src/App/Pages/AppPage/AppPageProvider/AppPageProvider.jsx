import React, {
  createContext,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";

import axios from "axios";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const windowWidthFirst = useRef(window.innerWidth);
  const windowHeightFirst = useRef(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(windowWidthFirst.current);
  const [windowHeight, setWindowHeight] = useState(windowHeightFirst.current);

  const API_KEY = process.env.REACT_APP_API_KEY;

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
  const [picsFromBG, setPicsFromBG] = useState([]);

  const [allPicsFromOpinion, setAllPicsFromOpinion] = useState(false);

  const allPicGalleryPop = [...picsFromBG].filter((el) => el.id === picId);

  const handleClick = (id) => {
    setPicId(id);
    setAllPics(true);
    setPicIndex(0);
  };

  //pobieranie opinii
  const getOpinions = useCallback(async () => {
    const response = await axios.get(`${HOST}/opinions`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    setOpinions(response.data);
    if (response.error) {
      console.error(response.error);
    }
  }, [HOST, API_KEY]);
  //pobieranie użytkowników
  const getUser = useCallback(async () => {
    const response = await axios.get(`${HOST}/user`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    setPhoneNumberFromZleceniodawcy(response.data);
    if (response.error) {
      console.error(response.error);
    }
  }, [HOST, API_KEY]);

  const [opinionsFromDB, setOpinions] = useState([]);
  const [phoneNumberFromZleceniodawcy, setPhoneNumberFromZleceniodawcy] =
    useState([]);

  const getPics = useCallback(async () => {
    await axios
      .get(`${HOST}/files`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response) => {
        const files = response.data.files;
        const test = files.map((file, index) => {
          const id = index + 1;
          const first = `/${file.name}/${file.table[0]}`;
          const all = file.table.map((fileName) => `/${file.name}/${fileName}`);

          return { id, first, all };
        });
        setPicsFromBG(test);
        console.log(test);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, [API_KEY, HOST]);

  useEffect(() => {
    //pobieranie opinni i użytkowników u których były wykonywane prace
    getOpinions();
    getUser();
    getPics();
    const GetSize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setWindowWidth(w);
      setWindowHeight(h);
    };
    window.addEventListener("resize", () => GetSize());
    return window.removeEventListener("resize", () => GetSize());
  }, [getOpinions, getUser, getPics]);

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
        getUser,
        getOpinions,
        opinionsFromDB,
        phoneNumberFromZleceniodawcy,
        allPicsFromOpinion,
        setAllPicsFromOpinion,
        HOST,
        handleClickCloseGalleryModal,
        picsFromBG,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
