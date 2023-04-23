import { oferts } from "../data/oferts";

const OfertsMobile = () => {
  //
  //

  const ofertsElMobile = oferts.map((el, index) => (
    <div className="multi-container--infoBox" key={el.id} id={`io${el.id}`}>
      <h1>
        {index === 0 ? <i className="fa fa-solid fa-bath"></i> : null}
        {index === 1 ? <i className="fa fa-solid fa-building"></i> : null}

        {el.title}
      </h1>
      <ul className="infoBox_list">
        {el.items.map((el, index) => (
          <div key={el}>
            <li
              className={`infoBox_list--item animate__fadeInUp  animate__delay-${index}s animate__animated`}
              id={`li${index}`}
            >
              <img
                src="/tip_top/icons/measure.svg"
                alt="da"
                className="OfertListItem--img"
              />
              {el}
            </li>
            <hr
              className={`animate__fadeInUp  animate__delay-${index}s animate__animated`}
            />
          </div>
        ))}
      </ul>
    </div>
  ));

  return <section className="content">{ofertsElMobile}</section>;
};

export default OfertsMobile;
