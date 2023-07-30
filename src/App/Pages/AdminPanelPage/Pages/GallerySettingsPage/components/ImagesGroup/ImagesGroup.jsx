import { useContext, useEffect } from "react";
import ImagesGroupContent from "./ImagesGroupContent";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { SettingsProviderContext } from "../../../../AdminPanelProvider/SettingsProvider";
import { fetchFilesStructure } from "../../hooks/useHooksImages";
import { AppContext } from "../../../../../AppPage/AppPageProvider/AppPageProvider";

const ImagesGroup = () => {
  const animatedComponents = makeAnimated();

  const { selectedFilesFromApi, setSelectedFilesFromApi, setSettingsFiles } =
    useContext(SettingsProviderContext);
  const { HOST } = useContext(AppContext);

  const handleFilesInView = (itemsToView) => {
    const filesInView = itemsToView.map((file) => file.value);
    const itsAllFiles = filesInView.indexOf("all");

    const TableSelectedFolders = [];
    if (itsAllFiles === 0) {
      selectedFilesFromApi.fetchFilesStructure.files.forEach((item) =>
        TableSelectedFolders.push(item)
      );
    } else {
      filesInView.forEach((file) => {
        selectedFilesFromApi.fetchFilesStructure.files.filter(
          (e) => e.name === file && TableSelectedFolders.push(e)
        );
      });
    }

    setSelectedFilesFromApi((prev) => ({
      ...prev,
      selectedItems: itemsToView,
      filesInView: TableSelectedFolders,
    }));
  };

  useEffect(() => {
    fetchFilesStructure(setSelectedFilesFromApi, setSettingsFiles, HOST);
  }, [setSelectedFilesFromApi, setSettingsFiles]);

  return (
    <div className="gallerysettings-counter">
      <div className="counter-settings">
        <div className="settings-folders">
          <h3>FOLDERY:</h3>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            value={selectedFilesFromApi.optionsFromFiles.value}
            options={selectedFilesFromApi.optionsFromFiles}
            className="select-form-files"
            classNamePrefix="form-files"
            onChange={(value) => handleFilesInView(value)}
            placeholder={"Wybierz foldery"}
          />
          <img src="/icons/refresh.svg" alt="refresh" width="50" height="50" />
        </div>
      </div>
      {selectedFilesFromApi.fetchFilesIsDone && (
        <ImagesGroupContent imageMap={selectedFilesFromApi.filesInView} />
      )}
    </div>
  );
};

export default ImagesGroup;
