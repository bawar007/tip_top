import { useContext, useEffect, useState } from "react";

import MobileGallery from "../Gallery/SubComponents/Mobile/MobileGallery";

import { AppContext } from "../../Provider/Provider";

import AllPicsPopUp from "../Gallery/SubComponents/AllPicsPopUp/AllPicsPopMenu/AllPicsPopup";
import AddNewOpinion from "./data/addOpinion/addNewOpinion";

import axios from "axios";
import OpinionBtn from "./subcomp/OpinionBtn";
import EditOpinion from "./data/editOpinion/EditOpinion";

const Opinions = () => {
  const { windowW, handleClick, allPics } = useContext(AppContext);

  const [opinionsEl, setOpinions] = useState([]);
  const [phoneNumber, setPhoneNumber] = useState([]);

  useEffect(() => {
    getUsers();
    getUser();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/opinions");
    setOpinions(response.data);
  };

  const getUser = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setPhoneNumber(response.data);
  };

  const opinion = opinionsEl.map((opinion) => (
    <div className="opinion" key={opinion.id}>
      <h2>
        {opinion.imie}
        {" " + opinion.nazwisko}
      </h2>
      <p>{opinion.text}</p>
      <div className="stars">
        <span
          className={opinion.stars >= 1 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars >= 2 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars >= 3 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars >= 4 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
        <span
          className={opinion.stars === 5 ? "fa fa-star checked" : "fa fa-star"}
        ></span>
      </div>
      <div className="projectLink">
        <h3 onClick={handleClick.bind(this, opinion.projekt_id)}>
          Link do projektu
        </h3>
      </div>
      <span>DATA PUBLIKACJI</span>
      <span>{opinion.public_data}</span>
    </div>
  ));
  return (
    <>
      <section className="opinionsPage" id="opinions">
        <h1 className="title_page">opinie</h1>
        <div className="opinionsBox">
          {opinion}
          <OpinionBtn />
        </div>
        <AddNewOpinion getUsers={getUsers} phoneNumber={phoneNumber} />
        <EditOpinion />
      </section>
      {allPics ? !windowW ? <MobileGallery /> : <AllPicsPopUp /> : null}
    </>
  );
};

export default Opinions;
