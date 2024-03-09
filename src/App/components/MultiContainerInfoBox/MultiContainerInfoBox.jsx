const MultiContainerInfoBox = ({ title, srcPic, items }) => {
  return (
    <div className="multi-container--infoBox">
      <div className="ofert_title">
        <img src={srcPic} alt="houseforofert" width="55" height="55" />
        <h1>{title}</h1>
      </div>
      <hr />
      <ul className="infoBox_list">
        {items.map((item) => (
          <li key={item} className="infoBox_list--item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiContainerInfoBox;
