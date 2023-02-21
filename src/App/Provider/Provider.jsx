import React, { createContext, useState, useRef } from "react";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const windowWidth = useRef(window.innerWidth);
  const windowW = windowWidth.current > 700;
  const tip = "/tip_top";

  return (
    <AppContext.Provider value={{ page, setPage, windowW, tip }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
