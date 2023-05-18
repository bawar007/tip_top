import { useContext, useState } from "react";

import EditOpinionContent from "./EditOpinionContent/EditOpinionContent";
import { AppContext } from "../../../../Provider/Provider";

const EditOpinion = () => {
  const [imie, setImie] = useState();
  const [nazwisko, setNazwisko] = useState();
  const [email, setEmail] = useState("");

  const [imieValid, setImieValid] = useState(false);
  const [nazwiskoValid, setNazwiskoValid] = useState(false);

  const [editOpinion, setEditOpinion] = useState(null);
  const [NextEditPage, setNextEditPage] = useState(false);

  const { opinionsEl } = useContext(AppContext);

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
    const emailFound = opinionsEl.filter((el) => el.email === email);
    if (emailFound.length >= 1) {
      const imieEl = emailFound[0].imie.toLowerCase();
      const nazwiskoEl = emailFound[0].nazwisko.toLowerCase();
      if (
        imieEl === imie.toLowerCase() &&
        nazwiskoEl === nazwisko.toLowerCase()
      ) {
        setEditOpinion(emailFound);
        setNextEditPage(true);
      } else {
        alert("Formularz zawiera błędy !!!");
        setNextEditPage(false);
      }
    } else {
      alert("Formularz zawiera błędy !!!");
    }
  };

  const resetFormOpinionEdit = () => {
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
        setImieValid(false);
      } else {
        setImieValid(true);
      }
    }
    if (name === "nazwisko") {
      setNazwisko(value);
      if (value.match(/[0-9]+$/)) {
        setNazwiskoValid(false);
      } else {
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
    <div className="edit_opinion_box opinion_form_box">
      <div className="edit_opinion opinion_form_content">
        {NextEditPage ? (
          <EditOpinionContent
            editOpinion={editOpinion}
            setNextEditPage={setNextEditPage}
            resetFormOpinionEdit={resetFormOpinionEdit}
          />
        ) : (
          <form onSubmit={saveOpinion} className="opinion_form ">
            <h2 style={{ paddingBottom: 20 }}>
              Podaj dane abyśmy mogli znaleźć Twoją opinię
            </h2>
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
              <button type="submit" className="btn_send">
                Zaakceptuj
              </button>
              <button
                onClick={() => {
                  handleCloseAddOpinion();
                  resetFormOpinionEdit();
                }}
                className="btn_send"
                type="button"
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
