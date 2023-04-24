import { oferts } from "../data/oferts";

const OfertsDesktop = () => {
  const ofertsEl = oferts.map((el, index) => (
    <div className="multi-container--infoBox" key={el.id} id={`io${el.id}`}>
      <h1>
        {index === 0 ? <i className="fa fa-solid fa-bath"></i> : null}
        {index === 1 ? <i className="fa fa-solid fa-building"></i> : null}
        {el.title}
      </h1>
      <ul className="infoBox_list">
        {el.items.map((el) => (
          <li key={el} className="infoBox_list--item">
            <img
              src="/tip_top/icons/measure.svg"
              alt="da"
              className="OfertListItem--img"
            />
            {el}
          </li>
        ))}
      </ul>
    </div>
  ));
  return <section className="content_multi-container">{ofertsEl}</section>;
};

export default OfertsDesktop;
