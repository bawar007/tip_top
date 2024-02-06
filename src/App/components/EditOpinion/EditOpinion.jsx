import { useContext, useState } from "react";
import axios from "axios";

import EditOpinionContent from "./components/EditOpinionContent";
import { AppContext } from "../../provider/AppProvider";
import LogoItem from "../../components/LogoItem";

import "./EditOpinion.scss";

const EditOpinion = () => {
  const { HOST, API_KEY } = useContext(AppContext);

  const [editData, setEditData] = useState({
    imie: "",
    email: "",
    loading: false,
  });

  const [editOpinion, setEditOpinion] = useState(null);
  const [NextEditPage, setNextEditPage] = useState(false);

  const checkEmailFetch = async (email) => {
    setEditData((prev) => ({ ...prev, loading: true }));

    try {
      const result = await axios.get(`${HOST}/opinions/${email}`, {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Cache-Control": "no-cache",
        },
      });

      // Tutaj możesz przetwarzać dane z sukcesem (result.data)

      if (result.data === null) return false;
      return result.data;
    } catch (error) {
      // Tutaj obsługuj błędy
      if (error.response) {
        // Żądanie zostało zrealizowane, ale serwer zwrócił status inny niż 2xx
        console.error(
          "Błąd serwera:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // Żądanie zostało wysłane, ale nie otrzymało odpowiedzi
        console.error("Brak odpowiedzi od serwera:", error.request);
      } else {
        // Wystąpił inny błąd
        console.error("Wystąpił błąd:", error.message);
      }
    }
  };

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  const validation = async () => {
    const checkEmail = await checkEmailFetch(editData.email);
    if (!checkEmail) {
      alert("Podałeś niewłaściwe dane lub nie dodałeś opini");
      setEditData((prev) => ({ ...prev, loading: false }));
      return;
    } else {
      setEditOpinion(checkEmail);
      setNextEditPage(true);
      setEditData((prev) => ({ ...prev, loading: false }));
    }
  };

  //mydło

  const resetFormOpinionEdit = () => {
    setEditData({
      imie: "",
      email: "",
      loading: false,
    });
    handleCloseAddOpinion();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCloseAddOpinion = () => {
    const opinion_box = document.querySelector(".edit_opinion_box");
    const opinionAdd = document.querySelector(".edit_opinion");
    opinionAdd.classList.remove("openModalOpinion");
    opinion_box.classList.remove("openModalBg");
    opinion_box.classList.remove("openModalBgEdit");
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
                  value={editData.imie}
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
                  type="email"
                  value={editData.email}
                  onChange={handleChange}
                  className="email_form"
                  name="email"
                  required
                />
                <span className="omrs-input-label">Email</span>
              </label>
            </div>
            {editData.loading ? (
              <LogoItem color="black" />
            ) : (
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
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default EditOpinion;
