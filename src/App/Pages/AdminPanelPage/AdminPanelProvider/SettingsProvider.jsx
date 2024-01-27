import { createContext, useState } from "react";

export const SettingsProviderContext = createContext(null);

const SettingsProvider = ({ children }) => {
  const [settingsFiles, setSettingsFiles] = useState({
    settingsMenuIsOpen: false,
    modaIsOpen: false,
    filesToDelete: [],
    optionsFiles: [],
    customNewFolder: "",
    folderToUpload: "",
    filesToUpload: [],
  });

  return (
    <SettingsProviderContext.Provider
      value={{
        settingsFiles,
        setSettingsFiles,
      }}
    >
      {children}
    </SettingsProviderContext.Provider>
  );
};

export default SettingsProvider;
