import { useContext } from "react";
import { SettingsProviderContext } from "../../../../../settingsProvider/SettingsProvider";

const ButtonsImageGroup = ({ name }) => {
  const { filesToDelete, setFilesToDelete } = useContext(
    SettingsProviderContext
  );

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

  return (
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
  );
};

export default ButtonsImageGroup;
