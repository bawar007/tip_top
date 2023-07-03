import { useContext } from "react";
import { SettingsProviderContext } from "../../../../AdminPanelProvider/SettingsProvider";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  HandleTableToMap,
  testHandler,
} from "./Components/ImageCheckboxGroup/Handlers/ImageCheckboxHandlers";
import ImageGroup from "./Components/ImageGroup/ImageGroup";

const ImagesGroup = () => {
  const { options, setSearchItems, setTableToMap, fileData, searchItems } =
    useContext(SettingsProviderContext);

  const animatedComponents = makeAnimated();
  const imageMap = testHandler(fileData);

  return (
    <div className="gallerysettings-counter">
      <div className="counter-settings">
        <div className="settings-folders">
          <h3>FOLDERY:</h3>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
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
      <ImageGroup />
    </div>
  );
};

export default ImagesGroup;
