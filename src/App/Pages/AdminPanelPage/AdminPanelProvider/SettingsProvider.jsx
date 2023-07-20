import { createContext, useState } from "react";

export const SettingsProviderContext = createContext(null);

const SettingsProvider = ({ children }) => {
  const [selectedFilesFromApi, setSelectedFilesFromApi] = useState({
    fetchFilesIsDone: false,
    fetchFilesStructure: [],
    selectedItems: [],
    optionsFromFiles: [],
    filesInView: [],
  });

  const [settingsFiles, setSettingsFiles] = useState({
    settingsMenuIsOpen: false,
    modaIsOpen: false,
    filesToDelete: [],
    optionsFiles: [],
    customNewFolder: "",
    folderToUpload: "p_01",
    filesToUpload: [],
  });

  return (
    <SettingsProviderContext.Provider
      value={{
        selectedFilesFromApi,
        setSelectedFilesFromApi,
        settingsFiles,
        setSettingsFiles,
      }}
    >
      {children}
    </SettingsProviderContext.Provider>
  );
};

export default SettingsProvider;
