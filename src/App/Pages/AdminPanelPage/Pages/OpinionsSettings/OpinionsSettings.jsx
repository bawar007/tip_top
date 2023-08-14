import ListItems from "./Components/ListItems";
import useGetOpinions from "../../../AppPage/hooks/useGetOpinions";
import LogoItem from "../../../../components/LogoItem";

const HOST = "https://tip-top-backend-worker.onrender.com";
const API_KEY = process.env.REACT_APP_API_KEY;

const OpinionsSettings = () => {
  const { loading, data, error, setData } = useGetOpinions(HOST, API_KEY);

  if (loading || error) return <LogoItem />;

  const opinionsQue = data.queued.map((item) => (
    <ListItems key={item.id} item={item} setData={setData} data={data} />
  ));

  const opinionsAccepted = data.accepted.map((item) => (
    <ListItems key={item.id} item={item} setData={setData} data={data} />
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
