import { useState } from "react";
import { oferts } from "../data/oferts";

const OfertsDesktop = () => {
  const [howOfertsShow, setHowOfertsShow] = useState(4);
  const [howOfertsShowVisibled, setHowOfertsShowVisibled] = useState(true);

  const ofertsEl = oferts.map((el, index) => (
    <div className="multi-container--infoBox" key={el.id} id={`io${el.id}`}>
      <h1>
        {index === 0 ? <i className="fa fa-solid fa-bath"></i> : null}
        {index === 1 ? <i className="fa fa-solid fa-building"></i> : null}
        {el.title}
      </h1>
      <ul className="infoBox_list">
        {el.items.map((el, index) => {
          if (index < howOfertsShow) {
            return (
              <li key={el + index * 2 + el} className="infoBox_list--item">
                <img
                  src="/tip_top/icons/measure.svg"
                  alt="da"
                  className="OfertListItem--img"
                  width="40"
                  height="40"
                />
                {el}
              </li>
            );
          } else return null;
        })}
      </ul>
      {howOfertsShowVisibled ? (
        <button
          onClick={() => {
            setHowOfertsShow(12);
            setHowOfertsShowVisibled(false);
          }}
          className="btnShowMoreOferts"
        >
          Pokaż więcej
        </button>
      ) : (
        <button
          onClick={() => {
            setHowOfertsShow(4);
            setHowOfertsShowVisibled(true);
          }}
          className="btnShowMoreOferts"
        >
          Pokaż mniej
        </button>
      )}
    </div>
  ));
  return <div className="content_multi-container">{ofertsEl}</div>;
};

export default OfertsDesktop;
