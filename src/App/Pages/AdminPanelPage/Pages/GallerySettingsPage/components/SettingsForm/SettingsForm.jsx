import { useContext } from "react";
import { SettingsProviderContext } from "../../../../AdminPanelProvider/SettingsProvider";
import Select from "react-select";

const SettingsForm = ({ setSettings, settings }) => {
  const {
    handlerAddCustomOptions,
    handleFileChange,
    handlerUpload,
    options,
    setCustomOption,
    customOption,
    setFilesModal,
    setFileName,
  } = useContext(SettingsProviderContext);

  const handleOpenModal = () => {
    setFilesModal(true);
  };

  return (
    <form onSubmit={handlerUpload} className="gallerysettings-form">
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

          <Select
            value={options.value}
            options={options}
            onChange={(target) => setFileName(target.value)}
            className="select-new-files"
            classNamePrefix="new-files"
            placeholder="Zapisz pliki w..."
          />

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
              handlerAddCustomOptions();
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
