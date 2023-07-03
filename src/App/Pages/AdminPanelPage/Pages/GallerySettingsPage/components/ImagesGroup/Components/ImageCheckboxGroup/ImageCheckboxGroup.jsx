import { useContext } from "react";
import { SettingsProviderContext } from "../../../../../../AdminPanelProvider/SettingsProvider";

const ImageCheckboxGroup = ({ imageName, name, TableToMap }) => {
  const { filesToDelete, setFilesToDelete } = useContext(
    SettingsProviderContext
  );

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

  return (
    <div className="image_checkbox__group" key={imageName}>
      <img
        src={`http://localhost:5000/images/${name}/${imageName}`}
        alt={imageName}
        className="counter__image"
        onClick={() => handleCheckBoxFromIcon(name, imageName)}
        style={
          TableToMap.length === 1 ? { width: "120px", height: "120px" } : null
        }
      />
      <input
        type="checkbox"
        name={name}
        id={imageName}
        onChange={handleChangeChecbox}
      />
    </div>
  );
};

export default ImageCheckboxGroup;
