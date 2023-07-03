import axios from "axios";

export const handleUpload = async (
  e,
  selectedFile,
  fileNameForm,
  HOST,
  API_KEY,
  setSelectedFile,
  handleGetPics
) => {
  e.preventDefault();
  let formData = new FormData();
  if (selectedFile && selectedFile.length > 0) {
    for (let i = 0; i < selectedFile.length; i++) {
      formData.append("files", selectedFile[i]);
    }
    await axios.post(`${HOST}/upload?s=${fileNameForm}`, formData, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    setSelectedFile([]);
    await handleGetPics();
    alert("Pliki zostały dodane do serwera");
  } else {
    alert("Nie wybrałeś plików");
  }
};

export const getPics = async (HOST, API_KEY, setFileData, setOptions) => {
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
};

export const handleAddCustomOption = (
  customOption,
  options,
  setOptions,
  setCustomOption,
  fileNameForm,
  setFileName
) => {
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
