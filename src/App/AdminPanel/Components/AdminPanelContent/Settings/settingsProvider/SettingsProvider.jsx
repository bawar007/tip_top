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
  const [filesModal, setFilesModal] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const [TableToMap, setTableToMap] = useState([]);

  //handlers
  const handleAddCustomOption = () => {
    if (customOption) {
      const tab = [...options, { value: customOption, label: customOption }];
      const newC = tab.sort((a, b) => {
        if (typeof a.value === "string" && typeof b.value === "string") {
          const numA = parseInt(a.value.split("_")[1]);
          const numB = parseInt(b.value.split("_")[1]);
          return numA - numB;
        } else if (typeof a.value === "string") {
          return -1;
        } else if (typeof b.value === "string") {
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
    if (selectedFile.length > 0) {
      for (let i = 0; i < selectedFile.length; i++) {
        formData.append("files", selectedFile[i]);
      }
      await axios.post(`${HOST}/upload?s=${fileNameForm}`, formData, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      setSelectedFile([]);
      await getPics();
      alert("Pliki zostały dodane do serwera");
    } else {
      alert("Nie wybrałeś plików");
    }
  };

  const getPics = useCallback(async () => {
    await axios
      .get(`${HOST}/files`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response) => {
        setFileData(response.data);
        const files = response.data.files;
        const tab = files
          .filter((item) => item.table.length !== 0)
          .map((fileName) => {
            return {
              value: fileName.name,
              label: fileName.name,
            };
          });
        const newTab = [{ value: "all", label: "all" }, ...tab].sort((a, b) => {
          if (typeof a.value === "string" && typeof b.value === "string") {
            const numA = parseInt(a.value.split("_")[1]);
            const numB = parseInt(b.value.split("_")[1]);
            return numA - numB;
          } else if (typeof a.value === "string") {
            return -1;
          } else if (typeof b.value === "string") {
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
        filesModal,
        setFilesModal,
        searchItems,
        setSearchItems,
        TableToMap,
        setTableToMap,
      }}
    >
      {children}
    </SettingsProviderContext.Provider>
  );
};

export default SettingsProvider;
