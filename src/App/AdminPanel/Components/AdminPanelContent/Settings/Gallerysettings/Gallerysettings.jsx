import { useContext, useState } from "react";
import ImagesGroup from "./Components/ImagesGroup/ImagesGroup";
import SettingsForm from "./Components/SettingsForm/SettingsForm";
import SettingsButton from "./Components/SettingsButton/SettingsButton";
import Modal from "./Components/Modal/Modal";
import { SettingsProviderContext } from "../settingsProvider/SettingsProvider";

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
