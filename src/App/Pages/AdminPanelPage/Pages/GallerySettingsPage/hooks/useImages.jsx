import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { SettingsProviderContext } from "../../../AdminPanelProvider/SettingsProvider";

const API_KEY = process.env.REACT_APP_API_KEY;

const useImages = (HOST) => {
  const { setSettingsFiles } = useContext(SettingsProviderContext);

  const [selectedFilesFromApi, setSelectedFilesFromApi] = useState({
    fetchFilesStructure: [],
    optionsFromFiles: [],
    filesInView: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sortItems = (files) => {
    const filesToSort = files.files
      .filter((item) => item.table.length !== 0)
      .map((fileName) => {
        return {
          value: fileName.name,
          label: fileName.name,
        };
      });
    const optionsFromFilesSort = [
      { value: "all", label: "all" },
      ...filesToSort,
    ].sort((a, b) => {
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

    return { optionsFromFilesSort };
  };

  useEffect(() => {
    const fetchFilesStructure = async () => {
      setLoading(true);
      await axios
        .get(`${HOST}/files`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Cache-Control": "no-cache",
          },
        })
        .then((response) => {
          const files = response.data;

          const firstVisibleItems = files.files.filter(
            (e) => e.name === "p_01"
          );
          setSelectedFilesFromApi((prev) => ({
            ...prev,
            fetchFilesStructure: files,
            filesInView: firstVisibleItems,
          }));

          const { optionsFromFilesSort } = sortItems(files);

          setSelectedFilesFromApi((prev) => ({
            ...prev,
            optionsFromFiles: optionsFromFilesSort,
          }));

          const settingsOptions = optionsFromFilesSort.filter(
            (item) => item.value !== "all"
          );
          setSettingsFiles((prev) => ({
            ...prev,
            optionsFiles: settingsOptions,
          }));
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    };
    fetchFilesStructure();
  }, [HOST, setSettingsFiles]);

  return { loading, error, selectedFilesFromApi, setSelectedFilesFromApi };
};

export default useImages;
