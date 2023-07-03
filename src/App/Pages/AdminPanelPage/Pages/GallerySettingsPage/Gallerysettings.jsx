import { useContext, useState } from "react";
import ImagesGroup from "./components/ImagesGroup/ImagesGroup";
import SettingsForm from "./components/SettingsForm/SettingsForm";
import SettingsButton from "./components/SettingsButton/SettingsButton";
import Modal from "./components/Modal/Modal";
import { SettingsProviderContext } from "../../AdminPanelProvider/SettingsProvider";

const Gallerysettings = () => {
  const [settings, setSettings] = useState(false);
  const { filesModal } = useContext(SettingsProviderContext);
  return (
    <div className="Gallerysettings">
      {settings ? (
        <SettingsForm setSettings={setSettings} settings={settings} />
      ) : (
        <SettingsButton setSettings={setSettings} />
      )}
      <ImagesGroup />
      {filesModal && <Modal />}
    </div>
  );
};

export default Gallerysettings;
