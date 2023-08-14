import { useContext, useState } from "react";
import ImagesGroupContent from "./ImagesGroupContent";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import { AppContext } from "../../../../../AppPage/AppPageProvider/AppPageProvider";
import useImages from "../../hooks/useImages";
import LogoItem from "../../../../../../components/LogoItem";

const ImagesGroup = () => {
  const animatedComponents = makeAnimated();

  const { HOST } = useContext(AppContext);

  const { loading, selectedFilesFromApi, error, setSelectedFilesFromApi } =
    useImages(HOST);

  const [allSelectItems, setAllSelectItems] = useState(false);

  if (loading || error) return <LogoItem />;

  const handleFilesInView = (itemsToView) => {
    const test = itemsToView.findIndex((item) => item.value === "all");

    const filesInView = itemsToView.map((file) => file.value);

    if (test !== -1) {
      setAllSelectItems(true);
    } else {
      setAllSelectItems(false);
    }

    const TableSelectedFolders = [];
    if (test !== -1) {
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
      filesInView: TableSelectedFolders,
    }));
  };

  return (
    <div className="gallerysettings-counter">
      <div className="counter-settings">
        <div className="settings-folders">
          <h3>FOLDERY:</h3>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            value={
              allSelectItems
                ? { value: "all", label: "all" }
                : selectedFilesFromApi.optionsFromFiles.value
            }
            defaultValue={selectedFilesFromApi.optionsFromFiles[1]}
            options={selectedFilesFromApi.optionsFromFiles}
            className="select-form-files"
            classNamePrefix="form-files"
            onChange={(value) => handleFilesInView(value)}
            placeholder={"Wybierz foldery"}
          />
          <img
            src="/icons/refresh.svg"
            alt="refresh"
            width="50"
            height="50"
            onClick={() => window.location.reload()}
          />
        </div>
      </div>

      <ImagesGroupContent imageMap={selectedFilesFromApi.filesInView} />
    </div>
  );
};

export default ImagesGroup;
