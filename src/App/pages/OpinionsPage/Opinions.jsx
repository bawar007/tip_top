import { useContext } from "react";

import { AppContext } from "../../provider/AppProvider";

import AddNewOpinion from "../../components/AddNewOpinion/AddNewOpinion";

import OpinionInformation from "../../components/OpinionInformation/OpinionInformation";
import EditOpinion from "../../components/EditOpinion/EditOpinion";
import OpinionsBoxContent from "../../components/OpinionsBoxContent/OpinionsBoxContent";
import MobileGalleryModal from "../../components/modals/Mobile/MobileGalleryModal";
import DesktopGalleryModal from "../../components/modals/PC/DesktopGalleryModal";

import "./Opinions.scss";

const Opinions = () => {
  const { windowW, allPicsFromOpinion } = useContext(AppContext);

  return (
    <>
      <section
        className="opinionsPage"
        id="opinions"
        data-naviitem=".Opinions-NaviItem"
      >
        <h1 className="title_page">opinie</h1>
        <div className="opinionsBox">
          <OpinionInformation />
          <OpinionsBoxContent />
        </div>
        <AddNewOpinion />
        <EditOpinion />
      </section>

      {allPicsFromOpinion ? (
        !windowW ? (
          <MobileGalleryModal />
        ) : (
          <DesktopGalleryModal />
        )
      ) : null}
    </>
  );
};

export default Opinions;
