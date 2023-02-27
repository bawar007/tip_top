import { oferts } from "../data/oferts";

const OfertsDesktop = () => {
  const ofertsEl = oferts.map((el) => (
    <div className="infoOfert" key={el.id} id={`io${el.id}`}>
      <h2>{el.title}</h2>
      <ul
        className="list_Ofert"
        style={{ display: "flex", flexDirection: "column" }}
      >
        {el.items.map((el) => (
          <li key={el} className="list_Ofert_item">
            {el}
          </li>
        ))}
      </ul>
    </div>
  ));
  return <section className="containerDouble">{ofertsEl}</section>;
};

export default OfertsDesktop;
