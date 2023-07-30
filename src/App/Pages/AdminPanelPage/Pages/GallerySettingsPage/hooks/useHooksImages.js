import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchFilesStructure = async (
  setSelectedFilesFromApi,
  setSettingsFiles,
  HOST
) => {
  await axios
    .get(`${HOST}/files`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    })
    .then((response) => {
      const files = response.data;
      setSelectedFilesFromApi((prev) => ({
        ...prev,
        fetchFilesStructure: files,
      }));
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
    .finally(() => {
      setSelectedFilesFromApi((prev) => ({
        ...prev,
        fetchFilesIsDone: true,
      }));
    });
};
