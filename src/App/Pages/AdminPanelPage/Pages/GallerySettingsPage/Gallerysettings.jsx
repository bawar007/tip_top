import { useContext } from "react";
import SettingsForm from "./components/SettingsForm/SettingsForm";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import Modal from "./components/Modal/Modal";
import { SettingsProviderContext } from "../../AdminPanelProvider/SettingsProvider";
import TestImagesGroupBox from "./_tests_/_test_images_group/TestImagesGroupBox";

const Gallerysettings = () => {
  const { settingsFiles } = useContext(SettingsProviderContext);
  return (
    <div className="Gallerysettings">
      {settingsFiles.settingsMenuIsOpen ? <SettingsForm /> : <SettingsButton />}
      <TestImagesGroupBox />
      {settingsFiles.modalIsOpen && <Modal />}
    </div>
  );
};

export default Gallerysettings;
