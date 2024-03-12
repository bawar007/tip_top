import { useContext, useState } from "react";

import { AppContext } from "../../provider/AppProvider";

import AddNewOpinion from "../../components/AddNewOpinion/AddNewOpinion";

import OpinionInformation from "./components/OpinionInformation/OpinionInformation";
import EditOpinion from "../../components/EditOpinion/EditOpinion";
import OpinionsBoxContent from "./components/OpinionsBoxContent/OpinionsBoxContent";

import "./Opinions.scss";

import Modal from "../../components/Modal/Modal";

const Opinions = () => {
  const { allPicsFromOpinion } = useContext(AppContext);

  const [toggleAddOpinionModal, setToggleAddOpinionModal] = useState(false);
  const [toggleEditOpinionModal, setToggleEditOpinionModal] = useState(false);

  return (
    <>
      <div className="opinionsPage" title="opinie">
        <div className="opinionsBox">
          <OpinionInformation
            setToggleAddOpinionModal={setToggleAddOpinionModal}
            setToggleEditOpinionModal={setToggleEditOpinionModal}
          />
          <OpinionsBoxContent />
        </div>
        {toggleAddOpinionModal && (
          <AddNewOpinion setToggleAddOpinionModal={setToggleAddOpinionModal} />
        )}
        {toggleEditOpinionModal && (
          <EditOpinion setToggleEditOpinionModal={setToggleEditOpinionModal} />
        )}
      </div>

      {allPicsFromOpinion && <Modal />}
    </>
  );
};

export default Opinions;
