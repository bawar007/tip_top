import { handleDeleteOpinion } from "../../../../AppPage/Pages/OpinionsPage/subcomp/editOpinion/EditOpinionContent/helpers/DeleteOpinion/DeleteOpinion";

const ListItems = ({ item }) => {
  return (
    <li className="queued_list--item">
      <div>
        <h3>ID</h3>
        <span>{item.id}</span>
      </div>
      <div>
        <h3>Imie</h3>
        <span>{item.imie}</span>
      </div>
      <div>
        <h3>nazwisko</h3>
        <span>{item.nazwisko}</span>
      </div>
      <div>
        <h3>email</h3>
        <span>{item.email}</span>
      </div>
      <div>
        <h3>telefon</h3>
        <span>{item.phone}</span>
      </div>
      <div>
        <h3>project</h3>
        <span>{item.project_id}</span>
      </div>
      <div>
        <h3>Opinia</h3>
        <span>{item.text}</span>
      </div>
      <div>
        <h3>Gwiazdki</h3>
        <span>{item.stars}</span>
      </div>
      <div>
        <h3>Data publikacji</h3>
        <span>{item.public_data}</span>
      </div>
      <div>
        <h3>Status</h3>
        <span>{item.status}</span>
      </div>
      <div>
        {item.status === "queued" && <button>Accept</button>}
        <button onClick={() => handleDeleteOpinion(item.email)}>Delete</button>
      </div>
    </li>
  );
};

export default ListItems;
