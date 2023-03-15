import { useState } from "react";

import axios from "axios";

import EditOpinionContent from "./EditOpinionContent/EditOpinionContent";

const EditOpinion = () => {
  const [imie, setImie] = useState();
  const [nazwisko, setNazwisko] = useState();
  const [email, setEmail] = useState("");

  const [imieValid, setImieValid] = useState(false);
  const [nazwiskoValid, setNazwiskoValid] = useState(false);

  const info = document.querySelectorAll(".omrs-input-helper");

  const [editOpinion, setEditOpinion] = useState(null);
  const [NextEditPage, setNextEditPage] = useState(false);

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  const validation = () => {
    if (imieValid && nazwiskoValid) {
      getOpinion();
    } else {
      alert("Formularz zawiera błędy");
    }
  };

  const getOpinion = async () => {
    const response = await axios.get("http://localhost:5000/opinions/");

    const c = response.data.filter((el) => el.email === email);

    if (c.length >= 1) {
      const imieEl = c[0].imie.toLowerCase();
      const nazwiskoEl = c[0].nazwisko.toLowerCase();
      if (
        imieEl === imie.toLowerCase() &&
        nazwiskoEl === nazwisko.toLowerCase()
      ) {
        setEditOpinion(c);
        setNextEditPage(true);
      } else {
        alert("Formularz zawiera błędy !!!");
        setNextEditPage(false);
      }
    } else {
      alert("Formularz zawiera błędy !!!");
    }
  };

  const resetForm = () => {
    setImie("");
    setNazwisko("");
    setEmail("");
    handleCloseAddOpinion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "imie") {
      setImie(value);
      if (!value.match(/^[a-zA-Z]+$/)) {
        info[0].innerHTML = "Imię nie może zawierać cyfr";
        setImieValid(false);
      } else {
        info[0].innerHTML = "";
        setImieValid(true);
      }
    }
    if (name === "nazwisko") {
      setNazwisko(value);
      if (!value.match(/^[a-zA-Z]+$/)) {
        info[1].innerHTML = "Nazwisko nie może zawierać cyfr";
        setNazwiskoValid(false);
      } else {
        info[1].innerHTML = "";
        setNazwiskoValid(true);
      }
    }
    if (name === "email") {
      setEmail(value);
    }
  };

  const handleCloseAddOpinion = () => {
    const opinion_box = document.querySelector(".edit_opinion_box");
    const opinionAdd = document.querySelector(".edit_opinion");
    opinionAdd.classList.remove("openModalOpinion");
    opinion_box.classList.remove("openModalBg");
  };

  return (
    <div className="edit_opinion_box">
      <div className="edit_opinion">
        {NextEditPage ? (
          <EditOpinionContent
            editOpinion={editOpinion}
            setNextEditPage={setNextEditPage}
          />
        ) : (
          <form onSubmit={saveOpinion}>
            <h4 style={{ paddingBottom: 20 }}>
              Podaj dane abyśmy mogli znaleźć Twoją opinię
            </h4>
            <div className="omrs-input-group">
              <label className="omrs-input-underlined">
                <input
                  type="text"
                  value={imie}
                  onChange={handleChange}
                  className="imie_form"
                  name="imie"
                  required
                />
                <span className="omrs-input-label">Imię</span>
                <span className="omrs-input-helper"></span>
              </label>
            </div>
            <div className="omrs-input-group">
              <label className="omrs-input-underlined">
                <input
                  type="text"
                  value={nazwisko}
                  onChange={handleChange}
                  className="nazwisko_form"
                  name="nazwisko"
                  required
                />
                <span className="omrs-input-label">Nazwisko</span>
                <span className="omrs-input-helper"></span>
              </label>
            </div>
            <div className="omrs-input-group">
              <label className="omrs-input-underlined">
                <input
                  type="email"
                  value={email}
                  onChange={handleChange}
                  className="email_form"
                  name="email"
                  required
                />
                <span className="omrs-input-label">Email</span>
              </label>
            </div>
            <div className="btnBox">
              <button onSubmit={saveOpinion} className="btn_send">
                Zaakceptuj
              </button>
              <button
                onClick={() => {
                  handleCloseAddOpinion();
                  resetForm();
                }}
                className="btn_send"
              >
                Odrzuć
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditOpinion;
