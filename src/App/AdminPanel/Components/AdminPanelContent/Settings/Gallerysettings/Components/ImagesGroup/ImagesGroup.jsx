import { useContext, useState } from "react";
import { SettingsProviderContext } from "../../../settingsProvider/SettingsProvider";

const ImagesGroup = () => {
  const { fileData, filesToDelete, setFilesToDelete, options } = useContext(
    SettingsProviderContext
  );

  //handlers

  const handleChangeChecbox = (e) => {
    const state = filesToDelete;
    if (e.target.checked === false) {
      const newState = state.filter((element) => {
        return !(
          element.name === e.target.name &&
          element.fileNameToDelete === e.target.id
        );
      });
      setFilesToDelete(newState);
    } else if (e.target.checked === true) {
      setFilesToDelete((prev) => [
        ...prev,
        {
          name: e.target.name,
          fileNameToDelete: e.target.id,
        },
      ]);
    }
  };

  const handleCheckBoxFromIcon = (name, id) => {
    const inputs = document.querySelectorAll(
      `input[name="${name}"][id="${id}"]`
    );
    const state = filesToDelete;
    inputs.forEach((el) => {
      if (el.checked) {
        el.checked = false;
        const newState = state.filter((element) => {
          return !(element.name === name && element.fileNameToDelete === id);
        });
        setFilesToDelete(newState);
      } else if (el.checked === false) {
        el.checked = true;
        setFilesToDelete((prev) => [
          ...prev,
          {
            name: el.name,
            fileNameToDelete: el.id,
          },
        ]);
      }
    });
  };

  const checkAllImagesFromGroup = (name) => {
    const images = document.querySelectorAll(`input[name="${name}"]`);
    images.forEach((el) => {
      setFilesToDelete((prev) => [
        ...prev,
        { name: el.name, fileNameToDelete: el.id },
      ]);
      el.checked = true;
    });
  };

  const uncheckAllImagesFromGroup = (name) => {
    const images = document.querySelectorAll(`input[name="${name}"]`);
    images.forEach((el) => {
      const newState = filesToDelete.filter((element) => {
        return element.name !== el.name && element.fileNameToDelete !== el.id;
      });
      setFilesToDelete(newState);
    });

    images.forEach((el) => (el.checked = false));
  };

  ///////////

  const imageMap = fileData
    ? fileData.files.reduce((acc, file) => {
        if (acc[file.name]) {
          acc[file.name].push(...file.table);
        } else {
          acc[file.name] = [...file.table];
        }
        return acc;
      }, {})
    : null;
  const firstTableMap = Object.entries(imageMap)
    ? Object.entries(imageMap)
    : [];
  const [TableToMap, setTableToMap] = useState(firstTableMap);

  const HandleTableToMap = (e) => {
    const selectValue = e.target.value;
    if (selectValue === "all") {
      setTableToMap(Object.entries(imageMap));
    } else {
      const newTab = Object.entries(imageMap).filter(
        ([name]) => name === selectValue
      );
      setTableToMap(newTab);
    }
  };

  const imageGroups = TableToMap
    ? TableToMap.map(([name, images]) => {
        if (images.length > 0) {
          return (
            <div
              key={name}
              className="gallerysettings-counter-images"
              style={TableToMap.length === 1 ? { maxWidth: "100%" } : null}
            >
              <h2>{name}</h2>
              <div className="butttonsImageGroup">
                <img
                  src="/icons/settings_uncheckAll.svg"
                  alt="checkAll"
                  width="40"
                  height="40"
                  onClick={(e) => {
                    e.preventDefault();
                    checkAllImagesFromGroup(name);
                  }}
                  onMouseOver={(e) => {
                    e.target.src = "/icons/settings_checkAll.svg";
                    e.target.width = 50;
                    e.target.height = 50;
                  }}
                  onMouseOut={(e) => {
                    e.target.src = "/icons/settings_uncheckAll.svg";
                    e.target.width = 40;
                    e.target.height = 40;
                  }}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    uncheckAllImagesFromGroup(name);
                  }}
                  className="ImageGroup--btn"
                >
                  odznacz
                </button>
              </div>

              {images.map((imageName) => (
                <div className="image_checkbox__group" key={imageName}>
                  <img
                    src={`http://localhost:5000/images/${name}/${imageName}`}
                    alt={imageName}
                    className="counter__image"
                    onClick={() => handleCheckBoxFromIcon(name, imageName)}
                    style={
                      TableToMap.length === 1
                        ? { width: "120px", height: "120px" }
                        : null
                    }
                  />
                  <input
                    type="checkbox"
                    name={name}
                    id={imageName}
                    onChange={handleChangeChecbox}
                  />
                </div>
              ))}
            </div>
          );
        } else return null;
      })
    : null;

  const OptionsSelectElement = options
    ? ["all", ...options].map(
        (option, index) =>
          option && (
            <option key={index} value={option}>
              {option}
            </option>
          )
      )
    : null;

  return (
    <div className="gallerysettings-counter">
      <div className="counter-settings">
        <label>
          <h3>Co chcesz wyświetlić ?</h3>
          <select onChange={HandleTableToMap}>{OptionsSelectElement}</select>
        </label>
      </div>
      <div className="counter-content">{imageGroups}</div>
    </div>
  );
};

export default ImagesGroup;
