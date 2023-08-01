import {
  handleDeleteOpinion,
  handleAcceptOpinion,
} from "../../../../AppPage/Pages/OpinionsPage/helpers/opinionsHelpers";

const ListItems = ({ item, data, setData }) => {
  const handleAcceptData = async (id) => {
    let updatedItems = data;

    const indexToUpdate = updatedItems.queued.findIndex(
      (item) => item.id === id
    );

    if (indexToUpdate !== -1) {
      updatedItems.queued[indexToUpdate].status = "accepted";
    } else {
      console.error("Element o podanym id nie został znaleziony.");
    }
    // Zwrócenie zaktualizowanej tablicy
    const updatedQue = updatedItems.queued.filter(
      (item) => item.status === "queued"
    );

    setData((prev) => ({
      queued: updatedQue,
      accepted: [...prev.accepted, updatedItems.queued[indexToUpdate]],
    }));
    await handleAcceptOpinion(id);
  };

  const deleteOpinion = async (id) => {
    const deleteQue = data.queued.filter((item) => item.id !== id);
    const deleteAccepted = data.accepted.filter((item) => item.id !== id);

    setData({
      accepted: deleteAccepted,
      queued: deleteQue,
    });

    await handleDeleteOpinion(id);
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
        <h3>email</h3>
        <span>{item.email}</span>
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
          <button onClick={() => handleAcceptData(item.id)}>Accept</button>
        )}
        <button onClick={() => deleteOpinion(item.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ListItems;
