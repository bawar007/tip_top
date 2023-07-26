import { useContext } from "react";

import { AppContext } from "../../AppPageProvider/AppPageProvider";

import AddNewOpinion from "./subcomp/addOpinion/addNewOpinion";

import OpinionBtn from "./subcomp/sub/OpinionBtn";
import EditOpinion from "./subcomp/editOpinion/EditOpinion";
import FormHelper from "./helpers/formHelper";
import SingleOpinion from "./subcomp/sub/SingleOpinion";
import MobileGalleryModal from "../GalleryPage/Components/modals/Mobile/MobileGalleryModal";
import DesktopGalleryModal from "../GalleryPage/Components/modals/PC/DesktopGalleryModal";

const Opinions = () => {
  const { windowW, allPicsFromOpinion } = useContext(AppContext);

  return (
    <FormHelper>
      <section
        className="opinionsPage"
        id="opinions"
        data-naviitem=".Opinions-NaviItem"
      >
        <h1 className="title_page">opinie</h1>
        <div className="opinionsBox">
          <SingleOpinion />
          <OpinionBtn />
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
    </FormHelper>
  );
};

export default Opinions;
