import { useState } from "react";

import { oferts } from "../data/oferts";

const OfertsMobile = () => {
  const [howOfertsShow, setHowOfertsShow] = useState(4);
  const [howOfertsShowVisibled, setHowOfertsShowVisibled] = useState(true);
  //
  //

  const btnTrue = (
    <button
      onClick={() => {
        setHowOfertsShow(12);
        setHowOfertsShowVisibled(false);
      }}
      className="btnShowMoreOferts"
    >
      Pokaż więcej
    </button>
  );

  const btnFalse = (
    <button
      onClick={() => {
        setHowOfertsShow(4);
        setHowOfertsShowVisibled(true);
      }}
      className="btnShowMoreOferts"
    >
      Pokaż mniej
    </button>
  );

  const ofertsElMobile = oferts.map((el, index) => (
    <div
      className="multi-container--infoBox"
      key={el.id * 2 * index + "v"}
      id={`io${el.id}`}
    >
      <h1>
        {index === 0 ? <i className="fa fa-solid fa-bath"></i> : null}
        {index === 1 ? <i className="fa fa-solid fa-building"></i> : null}

        {el.title}
      </h1>
      <ul className="infoBox_list">
        {el.items.map((el, index) => {
          if (index < howOfertsShow) {
            return (
              <>
                <li
                  key={el + el + index + el + "d"}
                  className={`infoBox_list--item`}
                  id={`li${index}`}
                >
                  <img
                    src="/tip_top/icons/measure.svg"
                    alt="da"
                    className="OfertListItem--img"
                    width="20"
                    height="20"
                  />
                  {el}
                </li>
                <hr className={`animate__fadeInUp`} />
              </>
            );
          } else return null;
        })}
      </ul>
      {howOfertsShowVisibled ? btnTrue : btnFalse}
    </div>
  ));

  return <section className="content">{ofertsElMobile}</section>;
};

export default OfertsMobile;
