import {
  handleDeleteOpinion,
  handleAcceptOpinion,
} from "../../../../AppPage/Pages/OpinionsPage/helpers/opinionsHelpers";

const ListItems = ({ item, data, setData }) => {
  const updateStatusById = (id) => {
    // Skopiowanie tablicy, aby nie modyfikować oryginalnej
    let updatedItems = data.slice();

    // Wyszukanie indeksu elementu o danym id
    const indexToUpdate = updatedItems.findIndex((item) => item.id === id);

    if (indexToUpdate !== -1) {
      // Aktualizacja statusu, jeśli element został znaleziony
      updatedItems[indexToUpdate].status = "accepted";
    } else {
      // Można również rzucić wyjątek, jeśli element o podanym id nie istnieje
      console.error("Element o podanym id nie został znaleziony.");
    }

    // Zwrócenie zaktualizowanej tablicy
    setData(updatedItems);
    handleAcceptOpinion(id);
  };

  const deleteOpinion = (id) => {
    const updatedItems = data.filter((item) => item.id !== id);
    setData(updatedItems);
    handleDeleteOpinion(id);
  };

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
        {item.status === "queued" && (
          <button onClick={() => updateStatusById(item.id)}>Accept</button>
        )}
        <button onClick={() => deleteOpinion(item.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ListItems;
