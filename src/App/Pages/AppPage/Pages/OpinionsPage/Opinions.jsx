import { useContext } from "react";

import { AppContext } from "../../AppPageProvider/AppPageProvider";

import AddNewOpinion from "./components/AddNewOpinion/AddNewOpinion";

import OpinionInformation from "./components/OpinionInformation/OpinionInformation";
import EditOpinion from "./components/EditOpinion/EditOpinion";
import OpinionsBoxContent from "./components/OpinionsBoxContent/OpinionsBoxContent";
import MobileGalleryModal from "../GalleryPage/Components/modals/Mobile/MobileGalleryModal";
import DesktopGalleryModal from "../GalleryPage/Components/modals/PC/DesktopGalleryModal";

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
