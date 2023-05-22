import { useState } from "react";

const OfertsSecond = () => {
  const [howOfertsShowFirst, setHowOfertsShowFirst] = useState(4);
  const [howOfertsShowVisibledFirst, setHowOfertsShowVisibledFirst] =
    useState(true);

  const oferts = [
    "malowanie",
    "szpachlowanie sufitów i ścian",
    "suche zabudowy",
    "sufity podwieszane",
    "panele",
    "listwy przypodłogowe",
    "terakota, gres",
    "płytki ceramiczne",
    "płytki gipsowe",
    "cegła",
    "montaż drzwi wewnętrznych",
    "montaż oświetlenia typu LED",
  ];

  const ButtonShowMoreFirst = (
    <button
      onClick={() => {
        setHowOfertsShowFirst(10);
        setHowOfertsShowVisibledFirst(false);
      }}
      className="btnShowMoreOferts"
    >
      Pokaż więcej
    </button>
  );

  const ButtonShowLessFirst = (
    <button
      onClick={() => {
        setHowOfertsShowFirst(4);
        setHowOfertsShowVisibledFirst(true);
      }}
      className="btnShowMoreOferts"
    >
      Pokaż mniej
    </button>
  );

  const ListItems = oferts.map((item, index) => {
    if (index < howOfertsShowFirst) {
      return (
        <li key={item} className="infoBox_list--item">
          <img
            src="/tip_top/icons/measure.svg"
            alt="da"
            className="OfertListItem--img"
            width="40"
            height="40"
          />
          {item}
        </li>
      );
    } else return null;
  });

  return (
    <div className="multi-container--infoBox animate__delay-1s">
      <div className="ofert_title">
        <img
          src="/tip_top/icons/shower.svg"
          alt="houseforofert"
          width="45"
          height="45"
        />
        <h1>Wykończenia</h1>
      </div>
      <ul className="infoBox_list">{ListItems}</ul>
      {howOfertsShowVisibledFirst ? ButtonShowMoreFirst : ButtonShowLessFirst}
    </div>
  );
};

export default OfertsSecond;
