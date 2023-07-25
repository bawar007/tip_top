import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import ListItems from "./Components/ListItems";

const HOST = "http://localhost:5000";
const API_KEY = process.env.REACT_APP_API_KEY;

const OpinionsSettings = () => {
  const [opinionsData, setOpinionsData] = useState({
    fetchDataIsLoaded: false,
    opinionsData: [],
    opinionsDataQueued: [],
    opinionsDataAccepted: [],
  });

  const getOpinionsFromApi = useCallback(async () => {
    setOpinionsData((prev) => ({ ...prev, fetchDataIsLoaded: false }));
    await axios
      .get(`${HOST}/opinions`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      })
      .then((response) => {
        const opinionsDataQueued = response.data.filter(
          (item) => item.status === "queued"
        );

        const opinionsDataAccepted = response.data.filter(
          (item) => item.status === "accepted"
        );

        setOpinionsData((prev) => ({
          ...prev,
          opinionsData: response.data,
          opinionsDataQueued,
          opinionsDataAccepted,
        }));
      })
      .finally(() =>
        setOpinionsData((prev) => ({ ...prev, fetchDataIsLoaded: true }))
      )
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getOpinionsFromApi();
  }, [getOpinionsFromApi]);

  const loadingItem = (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );

  const opinionsQue =
    opinionsData.fetchDataIsLoaded &&
    opinionsData.opinionsDataQueued.map((item) => (
      <ListItems key={item.id} item={item} />
    ));

  const opinionsAccepted =
    opinionsData.fetchDataIsLoaded &&
    opinionsData.opinionsDataAccepted.map((item) => (
      <ListItems key={item.id} item={item} />
    ));

  return (
    <div className="opinionssettings-content">
      <ul className="queued_list">
        <h1>Opinie w kolejce</h1>
        {opinionsData.fetchDataIsLoaded
          ? opinionsQue.length !== 0
            ? opinionsQue
            : "Brak wyników"
          : loadingItem}
      </ul>
      <ul className="queued_list">
        <h1>Opinie zaakceptowane</h1>
        {opinionsData.fetchDataIsLoaded
          ? opinionsAccepted.length !== 0
            ? opinionsAccepted
            : "Brak wyników"
          : loadingItem}
      </ul>
    </div>
  );
};

export default OpinionsSettings;
