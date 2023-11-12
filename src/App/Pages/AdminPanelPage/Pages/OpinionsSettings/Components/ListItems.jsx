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
      <h3>
        IMIE:
        <span>{item.imie}</span>
      </h3>
      <h3>
        EMAIL: <span>{item.email}</span>
      </h3>
      <h3>
        PROJECT: <span>{item.project_id}</span>
      </h3>
      <h3>
        OPINIA: <span>{item.text}</span>
      </h3>
      <h3>
        OCENA: <span>{item.stars}</span>
      </h3>
      <h3>
        DATA PUBLIKACJI: <span>{item.public_data}</span>
      </h3>
      <div className="yes_no_group">
        {item.status === "queued" && (
          <img
            src="/icons/yesicon.svg"
            alt="accept_opinion"
            onClick={() => handleAcceptData(item.id)}
            width={40}
            className="yes_icon"
          />
        )}

        <img
          src="/icons/noicon.svg"
          alt="delete_opinion"
          onClick={() => deleteOpinion(item.id)}
          width={40}
          className="no_icon"
        />
      </div>
    </li>
  );
};

export default ListItems;
