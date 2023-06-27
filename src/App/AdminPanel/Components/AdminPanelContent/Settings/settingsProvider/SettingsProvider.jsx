import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import axios from "axios";
import { AppContext } from "../../../../../Provider/Provider";

export const SettingsProviderContext = createContext(null);

const SettingsProvider = ({ children }) => {
  const { HOST } = useContext(AppContext);
  //gallery state
  const [customOption, setCustomOption] = useState("");
  const [options, setOptions] = useState(null);
  const [fileNameForm, setFileName] = useState(null);
  const [filesToDelete, setFilesToDelete] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState(null);

  //handlers
  const handleAddCustomOption = () => {
    if (customOption) {
      setOptions([...options, customOption]);
      setCustomOption("");
      if (fileNameForm === null) {
        setFileName(customOption);
      }
    }
  };

  const handleFileChange = (event) => {
    const { name, value } = event.target;
    if (name === "form__file") {
      const files = Array.from(event.target.files);
      setSelectedFile(files);
    }

    if (name === "select_name_file") {
      setFileName(value);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("files", selectedFile[i]);
    }
    await axios.post(`${HOST}/upload?s=${fileNameForm}`, formData);
    setSelectedFile([]);
    await getPics();
  };

  const getPics = useCallback(async () => {
    await axios
      .get(`${HOST}/files`)
      .then((response) => {
        setFileData(response.data);
        const files = response.data.files;

        const tab = files.map((fileName) => {
          if (fileName.table.length !== 0) {
            return fileName.name;
          }
          return false;
        });
        setOptions(tab);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, [HOST]);

  useEffect(() => {
    getPics();
  }, [getPics]);

  return (
    <SettingsProviderContext.Provider
      value={{
        setCustomOption,
        setOptions,
        setFileName,
        setFilesToDelete,
        setSelectedFile,
        setFileData,
        customOption,
        options,
        fileNameForm,
        filesToDelete,
        selectedFile,
        fileData,
        handleAddCustomOption,
        handleFileChange,
        handleUpload,
        getPics,
      }}
    >
      {children}
    </SettingsProviderContext.Provider>
  );
};

export default SettingsProvider;
