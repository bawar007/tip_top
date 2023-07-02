import { useContext } from "react";
import { SettingsProviderContext } from "../../../settingsProvider/SettingsProvider";

const SettingsForm = ({ setSettings, settings }) => {
  const {
    handleAddCustomOption,
    handleFileChange,
    handleUpload,
    options,
    setCustomOption,
    customOption,
    setFilesModal,
  } = useContext(SettingsProviderContext);

  const handleOpenModal = () => {
    setFilesModal(true);
  };

  const OptionsSelectElement = options
    ? options.map(
        (option, index) =>
          option.value && (
            <option key={index} value={option.value}>
              {option.value}
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
        <div className="upload-btn-wrapper">
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
            <span
              style={
                customOption.length > 1
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
              handleAddCustomOption();
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
