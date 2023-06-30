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

  //handlers
  const handleAddCustomOption = () => {
    if (customOption) {
      const tab = [...options, customOption];
      const newC = tab.sort((a, b) => {
        if (typeof a === "string" && typeof b === "string") {
          const numA = parseInt(a.split("_")[1]);
          const numB = parseInt(b.split("_")[1]);
          return numA - numB;
        } else if (typeof a === "string") {
          return -1;
        } else if (typeof b === "string") {
          return 1;
        } else {
          return 0;
        }
      });

      setOptions(newC);
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
    if (selectedFile) {
      for (let i = 0; i < selectedFile.length; i++) {
        formData.append("files", selectedFile[i]);
      }
      await axios.post(
        `${HOST}/upload?s=${fileNameForm}&api=${API_KEY}`,
        formData
      );
      setSelectedFile([]);
      await getPics();
    } else {
      alert("Nie wybrałeś plików");
      await getPics();
    }
  };

  const getPics = useCallback(async () => {
    await axios
      .get(`${HOST}/files?api=${API_KEY}`)
      .then((response) => {
        setFileData(response.data);
        const files = response.data.files;

        const tab = files.map((fileName) => {
          if (fileName.table.length !== 0) {
            return fileName.name;
          }
          return false;
        });
        const newTab = tab.sort((a, b) => {
          if (typeof a === "string" && typeof b === "string") {
            const numA = parseInt(a.split("_")[1]);
            const numB = parseInt(b.split("_")[1]);
            return numA - numB;
          } else if (typeof a === "string") {
            return -1;
          } else if (typeof b === "string") {
            return 1;
          } else {
            return 0;
          }
        });
        setOptions(newTab);
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
