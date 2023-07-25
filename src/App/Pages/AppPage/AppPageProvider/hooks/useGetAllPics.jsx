import { useState, useEffect } from "react";
import axios from "axios";

const useGetAllPics = (HOST, API_KEY) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${HOST}/files`, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        const files = response.data.files;
        const test = files.map((file, index) => {
          const id = index + 1;
          const first = `/${file.name}/${file.table[0]}`;
          const all = file.table.map((fileName) => `/${file.name}/${fileName}`);
          return { id, first, all };
        });
        setData(test);
        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [HOST, API_KEY]);

  return { data, loading, error };
};

export default useGetAllPics;
