import { useContext } from "react";
import SettingsForm from "./components/SettingsForm/SettingsForm";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import Modal from "./components/Modal/Modal";
import { SettingsProviderContext } from "../../AdminPanelProvider/SettingsProvider";
import ImagesGroup from "./components/ImagesGroup/ImagesGroup";

const Gallerysettings = () => {
  const { settingsFiles } = useContext(SettingsProviderContext);
  return (
    <div className="Gallerysettings">
      {settingsFiles.settingsMenuIsOpen ? <SettingsForm /> : <SettingsButton />}
      <ImagesGroup />
      {settingsFiles.modalIsOpen && <Modal />}
    </div>
  );
};

export default Gallerysettings;
