import { useContext } from "react";
import { AppContext } from "../../../../../AppPage/AppPageProvider/AppPageProvider";
import axios from "axios";
import { SettingsProviderContext } from "../../../../AdminPanelProvider/SettingsProvider";

const API_KEY = process.env.REACT_APP_API_KEY;

const Modal = () => {
  const { HOST } = useContext(AppContext);
  const { settingsFiles, setSettingsFiles } = useContext(
    SettingsProviderContext
  );

  const deleteFunction = async (folderName, fileNameS) => {
    await axios.delete(`${HOST}/delete?s=${folderName}&fileName=${fileNameS}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
  };

  const handleDeleteFiles = () => {
    if (settingsFiles.modalIsOpen) {
      const filesToDeleteNew = settingsFiles.filesToDelete;

      filesToDeleteNew.forEach((el) =>
        deleteFunction(el.name, el.fileNameToDelete)
      );
      setSettingsFiles((prev) => ({
        ...prev,
        filesToDelete: [],
        modalIsOpen: false,
      }));
    }
  };

  const handleCancel = () => {
    const inputs = document.querySelectorAll(`input[type="checkbox"]`);
    inputs.forEach((item) => (item.checked = false));

    setSettingsFiles((prev) => ({
      ...prev,
      filesToDelete: [],
      modalIsOpen: false,
    }));
  };
  return (
    <div className="modalCheckedFiles">
      <div className="modalcontent">
        <h2>Czy jesteś pewien, że chcesz usunąć wybrane pliki ?</h2>
        <span
          className="closeBtn"
          onClick={() =>
            setSettingsFiles((prev) => ({ ...prev, modalIsOpen: false }))
          }
        >
          &times;
        </span>
        <div className="filesToDeleteList">
          <ul>
            {settingsFiles.filesToDelete.map((el, index) => (
              <li key={el.fileNameToDelete + index}>{el.fileNameToDelete}</li>
            ))}
          </ul>
        </div>
        <div className="btngroup">
          <button
            onClick={() => {
              handleDeleteFiles();
              setSettingsFiles((prev) => ({ ...prev, modalIsOpen: false }));
            }}
            className="acceptBtn"
          >
            Akceptuj
          </button>
          <button onClick={() => handleCancel()} className="deleteBtn">
            Odrzuć
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;