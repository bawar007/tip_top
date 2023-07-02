import { useContext } from "react";
import { AppContext } from "../../../../../../../Provider/Provider";
import axios from "axios";
import { SettingsProviderContext } from "../../../settingsProvider/SettingsProvider";

const API_KEY = process.env.REACT_APP_API_KEY;

const Modal = () => {
  const { HOST } = useContext(AppContext);
  const {
    setFilesToDelete,
    filesToDelete,
    filesModal,
    getPics,
    setFilesModal,
  } = useContext(SettingsProviderContext);

  const deleteFunction = async (folderName, fileNameS) => {
    await axios.delete(`${HOST}/delete?s=${folderName}&fileName=${fileNameS}`, {
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    await getPics();
  };

  const handleDeleteFiles = () => {
    if (filesModal) {
      const filesToDeleteNew = filesToDelete;
      filesToDeleteNew.forEach((el) =>
        deleteFunction(el.name, el.fileNameToDelete)
      );
      setFilesToDelete([]);
    }
  };

  const handleCancel = () => {
    const inputs = document.querySelectorAll(`input[type="checkbox"]`);
    inputs.forEach((item) => (item.checked = false));
    setFilesModal(false);
    setFilesToDelete([]);
  };
  return (
    <div className="modalCheckedFiles">
      <div className="modalcontent">
        <h2>Czy jesteś pewien, że chcesz usunąć wybrane pliki ?</h2>
        <span className="closeBtn" onClick={() => setFilesModal(false)}>
          &times;
        </span>
        <div className="filesToDeleteList">
          <ul>
            {filesToDelete.map((el, index) => (
              <li key={el.fileNameToDelete + index}>{el.fileNameToDelete}</li>
            ))}
          </ul>
        </div>
        <div className="btngroup">
          <button
            onClick={() => {
              handleDeleteFiles();
              setFilesModal(false);
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
