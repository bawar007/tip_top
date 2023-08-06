import { useContext } from "react";
import { SettingsProviderContext } from "../../../../AdminPanelProvider/SettingsProvider";
import Select from "react-select";
import { AppContext } from "../../../../../AppPage/AppPageProvider/AppPageProvider";
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const SettingsForm = () => {
  const { settingsFiles, setSettingsFiles } = useContext(
    SettingsProviderContext
  );

  const { HOST } = useContext(AppContext);

  const handleOpenModal = () => {
    setSettingsFiles((prev) => ({ ...prev, modalIsOpen: true }));
  };

  const handleSelectFolderToUpload = (folder) => {
    setSettingsFiles((prev) => ({
      ...prev,
      folderToUpload: folder,
    }));
  };

  const handleChangeCustomNewFolder = (item) => {
    setSettingsFiles((prev) => ({ ...prev, customNewFolder: item }));
  };

  const handleAddFilesToUpload = (event) => {
    const { name } = event.target;
    if (name === "form__file") {
      const files = Array.from(event.target.files);
      setSettingsFiles((prev) => ({ ...prev, filesToUpload: files }));
    }
  };

  const handleUploadNewFiles = async (e) => {
    e.preventDefault();
    const filesToDelete = settingsFiles.filesToUpload;
    const folderToDelete = settingsFiles.folderToUpload;
    if (!folderToDelete) {
      alert("musisz wybrać folder lub dodać nowy");
      return;
    }
    let formData = new FormData();
    if (filesToDelete && filesToDelete.length > 0) {
      for (let i = 0; i < filesToDelete.length; i++) {
        formData.append("files", filesToDelete[i]);
      }
      await axios
        .post(`${HOST}/upload?s=${folderToDelete}`, formData, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        })
        .catch((error) => console.log(error))
        .finally(() => {
          alert("Pliki zostały dodane do serwera");
          window.location.reload();
        });
    } else {
      alert("Nie wybrałeś plików");
    }
  };

  const handleAddCustomNewFolderToOptions = () => {
    const { customNewFolder, optionsFiles } = settingsFiles;
    if (customNewFolder) {
      const tab = [
        ...optionsFiles,
        { value: customNewFolder, label: customNewFolder },
      ].sort((a, b) => {
        if (typeof a.value === "string" && typeof b.value === "string") {
          const numA = parseInt(a.value.split("_")[1]);
          const numB = parseInt(b.value.split("_")[1]);
          return numA - numB;
        } else if (typeof a.value === "string") {
          return -1;
        } else if (typeof b.value === "string") {
          return 1;
        } else {
          return 0;
        }
      });

      setSettingsFiles((prev) => ({
        ...prev,
        optionsFiles: tab,
        customNewFolder: "",
      }));
    }
  };

  return (
    <form onSubmit={handleUploadNewFiles} className="gallerysettings-form">
      <div className="headerForm">
        <h1>Wyślij pliki na serwer</h1>{" "}
        <img
          src="/icons/settings_close.svg"
          alt="sett2"
          width="50"
          height="50"
          onClick={() =>
            setSettingsFiles((prev) => ({ ...prev, settingsMenuIsOpen: false }))
          }
        />
      </div>

      <div className="newFolderGroup">
        <div className="upload-btn-wrapper">
          <button className="btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Wybierz pliki
          </button>
          <input
            type="file"
            onChange={(e) => handleAddFilesToUpload(e)}
            multiple
            className="form__input"
            name="form__file"
          />
        </div>
        <div className="selectFile">
          <h2>Wskarz folder</h2>

          <Select
            value={settingsFiles.optionsFiles.value}
            options={settingsFiles.optionsFiles}
            onChange={(target) => {
              handleSelectFolderToUpload(target.value);
            }}
            className="select-new-files"
            classNamePrefix="new-files"
            placeholder="Zapisz pliki w..."
            defaultValue={settingsFiles.optionsFiles[0]}
          />

          <label className="foldername">
            <input
              type="text"
              value={settingsFiles.customNewFolder}
              onChange={(e) => handleChangeCustomNewFolder(e.target.value)}
              className="form__input-text"
            />
            <span
              style={
                settingsFiles.customNewFolder.length > 1
                  ? { top: "-20px", fontWeight: 900, fontSize: "smaller" }
                  : null
              }
            >
              Nazwa folderu
            </span>
          </label>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddCustomNewFolderToOptions();
            }}
            className="form__btn"
          >
            Dodaj nowy folder
          </button>
          <button className="form__btn btn_send">
            <span className="btn__text">Upload</span>
          </button>
        </div>
      </div>
      <div className="buttons_group">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleOpenModal();
          }}
          className="form__btn"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Usuń zaznaczone pliki
        </button>
      </div>
    </form>
  );
};

export default SettingsForm;
