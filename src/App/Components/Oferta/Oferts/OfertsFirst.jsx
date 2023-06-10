import { useState } from "react";

const OfertsFirst = () => {
  const [howOfertsShowFirst, setHowOfertsShowFirst] = useState(4);
  const [howOfertsShowVisibledFirst, setHowOfertsShowVisibledFirst] =
    useState(true);

  const oferts = [
    "pełny zakres remontu",
    "renowacja łazienki",
    "przeróbki hydrauliczne",
    "montaż baterii podtynkowych",
    "montaż odpływu liniowego",
    "montaż kabin prysznicowych",
    "biały montaż",
    "glazura, terakota",
    "montaż drzwi",
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
        <li className="infoBox_list--item" key={item}>
          <img
            src="/icons/measure.svg"
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
    <div className="multi-container--infoBox">
      <div className="ofert_title">
        <img
          src="/icons/shower.svg"
          alt="houseforofert"
          width="45"
          height="45"
        />
        <h1>Łazienka</h1>
      </div>
      <ul className="infoBox_list">{ListItems}</ul>
      {howOfertsShowVisibledFirst ? ButtonShowMoreFirst : ButtonShowLessFirst}
    </div>
  );
};

export default OfertsFirst;
