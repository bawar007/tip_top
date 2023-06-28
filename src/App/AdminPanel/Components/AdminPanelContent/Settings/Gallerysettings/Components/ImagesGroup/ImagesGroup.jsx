import { useContext } from "react";
import { SettingsProviderContext } from "../../../settingsProvider/SettingsProvider";

const ImagesGroup = () => {
  const { fileData, filesToDelete, setFilesToDelete } = useContext(
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

  const imageGroups = imageMap
    ? Object.entries(imageMap).map(([name, images]) => {
        if (images.length > 0) {
          return (
            <div key={name} className="gallerysettings-counter-images">
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

  return <div className="gallerysettings-counter">{imageGroups}</div>;
};

export default ImagesGroup;
