import { useEffect, useState } from "react";
import axios from "axios";

const useGetOpinions = (HOST, API_KEY) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${HOST}/opinions`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });

        setData(response.data);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [API_KEY, HOST]);

  return { loading, data, error, setData };
};

export default useGetOpinions;
