import { useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AppContext } from "../../../../../Provider/Provider";

const Gallerysettings = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileData, setFileData] = useState(null);
  const { HOST } = useContext(AppContext);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    console.log(selectedFile);
    let formData = new FormData();
    formData.append("file", selectedFile);
    await axios.post(`${HOST}/upload`, formData);
    setSelectedFile(null);
    await getPics();
  };

  const getPics = useCallback(async () => {
    await axios
      .get(`${HOST}/file`)
      .then((response) => {
        setFileData(response.data.files);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, [HOST]);

  useEffect(() => {
    getPics();
  }, [getPics]);

  const pics =
    fileData && fileData.length > 0
      ? fileData.map((el, index) => (
          <img
            src={`http://localhost:5000/images/${el}`}
            alt="dd"
            key={index}
            style={{ width: 250, height: 250 }}
          />
        ))
      : null;

  return (
    <div className="Gallerysettings">
      <form onSubmit={handleUpload}>
        <label>wyślij plik</label>
        <input type="file" onChange={handleFileChange} multiple />
        <button>send</button>
      </form>
      {pics}
    </div>
  );
};

export default Gallerysettings;
