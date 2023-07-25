import { useContext } from "react";

import { SettingsProviderContext } from "../../../../AdminPanelProvider/SettingsProvider";

const TestImagesGroup = ({ imageMap }) => {
  const {  settingsFiles, setSettingsFiles } = useContext(
    SettingsProviderContext
  );

  const handleChangeChecbox = (e) => {
    const state = settingsFiles.filesToDelete;
    if (e.target.checked === false) {
      const newState = state.filter((element) => {
        return !(
          element.name === e.target.name &&
          element.fileNameToDelete === e.target.id
        );
      });
      settingsFiles((prev) => ({ ...prev, filesToDelete: newState }));
    } else if (e.target.checked === true) {
      setSettingsFiles((prev) => ({
        ...prev,
        filesToDelete: [
          ...prev.filesToDelete,
          { name: e.target.name, fileNameToDelete: e.target.id },
        ],
      }));
    }
  };

  const handleCheckBoxFromIcon = (name, id) => {
    const inputs = document.querySelectorAll(
      `input[name="${name}"][id="${id}"]`
    );
    const state = settingsFiles.filesToDelete;
    inputs.forEach((el) => {
      if (el.checked) {
        el.checked = false;
        const newState = state.filter((element) => {
          return !(element.name === name && element.fileNameToDelete === id);
        });
        setSettingsFiles((prev) => ({ ...prev, filesToDelete: newState }));
      } else if (el.checked === false) {
        el.checked = true;
        setSettingsFiles((prev) => ({
          ...prev,
          filesToDelete: [
            ...prev.filesToDelete,
            { name: el.name, fileNameToDelete: el.id },
          ],
        }));
      }
    });
  };

  const checkAllImagesFromGroup = (name) => {
    const images = document.querySelectorAll(`input[name="${name}"]`);
    images.forEach((el) => {
      if (!el.checked) {
        setSettingsFiles((prev) => ({
          ...prev,
          filesToDelete: [
            ...prev.filesToDelete,
            { name: el.name, fileNameToDelete: el.id },
          ],
        }));
        el.checked = true;
      }
    });
  };

  const uncheckAllImagesFromGroup = (name) => {
    const images = document.querySelectorAll(`input[name="${name}"]`);
    images.forEach((el) => {
      const newState = settingsFiles.filesToDelete.filter((element) => {
        return element.name !== el.name && element.fileNameToDelete !== el.id;
      });
      setSettingsFiles((prev) => ({ ...prev, filesToDelete: newState }));
    });

    images.forEach((el) => (el.checked = false));
  };

  const imageGroups =
    imageMap.length !== 0
      ? imageMap.map((item) => {
          if (item && item.table.length > 0) {
            return (
              <div
                key={item.name}
                className="gallerysettings-counter-images"
                style={imageMap.length === 1 ? { maxWidth: "100%" } : null}
              >
                <h2>Folder: "{item.name}"</h2>

                <div className="butttonsImageGroup">
                  <img
                    src="/icons/settings_uncheckAll.svg"
                    alt="checkAll"
                    width="40"
                    height="40"
                    onClick={(e) => {
                      e.preventDefault();
                      checkAllImagesFromGroup(item.name);
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
                      uncheckAllImagesFromGroup(item.name);
                    }}
                    className="ImageGroup--btn"
                  >
                    odznacz
                  </button>
                </div>

                {item.table.map((imageName) => (
                  <div className="image_checkbox__group" key={imageName}>
                    <img
                      src={`http://localhost:5000/images/${item.name}/${imageName}`}
                      alt={imageName}
                      className="counter__image"
                      onClick={() =>
                        handleCheckBoxFromIcon(item.name, imageName)
                      }
                      style={
                        imageMap.length === 1
                          ? { width: "120px", height: "120px" }
                          : null
                      }
                    />
                    <input
                      type="checkbox"
                      name={item.name}
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

  return <div className="test_counter-content">{imageGroups}</div>;
};

export default TestImagesGroup;