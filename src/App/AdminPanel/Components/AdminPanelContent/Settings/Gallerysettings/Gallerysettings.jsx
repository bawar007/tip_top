import { useState } from "react";
import ImagesGroup from "./Components/ImagesGroup/ImagesGroup";
import SettingsForm from "./Components/SettingsForm/SettingsForm";
import SettingsButton from "./Components/SettingsButton/SettingsButton";

const Gallerysettings = () => {
  const [settings, setSettings] = useState(false);
  return (
    <div className="Gallerysettings">
      {settings ? (
        <SettingsForm setSettings={setSettings} settings={settings} />
      ) : (
        <SettingsButton setSettings={setSettings} />
      )}
      <ImagesGroup />
    </div>
  );
};

export default Gallerysettings;
