import { useContext } from "react";
import { SettingsProviderContext } from "../../../settingsProvider/SettingsProvider";
import Select from "react-select";
import ButtonsImageGroup from "./Components/ButtonsImageGroup/ButtonsImageGroup";
import ImageCheckboxGroup from "./Components/ImageCheckboxGroup/ImageCheckboxGroup";
import {
  HandleTableToMap,
  testHandler,
} from "./Components/ImageCheckboxGroup/Handlers/ImageCheckboxHandlers";

const ImagesGroup = () => {
  const {
    options,
    setSearchItems,
    TableToMap,
    setTableToMap,
    fileData,
    searchItems,
  } = useContext(SettingsProviderContext);

  const imageMap = testHandler(fileData);
  const firstTable = TableToMap ? TableToMap : Object.entries(imageMap);

  const imageGroups = firstTable.map(([name, images]) => {
    if (images && images.length > 0) {
      return (
        <div
          key={name}
          className="gallerysettings-counter-images"
          style={firstTable.length === 1 ? { maxWidth: "100%" } : null}
        >
          <h2>{name}</h2>

          <ButtonsImageGroup name={name} />

          {images.map((imageName) => (
            <ImageCheckboxGroup
              imageName={imageName}
              name={name}
              TableToMap={firstTable}
              key={imageName}
            />
          ))}
        </div>
      );
    } else return null;
  });

  return (
    <div className="gallerysettings-counter">
      <div className="counter-settings">
        <div className="settings-folders">
          <h3>FOLDERY:</h3>
          <Select
            isMulti
            value={options.value}
            options={options}
            className="select-form-files"
            classNamePrefix="form-files"
            onChange={(value) =>
              HandleTableToMap(value, imageMap, setTableToMap, setSearchItems)
            }
            placeholder={"Wybierz foldery"}
          />
          <img
            src="/icons/refresh.svg"
            alt="refresh"
            width="50"
            height="50"
            onClick={() =>
              HandleTableToMap(
                searchItems,
                imageMap,
                setTableToMap,
                setSearchItems
              )
            }
          />
        </div>
      </div>
      <div className="counter-content">{imageGroups}</div>
    </div>
  );
};

export default ImagesGroup;
