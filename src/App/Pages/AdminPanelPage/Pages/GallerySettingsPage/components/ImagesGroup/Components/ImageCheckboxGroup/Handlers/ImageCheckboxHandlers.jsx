export const testHandler = (fileData) => {
  const imageMap = fileData
    ? fileData.files.reduce((acc, file) => {
        if (acc[file.name]) {
          acc[file.name].push(...file.table);
        } else {
          acc[file.name] = [...file.table];
        }
        return acc;
      }, {})
    : null;

  return imageMap;
};

export const HandleTableToMap = (
  e,
  imageMap,
  setTableToMap,
  setSearchItems
) => {
  const selectValue = e.map((e) => e.value);
  const ImageObject = Object.entries(imageMap);
  setSearchItems(e);
  if (selectValue.length === 1) {
    if (selectValue[0] === "all") {
      setTableToMap(ImageObject);
    } else {
      const newTab = ImageObject.filter(([name]) => name === selectValue[0]);
      setTableToMap(newTab);
    }
  } else {
    const TableSelectedFolders = [];
    selectValue.forEach((el) =>
      ImageObject.filter((item) => {
        if (item[0] === el) {
          TableSelectedFolders.push(item);
        }
        return null;
      })
    );
    setTableToMap(TableSelectedFolders);
  }
};
