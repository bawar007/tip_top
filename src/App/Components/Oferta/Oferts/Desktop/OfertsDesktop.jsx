import { oferts } from "../data/oferts";

const OfertsDesktop = () => {
  const ofertsEl = oferts.map((el) => (
    <div className="multi-container--infoBox" key={el.id} id={`io${el.id}`}>
      <h2>{el.title}</h2>
      <ul className="infoBox_list">
        {el.items.map((el) => (
          <li key={el} className="infoBox_list--item">
            {el}
          </li>
        ))}
      </ul>
    </div>
  ));
  return <section className="content_multi-container">{ofertsEl}</section>;
};

export default OfertsDesktop;
