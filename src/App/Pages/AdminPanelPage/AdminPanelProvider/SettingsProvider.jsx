import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { AppContext } from "../../AppPage/AppPageProvider/AppPageProvider";
import { handleUpload, getPics, handleAddCustomOption } from "./Handlers";

export const SettingsProviderContext = createContext(null);

const API_KEY = process.env.REACT_APP_API_KEY;

const SettingsProvider = ({ children }) => {
  const { HOST } = useContext(AppContext);
  //gallery state
  const [customOption, setCustomOption] = useState("");
  const [options, setOptions] = useState([]);
  const [fileNameForm, setFileName] = useState(null);
  const [filesToDelete, setFilesToDelete] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const [filesModal, setFilesModal] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [TableToMap, setTableToMap] = useState([]);

  const handlerAddCustomOptions = () =>
    handleAddCustomOption(
      customOption,
      options,
      setOptions,
      setCustomOption,
      fileNameForm,
      setFileName
    );

  const handleFileChange = (event) => {
    const { name } = event.target;
    if (name === "form__file") {
      const files = Array.from(event.target.files);
      setSelectedFile(files);
    }
  };

  const handlerUpload = async (e) =>
    handleUpload(
      e,
      selectedFile,
      fileNameForm,
      HOST,
      API_KEY,
      setSelectedFile,
      handleGetPics
    );

  const handleGetPics = useCallback(
    () => getPics(HOST, API_KEY, setFileData, setOptions),
    [HOST]
  );

  useEffect(() => {
    handleGetPics();
  }, [handleGetPics]);

  return (
    <SettingsProviderContext.Provider
      value={{
        setCustomOption,
        customOption,
        setOptions,
        options,
        setFileName,
        fileNameForm,
        setFilesToDelete,
        filesToDelete,
        setSelectedFile,
        selectedFile,
        setFileData,
        fileData,
        setFilesModal,
        filesModal,
        setSearchItems,
        searchItems,
        setTableToMap,
        TableToMap,

        handlerAddCustomOptions,
        handleFileChange,
        handlerUpload,
        handleGetPics,
      }}
    >
      {children}
    </SettingsProviderContext.Provider>
  );
};

export default SettingsProvider;
