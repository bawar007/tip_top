import { useContext } from "react";
import { SettingsProviderContext } from "../../../../../../AdminPanelProvider/SettingsProvider";

import { testHandler } from "../ImageCheckboxGroup/Handlers/ImageCheckboxHandlers";
import ButtonsImageGroup from "../ButtonsImageGroup/ButtonsImageGroup";
import ImageCheckboxGroup from "../ImageCheckboxGroup/ImageCheckboxGroup";

const ImageGroup = () => {
  const { fileData, TableToMap } = useContext(SettingsProviderContext);

  const imageMap = testHandler(fileData);
  const firstTable = TableToMap ? TableToMap : Object.entries(imageMap);

  const imageGroups = firstTable.map(([name, images]) => {
    if (images && images.length > 0) {
      return (
        <div
          key={name}
          className="gallerysettings-counter-images"
          style={firstTable.length === 1 ? { maxWidth: "100%" } : null}
        >
          <h2>Folder: "{name}"</h2>

          <ButtonsImageGroup name={name} />

          {images.map((imageName) => (
            <ImageCheckboxGroup
              imageName={imageName}
              name={name}
              TableToMap={firstTable}
              key={imageName}
            />
          ))}
        </div>
      );
    } else return null;
  });

  return <div className="counter-content">{imageGroups}</div>;
};

export default ImageGroup;
