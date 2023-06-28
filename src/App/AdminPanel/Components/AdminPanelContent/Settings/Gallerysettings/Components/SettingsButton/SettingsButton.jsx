const SettingsButton = ({ setSettings }) => {
  return (
    <div className="settings_btn">
      <img
        src="/icons/settings_gallery.svg"
        alt="sett"
        width="70"
        height="70"
      />
      <img
        src="/icons/settings_file.svg"
        alt="sett2"
        width="40"
        height="40"
        onClick={() => setSettings(true)}
      />
    </div>
  );
};

export default SettingsButton;
