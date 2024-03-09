import { useContext, useState } from "react";

import { AppContext } from "../../provider/AppProvider";

import AddNewOpinion from "../../components/AddNewOpinion/AddNewOpinion";

import OpinionInformation from "./components/OpinionInformation/OpinionInformation";
import EditOpinion from "../../components/EditOpinion/EditOpinion";
import OpinionsBoxContent from "./components/OpinionsBoxContent/OpinionsBoxContent";

import "./Opinions.scss";
import Section from "../../components/Section/Section";
import Modal from "../../components/Modal/Modal";

const Opinions = () => {
  const { allPicsFromOpinion } = useContext(AppContext);

  const [toggleAddOpinionModal, setToggleAddOpinionModal] = useState(false);
  const [toggleEditOpinionModal, setToggleEditOpinionModal] = useState(false);

  return (
    <>
      <Section
        className="opinionsPage"
        id="opinions"
        dataNaviitem=".Opinions-NaviItem"
        title="opinie"
      >
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
      </Section>

      {allPicsFromOpinion && <Modal />}
    </>
  );
};

export default Opinions;
