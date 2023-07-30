import ListItems from "./Components/ListItems";
import useGetOpinions from "../../../AppPage/hooks/useGetOpinions";

const HOST = "http://localhost:5000";
const API_KEY = process.env.REACT_APP_API_KEY;

const OpinionsSettings = () => {
  const { data, loading, error, setData } = useGetOpinions(HOST, API_KEY);

  const loadingItem = (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  if (loading || error) return loadingItem;

  const opinionsQue = data
    .filter((item) => item.status === "queued")
    .map((item) => (
      <ListItems key={item.id} item={item} data={data} setData={setData} />
    ));

  const opinionsAccepted = data
    .filter((item) => item.status === "accepted")
    .map((item) => (
      <ListItems key={item.id} item={item} data={data} setData={setData} />
    ));

  return (
    <div className="opinionssettings-content">
      <ul className="queued_list">
        <h1>Opinie w kolejce</h1>
        {opinionsQue.length !== 0 ? opinionsQue : "Brak wyników"}
      </ul>
      <ul className="queued_list">
        <h1>Opinie zaakceptowane</h1>
        {opinionsAccepted.length !== 0 ? opinionsAccepted : "Brak wyników"}
      </ul>
    </div>
  );
};

export default OpinionsSettings;
