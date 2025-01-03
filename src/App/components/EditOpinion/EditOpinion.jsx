import { useContext, useState } from "react";
import "./EditOpinion.scss";

import EditOpinionNextPage from "./components/EditOpinionNextPage";
import { AppContext } from "../../provider/AppProvider";
import LoadingRing from "../../components/LoadingRing/LoadingRing";
import OpinionBox from "../../pages/OpinionsPage/components/OpinionBox/OpinionBox";
import BackGroundForModals from "../BackGroundForModals/BackGroundForModals";

import ButtonsBox from "../ButtonsBox/ButtonsBox";

import useGetOpinions from "../../../hooks/useGetOpinions";
import Form from "../Form/Form";

const EditOpinion = ({ setToggleEditOpinionModal }) => {
  const { HOST, API_KEY } = useContext(AppContext);

  const [editData, setEditData] = useState({
    imie: "",
    email: "",
    loading: false,
  });

  const [editOpinion, setEditOpinion] = useState(null);
  const [NextEditPage, setNextEditPage] = useState(false);

  const { data: dataOpinions } = useGetOpinions(HOST, API_KEY);

  const checkEmail = () => {
    const opinions = [...dataOpinions.accepted, ...dataOpinions.queued].filter(
      (item) => item.email === editData.email && item.imie === editData.imie
    );
    if (opinions.length === 0) return false;
    return { ok: true, opinion: opinions[0] };
  };

  const saveOpinion = (e) => {
    e.preventDefault();
    validation();
  };

  const validation = async () => {
    const emailTest = checkEmail();

    if (!emailTest.ok) {
      alert("Podałeś niewłaściwe dane lub nie dodałeś opini");
      setEditData((prev) => ({ ...prev, loading: false }));
      return;
    } else {
      setEditOpinion(emailTest.opinion);
      setNextEditPage(true);
      setEditData((prev) => ({ ...prev, loading: true }));
    }
  };

  //mydło

  const resetFormOpinionEdit = () => {
    setEditData({
      imie: "",
      email: "",
      loading: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="edit_opinion_box">
      <BackGroundForModals>
        <OpinionBox className="opinion_form_content" id="edit_opinion">
          {NextEditPage ? (
            <EditOpinionNextPage
              editOpinion={editOpinion}
              setNextEditPage={setNextEditPage}
              resetFormOpinionEdit={resetFormOpinionEdit}
              setToggleEditOpinionModal={setToggleEditOpinionModal}
            />
          ) : (
            <Form
              onSubmit={saveOpinion}
              valueImie={editData.imie}
              valueImieCheck={true}
              onChange={handleChange}
              valueEmail={editData.email}
              valueEmailCheck={true}
            >
              <h2 style={{ paddingBottom: 20 }}>
                Podaj dane abyśmy mogli znaleźć Twoją opinię
              </h2>

              {editData.loading ? (
                <LoadingRing color="black" />
              ) : (
                <ButtonsBox
                  onClick={() => {
                    resetFormOpinionEdit();
                    setToggleEditOpinionModal(false);
                  }}
                  textOne="Zaakceptuj"
                />
              )}
            </Form>
          )}
        </OpinionBox>
      </BackGroundForModals>
    </div>
  );
};

export default EditOpinion;
