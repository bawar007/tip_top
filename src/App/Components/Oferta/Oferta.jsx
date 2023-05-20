import { useContext } from "react";

import OfertsMobile from "./Oferts/Mobile/OfertsMobile";
import OfertsDesktop from "./Oferts/Desktop/OfertsDesktop";

import { AppContext } from "../../Provider/Provider";

const Ofert = () => {
  const { windowW } = useContext(AppContext);

  return (
    <section className="Ofert_Page" id="ofert" data-naviitem=".Ofert-NaviItem">
      <h1 className="title_page">OFERTA</h1>
      <div className="Ofert_Page--Content">
        {windowW ? <OfertsDesktop /> : <OfertsMobile />}
      </div>
    </section>
  );
};

export default Ofert;
