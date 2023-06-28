import { useContext } from "react";
import axios from "axios";
import { SettingsProviderContext } from "../../../settingsProvider/SettingsProvider";
import { AppContext } from "../../../../../../../Provider/Provider";

const SettingsForm = ({ setSettings, settings }) => {
  const {
    handleAddCustomOption,
    handleFileChange,
    handleUpload,
    setFilesToDelete,
    filesToDelete,
    options,
    setCustomOption,
    getPics,
    customOption,
  } = useContext(SettingsProviderContext);

  const { HOST } = useContext(AppContext);

  const deleteFunction = async (folderName, fileNameS) => {
    await axios.delete(`${HOST}/delete?s=${folderName}&fileName=${fileNameS}`);
    await getPics();
  };

  const handleDelete = async () => {
    const filesToDeleteNew = filesToDelete;
    filesToDeleteNew.forEach((el) =>
      deleteFunction(el.name, el.fileNameToDelete)
    );
    setFilesToDelete([]);
  };

  const OptionsSelectElement = options
    ? options.map(
        (option, index) =>
          option && (
            <option key={index} value={option}>
              {option}
            </option>
          )
      )
    : null;

  return (
    <form onSubmit={handleUpload} className="gallerysettings-form">
      <div className="headerForm">
        <h1>Wyślij pliki na serwer</h1>{" "}
        <img
          src="/icons/settings_close.svg"
          alt="sett2"
          width="50"
          height="50"
          onClick={() => setSettings(false)}
        />
      </div>

      <div className="newFolderGroup">
        <div class="upload-btn-wrapper">
          <button className="btn">
            <span></span>
            <span></span>
            <span></span>
            <span></span>Wybierz pliki
          </button>
          <input
            type="file"
            onChange={handleFileChange}
            multiple
            className="form__input"
            name="form__file"
          />
        </div>
        <div className="selectFile">
          <h2>Wskarz folder</h2>
          <select onChange={handleFileChange} name="select_name_file">
            {OptionsSelectElement}
          </select>
          <label className="foldername">
            <input
              type="text"
              value={customOption}
              onChange={(e) => {
                setCustomOption(e.target.value);
              }}
              className="form__input-text"
            />
            <span>Nazwa folderu</span>
          </label>

          <button
            onClick={(e) => {
              e.preventDefault();
              handleAddCustomOption();
              console.log(
                getComputedStyle(document.documentElement).getPropertyValue(
                  "--gallerysettings-width-form'"
                )
              );
            }}
            className="form__btn"
          >
            Dodaj nowy folder
          </button>
          <button className="form__btn btn_send">
            <span>
              <img
                src={"/icons/send_icon.svg"}
                alt="send"
                width="50"
                height="50"
              />
            </span>
            <span className="left">Upload</span>
          </button>
        </div>
      </div>
      <div className="buttons_group">
        <button
          onClick={(e) => {
            e.preventDefault();
            handleDelete();
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
